import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from './config/configuration';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';
import { AuthModule } from './auth/auth.module';
import { FamiliesModule } from './families/families.module';
import { FamilyMembersModule } from './family-members/family-members.module';
import { MedicinesModule } from './medicines/medicines/medicines.module';
import { PlansModule } from './plans/plans.module';
import { RecordsModule } from './records/records.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RecognitionModule } from './recognition/recognition.module';
import { SyncModule } from './sync/sync.module';
import { ReminderModule } from './reminder/reminder.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    FamiliesModule,
    FamilyMembersModule,
    MedicinesModule,
    PlansModule,
    RecordsModule,
    NotificationsModule,
    RecognitionModule,
    SyncModule,
    ReminderModule,
  ],
  providers: [PrismaService, RedisService],
  exports: [PrismaService, RedisService],
})
export class AppModule {}
