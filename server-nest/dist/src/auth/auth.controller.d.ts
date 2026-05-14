import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginByPhoneDto } from './dto/login-phone.dto';
import { LoginByNicknameDto } from './dto/login-nickname.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    wxLogin(dto: LoginDto): Promise<{
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
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
    }>;
    logout(req: any, userId: number): Promise<{
        message: string;
    }>;
}
