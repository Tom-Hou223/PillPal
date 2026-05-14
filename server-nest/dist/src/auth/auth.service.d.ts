import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { LoginByPhoneDto } from './dto/login-phone.dto';
import { LoginByNicknameDto } from './dto/login-nickname.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class AuthService {
    private prisma;
    private redis;
    private jwtService;
    private configService;
    private readonly wechatAppId;
    private readonly wechatAppSecret;
    constructor(prisma: PrismaService, redis: RedisService, jwtService: JwtService, configService: ConfigService);
    private computeFamilies;
    private generateAccessToken;
    private generateAndSaveRefreshToken;
    private buildLoginResponse;
    wxLogin(code: string, userInfo?: any): Promise<{
        token: string;
        refreshToken: string;
        userId: number;
        openid: string;
        hasFamily: boolean;
        families: {
            id: number;
            name: string;
            inviteCode: string | null;
            role: import("@prisma/client").$Enums.FamilyRole | null;
            relationship: string | null;
        }[];
    }>;
    loginByPhone(dto: LoginByPhoneDto): Promise<{
        isNewUser: boolean;
        token: string;
        refreshToken: string;
        userId: number;
        openid: string;
        hasFamily: boolean;
        families: {
            id: number;
            name: string;
            inviteCode: string | null;
            role: import("@prisma/client").$Enums.FamilyRole | null;
            relationship: string | null;
        }[];
    }>;
    loginByNickname(dto: LoginByNicknameDto): Promise<{
        token: string;
        refreshToken: string;
        userId: number;
        openid: string;
        hasFamily: boolean;
        families: {
            id: number;
            name: string;
            inviteCode: string | null;
            role: import("@prisma/client").$Enums.FamilyRole | null;
            relationship: string | null;
        }[];
    }>;
    getProfile(userId: number): Promise<{
        id: number;
        openid: string;
        phone: string | null;
        nickname: string | null;
        avatarUrl: string | null;
        createdAt: Date | null;
        families: {
            id: number;
            name: string;
            inviteCode: string | null;
            role: import("@prisma/client").$Enums.FamilyRole | null;
            relationship: string | null;
        }[];
    }>;
    updateProfile(userId: number, dto: UpdateProfileDto): Promise<{
        id: number;
        openid: string;
        phone: string | null;
        nickname: string | null;
        avatarUrl: string | null;
    }>;
    uploadAvatar(userId: number, file: Express.Multer.File): Promise<{
        avatarUrl: string;
        filename: string;
    }>;
    refreshToken(refreshTokenStr: string): Promise<{
        accessToken: string;
    }>;
    logout(userId: number, accessToken: string): Promise<{
        message: string;
    }>;
}
