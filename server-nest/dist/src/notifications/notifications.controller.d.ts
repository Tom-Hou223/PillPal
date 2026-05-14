import { NotificationsService } from './notifications.service';
import { SubscribeDto } from './dto/subscribe.dto';
import { SettingsDto } from './dto/settings.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    subscribe(userId: number, dto: SubscribeDto): Promise<{
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
}
