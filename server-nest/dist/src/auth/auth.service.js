"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const redis_service_1 = require("../redis/redis.service");
const bcrypt = __importStar(require("bcrypt"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let AuthService = class AuthService {
    prisma;
    redis;
    jwtService;
    configService;
    wechatAppId;
    wechatAppSecret;
    constructor(prisma, redis, jwtService, configService) {
        this.prisma = prisma;
        this.redis = redis;
        this.jwtService = jwtService;
        this.configService = configService;
        this.wechatAppId = this.configService.get('wechat.appId') ?? '';
        this.wechatAppSecret = this.configService.get('wechat.appSecret') ?? '';
    }
    async computeFamilies(userId) {
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
    generateAccessToken(userId, openid) {
        return this.jwtService.sign({ userId, openid });
    }
    async generateAndSaveRefreshToken(userId) {
        const refreshExpiresIn = this.configService.get('jwt.refreshExpiresIn') || '7d';
        let expiresInSeconds = 7 * 24 * 60 * 60;
        if (typeof refreshExpiresIn === 'string') {
            const match = refreshExpiresIn.match(/^(\d+)([smhd])$/);
            if (match) {
                const num = parseInt(match[1], 10);
                const unit = match[2];
                const multipliers = {
                    s: 1,
                    m: 60,
                    h: 3600,
                    d: 86400,
                };
                expiresInSeconds = num * (multipliers[unit] || 86400);
            }
        }
        const refreshSecret = this.configService.get('jwt.refreshSecret');
        const refreshTokenStr = this.jwtService.sign({ userId }, { secret: refreshSecret, expiresIn: expiresInSeconds });
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
    async buildLoginResponse(userId, openid) {
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
    async wxLogin(code, userInfo) {
        if (!this.wechatAppId || !this.wechatAppSecret) {
            throw new common_1.InternalServerErrorException('微信配置缺失');
        }
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.wechatAppId}&secret=${this.wechatAppSecret}&js_code=${code}&grant_type=authorization_code`;
        let wxResponse;
        try {
            const res = await fetch(url);
            wxResponse = await res.json();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('微信登录请求失败');
        }
        if (wxResponse.errcode) {
            throw new common_1.BadRequestException(`微信登录失败: ${wxResponse.errmsg || wxResponse.errcode}`);
        }
        const { openid, session_key } = wxResponse;
        if (!openid) {
            throw new common_1.BadRequestException('微信登录失败: 未获取到 openid');
        }
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
    async loginByPhone(dto) {
        const { phone, password } = dto;
        let user = await this.prisma.user.findUnique({ where: { phone } });
        let isNewUser = false;
        if (!user) {
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
        }
        else {
            if (user.password) {
                if (!password) {
                    throw new common_1.BadRequestException('请输入密码');
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new common_1.UnauthorizedException('手机号或密码错误');
                }
            }
            else if (password) {
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
    async loginByNickname(dto) {
        const { nickname, password } = dto;
        const user = await this.prisma.user.findFirst({ where: { nickname } });
        if (!user) {
            throw new common_1.UnauthorizedException('用户不存在');
        }
        if (user.password) {
            if (!password) {
                throw new common_1.BadRequestException('请输入密码');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new common_1.UnauthorizedException('昵称或密码错误');
            }
        }
        return this.buildLoginResponse(Number(user.id), user.openid);
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                familyUserRoles: {
                    include: { family: true },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('用户不存在');
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
    async updateProfile(userId, dto) {
        const updateData = {};
        if (dto.nickname !== undefined) {
            updateData.nickname = dto.nickname;
        }
        if (dto.avatarUrl !== undefined) {
            updateData.avatarUrl = dto.avatarUrl;
        }
        if (dto.phone !== undefined) {
            const existing = await this.prisma.user.findUnique({
                where: { phone: dto.phone },
            });
            if (existing && Number(existing.id) !== userId) {
                throw new common_1.ConflictException('手机号已被其他用户绑定');
            }
            updateData.phone = dto.phone;
        }
        if (Object.keys(updateData).length === 0) {
            throw new common_1.BadRequestException('没有需要更新的字段');
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
    async uploadAvatar(userId, file) {
        if (!file) {
            throw new common_1.BadRequestException('未上传文件');
        }
        const avatarUrl = `/uploads/avatars/${file.filename}`;
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { avatarUrl: true },
        });
        if (user?.avatarUrl) {
            const oldPath = path.join(process.cwd(), user.avatarUrl.replace(/^\//, ''));
            if (fs.existsSync(oldPath)) {
                try {
                    fs.unlinkSync(oldPath);
                }
                catch {
                }
            }
        }
        await this.prisma.user.update({
            where: { id: userId },
            data: { avatarUrl },
        });
        return {
            avatarUrl,
            filename: file.filename,
        };
    }
    async refreshToken(refreshTokenStr) {
        if (!refreshTokenStr) {
            throw new common_1.BadRequestException('缺少刷新令牌');
        }
        const record = await this.prisma.refreshToken.findFirst({
            where: { token: refreshTokenStr },
        });
        if (!record) {
            throw new common_1.UnauthorizedException('刷新令牌无效');
        }
        if (new Date() > record.expiresAt) {
            await this.prisma.refreshToken.delete({ where: { id: record.id } });
            throw new common_1.UnauthorizedException('刷新令牌已过期');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: record.userId },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('用户不存在');
        }
        const accessToken = this.generateAccessToken(Number(user.id), user.openid);
        return { accessToken };
    }
    async logout(userId, accessToken) {
        try {
            if (this.redis.connected) {
                const decoded = this.jwtService.decode(accessToken);
                if (decoded && decoded.exp) {
                    const ttl = decoded.exp - Math.floor(Date.now() / 1000);
                    if (ttl > 0) {
                        await this.redis.client.set(`blacklist:${accessToken}`, '1', 'EX', ttl);
                    }
                }
            }
        }
        catch {
        }
        await this.prisma.refreshToken.deleteMany({
            where: { userId: Number(userId) },
        });
        return { message: '登出成功' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map