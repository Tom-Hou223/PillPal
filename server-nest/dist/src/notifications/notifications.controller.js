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
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const notifications_service_1 = require("./notifications.service");
const subscribe_dto_1 = require("./dto/subscribe.dto");
const settings_dto_1 = require("./dto/settings.dto");
let NotificationsController = class NotificationsController {
    notificationsService;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    subscribe(userId, dto) {
        return this.notificationsService.subscribe(userId, dto.templateType);
    }
    unsubscribe(userId, templateType) {
        return this.notificationsService.unsubscribe(userId, templateType);
    }
    getSubscriptions(userId) {
        return this.notificationsService.getSubscriptions(userId);
    }
    saveSettings(userId, dto) {
        return this.notificationsService.saveSettings(userId, dto);
    }
    getSettings(userId) {
        return this.notificationsService.getSettings(userId);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, subscribe_dto_1.SubscribeDto]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Delete)('unsubscribe/:templateType'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('templateType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "unsubscribe", null);
__decorate([
    (0, common_1.Get)('subscriptions'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getSubscriptions", null);
__decorate([
    (0, common_1.Post)('settings'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, settings_dto_1.SettingsDto]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "saveSettings", null);
__decorate([
    (0, common_1.Get)('settings'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getSettings", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, common_1.Controller)('api/notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map