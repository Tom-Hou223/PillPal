import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class ReminderService {
  private readonly logger = new Logger(ReminderService.name);

  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_8AM, { timeZone: 'Asia/Shanghai' })
  async checkExpiryNotifications() {
    this.logger.log('执行定时任务：药品过期检查');
    try {
      await this.notificationsService.checkAndSendExpiryNotifications();
    } catch (error: any) {
      this.logger.error('药品过期检查失败:', error.message);
    }
  }

  @Cron(CronExpression.EVERY_MINUTE, { timeZone: 'Asia/Shanghai' })
  async checkMedicationNotifications() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Auto-create pending records for plans matching current time
    const plans = await this.prisma.plan.findMany({
      where: { status: 'active' },
    });

    for (const plan of plans) {
      const timeSlots = plan.timeSlots as string[] | null;
      if (timeSlots && timeSlots.includes(currentTime)) {
        try {
          // Check if record already exists for this plan+date+time
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
        } catch {
          this.logger.warn(`无法为计划 ${plan.id} 创建用药记录`);
        }
      }
    }

    // Send WeChat medication reminders
    try {
      await this.notificationsService.checkAndSendMedicationNotifications();
    } catch (error: any) {
      this.logger.error('用药提醒通知发送失败:', error.message);
    }
  }
}
