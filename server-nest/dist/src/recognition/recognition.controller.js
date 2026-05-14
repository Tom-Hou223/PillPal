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
var RecognitionController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecognitionController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const family_access_guard_1 = require("../families/guards/family-access.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const recognition_service_1 = require("./recognition.service");
const barcode_recognize_dto_1 = require("./dto/barcode-recognize.dto");
const history_query_dto_1 = require("./dto/history-query.dto");
let RecognitionController = RecognitionController_1 = class RecognitionController {
    recognitionService;
    logger = new common_1.Logger(RecognitionController_1.name);
    constructor(recognitionService) {
        this.recognitionService = recognitionService;
        this.logger.log('RecognitionController 初始化完成');
    }
    async recognizeBarcode(dto, userId, req) {
        this.logger.log('收到 barcode 识别请求:', dto.barcode);
        const result = await this.recognitionService.recognizeBarcode(dto.barcode);
        await this.recognitionService.saveHistory(userId, BigInt(req.familyId), 'barcode', dto.barcode, result.data);
        this.logger.log('barcode 识别完成:', result);
        return result;
    }
    async recognizeImage(file, userId, req) {
        this.logger.log('收到 image 识别请求，文件:', file?.originalname, file?.size, 'bytes');
        if (!file) {
            throw new common_1.BadRequestException('请选择图片文件');
        }
        const result = await this.recognitionService.recognizeImage(file.buffer);
        await this.recognitionService.saveHistory(userId, BigInt(req.familyId), 'image', file.originalname, result.data);
        this.logger.log('image 识别完成:', result);
        return result;
    }
    async getHistory(query, userId, req) {
        return this.recognitionService.getHistory(userId, BigInt(req.familyId), query.page ?? 1, query.limit ?? 20);
    }
};
exports.RecognitionController = RecognitionController;
__decorate([
    (0, common_1.Post)('barcode'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [barcode_recognize_dto_1.BarcodeRecognizeDto, Number, Object]),
    __metadata("design:returntype", Promise)
], RecognitionController.prototype, "recognizeBarcode", null);
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)(), limits: { fileSize: 4 * 1024 * 1024 } })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], RecognitionController.prototype, "recognizeImage", null);
__decorate([
    (0, common_1.Get)('history'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_query_dto_1.HistoryQueryDto, Number, Object]),
    __metadata("design:returntype", Promise)
], RecognitionController.prototype, "getHistory", null);
exports.RecognitionController = RecognitionController = RecognitionController_1 = __decorate([
    (0, common_1.Controller)('api/medicine/recognize'),
    __metadata("design:paramtypes", [recognition_service_1.RecognitionService])
], RecognitionController);
//# sourceMappingURL=recognition.controller.js.map