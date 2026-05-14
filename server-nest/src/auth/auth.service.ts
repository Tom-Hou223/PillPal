import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import * as bcrypt from 'bcrypt';
import * as path from 'path';
import * as fs from 'fs';
import { LoginByPhoneDto } from './dto/login-phone.dto';
import { LoginByNicknameDto } from './dto/login-nickname.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class AuthService {
  private readonly wechatAppId: string;
  private readonly wechatAppSecret: string;

  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.wechatAppId = this.configService.get('wechat.appId') ?? '';
    this.wechatAppSecret = this.configService.get('wechat.appSecret') ?? '';
  }

  /**
   * Compute families array for a given userId
   */
  private async computeFamilies(userId: bigint | number) {
    const roles = await this.prisma.familyUserRole.findMany({
      where: { userId: Number(userId) },
      include: { family: true },
    });
    return roles.map((r) => ({
      id: Number(r.familyId),
      name: r.family.name,
      inviteCode: r.family.inviteCode,
      role: r.role,
      relationship: r.relationship,
    }));
  }

  /**
   * Generate JWT access token
   */
  private generateAccessToken(userId: number, openid: string): string {
    return this.jwtService.sign({ userId, openid });
  }

  /**
   * Generate and persist a refresh token
   */
  private async generateAndSaveRefreshToken(userId: number) {
    const refreshExpiresIn = this.configService.get('jwt.refreshExpiresIn') || '7d';

    // Parse expiry string to seconds, default 7 days
    let expiresInSeconds = 7 * 24 * 60 * 60;
    if (typeof refreshExpiresIn === 'string') {
      const match = refreshExpiresIn.match(/^(\d+)([smhd])$/);
      if (match) {
        const num = parseInt(match[1], 10);
        const unit = match[2];
        const multipliers: Record<string, number> = {
          s: 1,
          m: 60,
          h: 3600,
          d: 86400,
        };
        expiresInSeconds = num * (multipliers[unit] || 86400);
      }
    }

    const refreshSecret = this.configService.get('jwt.refreshSecret');
    const refreshTokenStr = this.jwtService.sign(
      { userId },
      { secret: refreshSecret, expiresIn: expiresInSeconds },
    );

    const expiresAt = new Date(Date.now() + expiresInSeconds * 1000);

    await this.prisma.refreshToken.create({
      data: {
        userId: Number(userId),
        token: refreshTokenStr,
        expiresAt,
      },
    });

    return refreshTokenStr;
  }

  /**
   * Shared post-login logic: generate tokens and lookup families
   */
  private async buildLoginResponse(userId: number, openid: string) {
    const accessToken = this.generateAccessToken(userId, openid);
    const refreshToken = await this.generateAndSaveRefreshToken(userId);
    const families = await this.computeFamilies(userId);

    return {
      token: accessToken,
      refreshToken,
      userId: Number(userId),
      openid,
      hasFamily: families.length > 0,
      families,
    };
  }

  // ====================== WX LOGIN ======================

  async wxLogin(code: string, userInfo?: any) {
    if (!this.wechatAppId || !this.wechatAppSecret) {
      throw new InternalServerErrorException('微信配置缺失');
    }

    // Call WeChat API
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.wechatAppId}&secret=${this.wechatAppSecret}&js_code=${code}&grant_type=authorization_code`;

    let wxResponse: any;
    try {
      const res = await fetch(url);
      wxResponse = await res.json();
    } catch (err) {
      throw new InternalServerErrorException('微信登录请求失败');
    }

    if (wxResponse.errcode) {
      throw new BadRequestException(`微信登录失败: ${wxResponse.errmsg || wxResponse.errcode}`);
    }

    const { openid, session_key } = wxResponse;
    if (!openid) {
      throw new BadRequestException('微信登录失败: 未获取到 openid');
    }

    // Find or create user
    let user = await this.prisma.user.findUnique({ where: { openid } });

    if (!user) {
      const now = Date.now();
      const nickname = userInfo?.nickName || `用户${now.toString().slice(-6)}`;

      user = await this.prisma.user.create({
        data: {
          id: BigInt(now),
          openid,
          nickname,
        },
      });
    }

    return this.buildLoginResponse(Number(user.id), user.openid);
  }

  // ====================== LOGIN BY PHONE ======================

  async loginByPhone(dto: LoginByPhoneDto) {
    const { phone, password } = dto;

    let user = await this.prisma.user.findUnique({ where: { phone } });
    let isNewUser = false;

    if (!user) {
      // Create new user
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : null;

      user = await this.prisma.user.create({
        data: {
          id: BigInt(Date.now()),
          openid: `phone_${phone}`,
          phone,
          password: hashedPassword,
          nickname: `用户${phone.slice(-4)}`,
        },
      });
      isNewUser = true;
    } else {
      // Existing user: verify password if set
      if (user.password) {
        if (!password) {
          throw new BadRequestException('请输入密码');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new UnauthorizedException('手机号或密码错误');
        }
      } else if (password) {
        // User exists but has no password set — set it now
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: { password: hashedPassword },
        });
      }
    }

    const result = await this.buildLoginResponse(Number(user.id), user.openid);
    return { ...result, isNewUser };
  }

  // ====================== LOGIN BY NICKNAME ======================

  async loginByNickname(dto: LoginByNicknameDto) {
    const { nickname, password } = dto;

    const user = await this.prisma.user.findFirst({ where: { nickname } });
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }

    if (user.password) {
      if (!password) {
        throw new BadRequestException('请输入密码');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException('昵称或密码错误');
      }
    }

    return this.buildLoginResponse(Number(user.id), user.openid);
  }

  // ====================== GET PROFILE ======================

  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        familyUserRoles: {
          include: { family: true },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('用户不存在');
    }

    return {
      id: Number(user.id),
      openid: user.openid,
      phone: user.phone,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
      families: user.familyUserRoles.map((r) => ({
        id: Number(r.familyId),
        name: r.family.name,
        inviteCode: r.family.inviteCode,
        role: r.role,
        relationship: r.relationship,
      })),
    };
  }

  // ====================== UPDATE PROFILE ======================

  async updateProfile(userId: number, dto: UpdateProfileDto) {
    const updateData: Record<string, any> = {};

    if (dto.nickname !== undefined) {
      updateData.nickname = dto.nickname;
    }
    if (dto.avatarUrl !== undefined) {
      updateData.avatarUrl = dto.avatarUrl;
    }
    if (dto.phone !== undefined) {
      // Check uniqueness
      const existing = await this.prisma.user.findUnique({
        where: { phone: dto.phone },
      });
      if (existing && Number(existing.id) !== userId) {
        throw new ConflictException('手机号已被其他用户绑定');
      }
      updateData.phone = dto.phone;
    }

    if (Object.keys(updateData).length === 0) {
      throw new BadRequestException('没有需要更新的字段');
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return {
      id: Number(user.id),
      openid: user.openid,
      phone: user.phone,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl,
    };
  }

  // ====================== UPLOAD AVATAR ======================

  async uploadAvatar(userId: number, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('未上传文件');
    }

    const avatarUrl = `/uploads/avatars/${file.filename}`;

    // Delete old avatar file if exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { avatarUrl: true },
    });

    if (user?.avatarUrl) {
      const oldPath = path.join(process.cwd(), user.avatarUrl.replace(/^\//, ''));
      if (fs.existsSync(oldPath)) {
        try {
          fs.unlinkSync(oldPath);
        } catch {
          // ignore file delete errors
        }
      }
    }

    // Update user in DB
    await this.prisma.user.update({
      where: { id: userId },
      data: { avatarUrl },
    });

    return {
      avatarUrl,
      filename: file.filename,
    };
  }

  // ====================== REFRESH TOKEN ======================

  async refreshToken(refreshTokenStr: string) {
    if (!refreshTokenStr) {
      throw new BadRequestException('缺少刷新令牌');
    }

    const record = await this.prisma.refreshToken.findFirst({
      where: { token: refreshTokenStr },
    });

    if (!record) {
      throw new UnauthorizedException('刷新令牌无效');
    }

    if (new Date() > record.expiresAt) {
      // Clean up expired token
      await this.prisma.refreshToken.delete({ where: { id: record.id } });
      throw new UnauthorizedException('刷新令牌已过期');
    }

    // Generate new access token
    const user = await this.prisma.user.findUnique({
      where: { id: record.userId },
    });

    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }

    const accessToken = this.generateAccessToken(Number(user.id), user.openid);

    return { accessToken };
  }

  // ====================== LOGOUT ======================

  async logout(userId: number, accessToken: string) {
    // Add access token to Redis blacklist (only if Redis connected)
    try {
      if (this.redis.connected) {
        const decoded: any = this.jwtService.decode(accessToken);
        if (decoded && decoded.exp) {
          const ttl = decoded.exp - Math.floor(Date.now() / 1000);
          if (ttl > 0) {
            await this.redis.client.set(
              `blacklist:${accessToken}`,
              '1',
              'EX',
              ttl,
            );
          }
        }
      }
    } catch {
      // If decode fails, still proceed to delete refresh tokens
    }

    // Delete all refresh tokens for user
    await this.prisma.refreshToken.deleteMany({
      where: { userId: Number(userId) },
    });

    return { message: '登出成功' };
  }
}
