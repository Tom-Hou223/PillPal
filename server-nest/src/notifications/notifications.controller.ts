import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { NotificationsService } from './notifications.service';
import { SubscribeDto } from './dto/subscribe.dto';
import { SettingsDto } from './dto/settings.dto';

@Controller('api/notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('subscribe')
  subscribe(
    @CurrentUser('id') userId: number,
    @Body() dto: SubscribeDto,
  ) {
    return this.notificationsService.subscribe(userId, dto.templateType);
  }

  @Delete('unsubscribe/:templateType')
  unsubscribe(
    @CurrentUser('id') userId: number,
    @Param('templateType') templateType: string,
  ) {
    return this.notificationsService.unsubscribe(userId, templateType);
  }

  @Get('subscriptions')
  getSubscriptions(@CurrentUser('id') userId: number) {
    return this.notificationsService.getSubscriptions(userId);
  }

  @Post('settings')
  saveSettings(
    @CurrentUser('id') userId: number,
    @Body() dto: SettingsDto,
  ) {
    return this.notificationsService.saveSettings(userId, dto);
  }

  @Get('settings')
  getSettings(@CurrentUser('id') userId: number) {
    return this.notificationsService.getSettings(userId);
  }
}
