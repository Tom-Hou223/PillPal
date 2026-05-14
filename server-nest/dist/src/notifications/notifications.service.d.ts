import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { SettingsDto } from './dto/settings.dto';
export declare class NotificationsService {
    private prisma;
    private configService;
    private readonly logger;
    private wechatAccessToken;
    private wechatTokenExpireTime;
    constructor(prisma: PrismaService, configService: ConfigService);
    subscribe(userId: number, templateType: string): Promise<{
        message: string;
    }>;
    unsubscribe(userId: number, templateType: string): Promise<{
        message: string;
    }>;
    getSubscriptions(userId: number): Promise<{
        subscriptions: {
            templateType: string;
            isActive: boolean | null;
            subscribedAt: Date | null;
        }[];
        templates: Record<string, string>;
    }>;
    saveSettings(userId: number, dto: SettingsDto): Promise<{
        message: string;
    }>;
    getSettings(userId: number): Promise<{
        reminderTime: number | null;
        expiryWarningDays: number | null;
    }>;
    getWechatAccessToken(): Promise<string>;
    sendSubscribeMessage(openid: string, templateId: string, data: Record<string, {
        value: string;
    }>, page?: string): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
    private formatDate;
    checkAndSendExpiryNotifications(): Promise<void>;
    checkAndSendMedicationNotifications(): Promise<void>;
}
