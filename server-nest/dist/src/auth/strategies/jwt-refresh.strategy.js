"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    configService;
    prisma;
    constructor(configService, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.refreshSecret'),
            passReqToCallback: true,
        });
        this.configService = configService;
        this.prisma = prisma;
    }
    async validate(req, payload) {
        const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        if (!token) {
            throw new common_1.UnauthorizedException('缺少令牌');
        }
        const refreshTokenRecord = await this.prisma.refreshToken.findFirst({
            where: { token, userId: payload.userId },
        });
        const user = refreshTokenRecord
            ? await this.prisma.user.findUnique({ where: { id: refreshTokenRecord.userId } })
            : null;
        if (!refreshTokenRecord || !user) {
            throw new common_1.UnauthorizedException('刷新令牌无效');
        }
        if (new Date() > refreshTokenRecord.expiresAt) {
            throw new common_1.UnauthorizedException('刷新令牌已过期');
        }
        return {
            id: Number(user.id),
            openid: user.openid,
            nickname: user.nickname,
            avatarUrl: user.avatarUrl,
        };
    }
};
exports.JwtRefreshStrategy = JwtRefreshStrategy;
exports.JwtRefreshStrategy = JwtRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], JwtRefreshStrategy);
//# sourceMappingURL=jwt-refresh.strategy.js.map