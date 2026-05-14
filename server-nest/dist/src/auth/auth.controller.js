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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const login_dto_1 = require("./dto/login.dto");
const login_phone_dto_1 = require("./dto/login-phone.dto");
const login_nickname_dto_1 = require("./dto/login-nickname.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async wxLogin(dto) {
        return this.authService.wxLogin(dto.code, dto.userInfo);
    }
    async loginByPhone(dto) {
        return this.authService.loginByPhone(dto);
    }
    async loginByNickname(dto) {
        return this.authService.loginByNickname(dto);
    }
    async getProfile(userId) {
        return this.authService.getProfile(userId);
    }
    async updateProfile(userId, dto) {
        return this.authService.updateProfile(userId, dto);
    }
    async uploadAvatar(userId, file) {
        return this.authService.uploadAvatar(userId, file);
    }
    async refreshToken(refreshToken) {
        return this.authService.refreshToken(refreshToken);
    }
    async logout(req, userId) {
        const authHeader = req.headers?.authorization;
        if (!authHeader) {
            throw new common_1.BadRequestException('缺少认证令牌');
        }
        const token = authHeader.replace('Bearer ', '');
        return this.authService.logout(userId, token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "wxLogin", null);
__decorate([
    (0, common_1.Post)('login-by-phone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_phone_dto_1.LoginByPhoneDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginByPhone", null);
__decorate([
    (0, common_1.Post)('login-by-nickname'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_nickname_dto_1.LoginByNicknameDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginByNickname", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('upload-avatar'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/avatars',
            filename: (req, file, cb) => {
                const userId = req.user?.id;
                const ext = (0, path_1.extname)(file.originalname);
                cb(null, `avatar_${userId}_${Date.now()}${ext}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            const allowed = /jpeg|jpg|png|gif|webp/;
            const extOk = allowed.test((0, path_1.extname)(file.originalname).toLowerCase());
            const mimeOk = allowed.test(file.mimetype);
            if (extOk && mimeOk) {
                cb(null, true);
            }
            else {
                cb(new common_1.BadRequestException('只支持图片格式'), false);
            }
        },
        limits: { fileSize: 5 * 1024 * 1024 },
    })),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map