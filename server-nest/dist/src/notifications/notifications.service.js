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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    prisma;
    configService;
    logger = new common_1.Logger(NotificationsService_1.name);
    wechatAccessToken = null;
    wechatTokenExpireTime = null;
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    async subscribe(userId, templateType) {
        if (!['expiry', 'medication'].includes(templateType)) {
            throw new common_1.BadRequestException('无效的模板类型');
        }
        const templateId = this.configService.get(`wechat.templates.${templateType}`);
        if (!templateId) {
            throw new common_1.InternalServerErrorException('模板ID未配置');
        }
        const existing = await this.prisma.userSubscription.findUnique({
            where: {
                userId_templateType: {
                    userId: BigInt(userId),
                    templateType,
                },
            },
        });
        if (existing) {
            await this.prisma.userSubscription.update({
                where: { id: existing.id },
                data: {
                    isActive: true,
                    templateId,
                    subscribedAt: new Date(),
                },
            });
        }
        else {
            await this.prisma.userSubscription.create({
                data: {
                    userId: BigInt(userId),
                    templateId,
                    templateType,
                    isActive: true,
                },
            });
        }
        return { message: '订阅成功' };
    }
    async unsubscribe(userId, templateType) {
        const existing = await this.prisma.userSubscription.findUnique({
            where: {
                userId_templateType: {
                    userId: BigInt(userId),
                    templateType,
                },
            },
        });
        if (existing) {
            await this.prisma.userSubscription.update({
                where: { id: existing.id },
                data: { isActive: false },
            });
        }
        return { message: '取消订阅成功' };
    }
    async getSubscriptions(userId) {
        const subscriptions = await this.prisma.userSubscription.findMany({
            where: { userId: BigInt(userId) },
            select: {
                templateType: true,
                isActive: true,
                subscribedAt: true,
            },
        });
        const templates = {};
        const expiryTemplate = this.configService.get('wechat.templates.expiry');
        const medicationTemplate = this.configService.get('wechat.templates.medication');
        if (expiryTemplate)
            templates.expiry = expiryTemplate;
        if (medicationTemplate)
            templates.medication = medicationTemplate;
        return {
            subscriptions,
            templates,
        };
    }
    async saveSettings(userId, dto) {
        const existing = await this.prisma.userNotificationSetting.findUnique({
            where: { userId: BigInt(userId) },
        });
        const data = {};
        if (dto.reminderTime !== undefined)
            data.reminderTime = dto.reminderTime;
        if (dto.expiryWarningDays !== undefined)
            data.expiryWarningDays = dto.expiryWarningDays;
        if (existing) {
            await this.prisma.userNotificationSetting.update({
                where: { userId: BigInt(userId) },
                data,
            });
        }
        else {
            await this.prisma.userNotificationSetting.create({
                data: {
                    userId: BigInt(userId),
                    reminderTime: dto.reminderTime ?? 15,
                    expiryWarningDays: dto.expiryWarningDays ?? 30,
                },
            });
        }
        return { message: '保存成功' };
    }
    async getSettings(userId) {
        const settings = await this.prisma.userNotificationSetting.findUnique({
            where: { userId: BigInt(userId) },
            select: {
                reminderTime: true,
                expiryWarningDays: true,
            },
        });
        if (!settings) {
            return {
                reminderTime: 15,
                expiryWarningDays: 30,
            };
        }
        return settings;
    }
    async getWechatAccessToken() {
        if (this.wechatAccessToken && this.wechatTokenExpireTime && Date.now() < this.wechatTokenExpireTime) {
            return this.wechatAccessToken;
        }
        const appId = this.configService.get('wechat.appId');
        const appSecret = this.configService.get('wechat.appSecret');
        if (!appId || !appSecret) {
            throw new common_1.InternalServerErrorException('微信配置缺失');
        }
        const response = await axios_1.default.get('https://api.weixin.qq.com/cgi-bin/token', {
            params: {
                grant_type: 'client_credential',
                appid: appId,
                secret: appSecret,
            },
        });
        if (response.data.access_token) {
            this.wechatAccessToken = response.data.access_token;
            this.wechatTokenExpireTime = Date.now() + 110 * 60 * 1000;
            this.logger.log('获取微信 access_token 成功');
            return this.wechatAccessToken;
        }
        throw new common_1.InternalServerErrorException(response.data.errmsg || '获取 access_token 失败');
    }
    async sendSubscribeMessage(openid, templateId, data, page = 'pages/index/index') {
        try {
            const accessToken = await this.getWechatAccessToken();
            const url = `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${accessToken}`;
            const response = await axios_1.default.post(url, {
                touser: openid,
                template_id: templateId,
                page,
                data,
                miniprogram_state: 'developer',
            });
            if (response.data.errcode === 0) {
                this.logger.log(`订阅消息发送成功: ${openid}`);
                return { success: true };
            }
            this.logger.error(`订阅消息发送失败: ${response.data.errmsg}`);
            return { success: false, error: response.data.errmsg };
        }
        catch (error) {
            this.logger.error('发送订阅消息异常:', error.message);
            return { success: false, error: error.message };
        }
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    async checkAndSendExpiryNotifications() {
        this.logger.log('开始检查药品过期状态...');
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                openid: true,
                nickname: true,
                familyUserRoles: {
                    select: { familyId: true },
                },
            },
        });
        const expiryTemplateId = this.configService.get('wechat.templates.expiry');
        for (const user of users) {
            if (!user.openid)
                continue;
            const expiresInSeconds = 7 * 24 * 60 * 60;
            const settings = await this.prisma.userNotificationSetting.findUnique({
                where: { userId: user.id },
            });
            const warningDays = settings?.expiryWarningDays ?? 30;
            const warningDate = new Date(Date.now() + warningDays * 24 * 60 * 60 * 1000);
            for (const role of user.familyUserRoles) {
                const medicines = await this.prisma.medicine.findMany({
                    where: {
                        familyId: role.familyId,
                        expiryDate: {
                            lte: warningDate,
                            gt: new Date(),
                        },
                    },
                });
                if (medicines.length === 0)
                    continue;
                const subscription = await this.prisma.userSubscription.findUnique({
                    where: {
                        userId_templateType: {
                            userId: user.id,
                            templateType: 'expiry',
                        },
                    },
                });
                if (!subscription || !subscription.isActive)
                    continue;
                for (const medicine of medicines) {
                    const daysToExpiry = medicine.expiryDate
                        ? Math.ceil((medicine.expiryDate.getTime() - Date.now()) / (1000 * 3600 * 24))
                        : 0;
                    await this.sendSubscribeMessage(user.openid, expiryTemplateId || '', {
                        thing1: { value: medicine.name.substring(0, 20) },
                        date2: { value: this.formatDate(medicine.expiryDate || new Date()) },
                        number3: { value: String(daysToExpiry) },
                        thing4: { value: '请及时使用或处理' },
                    }, 'pages/medicine/medicine');
                }
            }
        }
        this.logger.log('药品过期检查完成');
    }
    async checkAndSendMedicationNotifications() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentDate = now.toISOString().split('T')[0];
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                openid: true,
                nickname: true,
                familyUserRoles: {
                    select: { familyId: true },
                },
            },
        });
        const medicationTemplateId = this.configService.get('wechat.templates.medication');
        for (const user of users) {
            if (!user.openid)
                continue;
            const settings = await this.prisma.userNotificationSetting.findUnique({
                where: { userId: user.id },
            });
            const reminderTime = settings?.reminderTime ?? 15;
            for (const role of user.familyUserRoles) {
                const plans = await this.prisma.plan.findMany({
                    where: {
                        familyId: role.familyId,
                        status: 'active',
                        OR: [
                            { endDate: null },
                            { endDate: { gte: new Date(currentDate) } },
                        ],
                    },
                });
                for (const plan of plans) {
                    const timeSlots = plan.timeSlots;
                    if (!timeSlots)
                        continue;
                    for (const slot of timeSlots) {
                        if (!slot.includes(':'))
                            continue;
                        const [slotHour, slotMinute] = slot.split(':').map(Number);
                        if (isNaN(slotHour) || isNaN(slotMinute))
                            continue;
                        const slotTime = slotHour * 60 + slotMinute;
                        const currentTime = currentHour * 60 + currentMinute;
                        const timeDiff = slotTime - currentTime;
                        if (timeDiff === reminderTime) {
                            const subscription = await this.prisma.userSubscription.findUnique({
                                where: {
                                    userId_templateType: {
                                        userId: user.id,
                                        templateType: 'medication',
                                    },
                                },
                            });
                            if (subscription && subscription.isActive) {
                                await this.sendSubscribeMessage(user.openid, medicationTemplateId || '', {
                                    thing1: { value: plan.medicineName.substring(0, 20) },
                                    time2: { value: slot },
                                    thing3: { value: plan.memberName.substring(0, 20) },
                                    thing4: { value: plan.frequency || '按时服用' },
                                }, 'pages/plan/plan');
                            }
                        }
                    }
                }
            }
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map