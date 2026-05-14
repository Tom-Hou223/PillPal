import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../redis/redis.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prisma;
    private redis;
    constructor(configService: ConfigService, prisma: PrismaService, redis: RedisService);
    validate(req: any, payload: {
        userId: number;
        openid: string;
    }): Promise<{
        id: number;
        openid: string;
        nickname: string | null;
        avatarUrl: string | null;
    }>;
}
export {};
