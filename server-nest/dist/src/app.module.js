"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const configuration_1 = __importDefault(require("./config/configuration"));
const prisma_service_1 = require("./prisma/prisma.service");
const redis_service_1 = require("./redis/redis.service");
const auth_module_1 = require("./auth/auth.module");
const families_module_1 = require("./families/families.module");
const family_members_module_1 = require("./family-members/family-members.module");
const medicines_module_1 = require("./medicines/medicines/medicines.module");
const plans_module_1 = require("./plans/plans.module");
const records_module_1 = require("./records/records.module");
const notifications_module_1 = require("./notifications/notifications.module");
const recognition_module_1 = require("./recognition/recognition.module");
const sync_module_1 = require("./sync/sync.module");
const reminder_module_1 = require("./reminder/reminder.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            families_module_1.FamiliesModule,
            family_members_module_1.FamilyMembersModule,
            medicines_module_1.MedicinesModule,
            plans_module_1.PlansModule,
            records_module_1.RecordsModule,
            notifications_module_1.NotificationsModule,
            recognition_module_1.RecognitionModule,
            sync_module_1.SyncModule,
            reminder_module_1.ReminderModule,
        ],
        providers: [prisma_service_1.PrismaService, redis_service_1.RedisService],
        exports: [prisma_service_1.PrismaService, redis_service_1.RedisService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map