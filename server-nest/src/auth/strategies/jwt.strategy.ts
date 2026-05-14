import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../redis/redis.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private redis: RedisService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.accessSecret')!,
      passReqToCallback: true,
    } as any);
  }

  async validate(req: any, payload: { userId: number; openid: string }) {
    // 1. 检查 Redis 黑名单（仅当 Redis 连接时）
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (this.redis.connected) {
      const isBlacklisted = await this.redis.client.get(`blacklist:${token}`);
      if (isBlacklisted) {
        throw new UnauthorizedException('令牌已被登出');
      }
    }

    // 2. 查数据库确认用户存在
    const user = await this.prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, openid: true, nickname: true, avatarUrl: true },
    });
    if (!user) throw new UnauthorizedException('用户不存在');

    return { ...user, id: Number(user.id) };
  }
}