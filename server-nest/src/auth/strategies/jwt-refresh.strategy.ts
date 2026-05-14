import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.refreshSecret')!,
      passReqToCallback: true,
    } as any);
  }

  async validate(req: any, payload: { userId: number; openid: string }) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token) {
      throw new UnauthorizedException('缺少令牌');
    }

    const refreshTokenRecord = await this.prisma.refreshToken.findFirst({
      where: { token, userId: payload.userId },
    });

    const user = refreshTokenRecord
      ? await this.prisma.user.findUnique({ where: { id: refreshTokenRecord.userId } })
      : null;

    if (!refreshTokenRecord || !user) {
      throw new UnauthorizedException('刷新令牌无效');
    }

    if (new Date() > refreshTokenRecord.expiresAt) {
      throw new UnauthorizedException('刷新令牌已过期');
    }

    return {
      id: Number(user.id),
      openid: user.openid,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl,
    };
  }
}
