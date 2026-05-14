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
var ReminderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
let ReminderService = ReminderService_1 = class ReminderService {
    prisma;
    notificationsService;
    logger = new common_1.Logger(ReminderService_1.name);
    constructor(prisma, notificationsService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
    }
    async checkExpiryNotifications() {
        this.logger.log('执行定时任务：药品过期检查');
        try {
            await this.notificationsService.checkAndSendExpiryNotifications();
        }
        catch (error) {
            this.logger.error('药品过期检查失败:', error.message);
        }
    }
    async checkMedicationNotifications() {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const plans = await this.prisma.plan.findMany({
            where: { status: 'active' },
        });
        for (const plan of plans) {
            const timeSlots = plan.timeSlots;
            if (timeSlots && timeSlots.includes(currentTime)) {
                try {
                    const existing = await this.prisma.record.findFirst({
                        where: {
                            planId: plan.id,
                            time: currentTime,
                            date: {
                                gte: new Date(now.toISOString().split('T')[0] + 'T00:00:00.000Z'),
                                lt: new Date(now.toISOString().split('T')[0] + 'T23:59:59.999Z'),
                            },
                        },
                    });
                    if (!existing) {
                        await this.prisma.record.create({
                            data: {
                                id: BigInt(Date.now()),
                                familyId: plan.familyId,
                                planId: plan.id,
                                medicineName: plan.medicineName,
                                memberName: plan.memberName,
                                time: currentTime,
                                date: new Date(),
                                status: 'pending',
                            },
                        });
                        this.logger.log(`自动创建用药记录: ${plan.medicineName} (${currentTime})`);
                    }
                }
                catch {
                    this.logger.warn(`无法为计划 ${plan.id} 创建用药记录`);
                }
            }
        }
        try {
            await this.notificationsService.checkAndSendMedicationNotifications();
        }
        catch (error) {
            this.logger.error('用药提醒通知发送失败:', error.message);
        }
    }
};
exports.ReminderService = ReminderService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_8AM, { timeZone: 'Asia/Shanghai' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReminderService.prototype, "checkExpiryNotifications", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE, { timeZone: 'Asia/Shanghai' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReminderService.prototype, "checkMedicationNotifications", null);
exports.ReminderService = ReminderService = ReminderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], ReminderService);
//# sourceMappingURL=reminder.service.js.map