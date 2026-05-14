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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RecordsService = class RecordsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRecords(familyId, date) {
        const where = {
            plan: { familyId },
        };
        if (date) {
            where.date = new Date(date);
        }
        const list = await this.prisma.record.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
        return list;
    }
    async completeRecord(id, familyId) {
        const record = await this.prisma.record.findFirst({
            where: { id },
            include: { plan: true },
        });
        if (!record) {
            throw new common_1.NotFoundException('记录不存在');
        }
        if (!record.plan || record.plan.familyId !== familyId) {
            throw new common_1.ForbiddenException('无权操作该记录');
        }
        await this.prisma.record.update({
            where: { id },
            data: { status: 'completed' },
        });
        return { id, status: 'completed' };
    }
    async missRecord(id, familyId) {
        const record = await this.prisma.record.findFirst({
            where: { id },
            include: { plan: true },
        });
        if (!record) {
            throw new common_1.NotFoundException('记录不存在');
        }
        if (!record.plan || record.plan.familyId !== familyId) {
            throw new common_1.ForbiddenException('无权操作该记录');
        }
        await this.prisma.record.update({
            where: { id },
            data: { status: 'missed' },
        });
        return { id, status: 'missed' };
    }
    async addRecord(dto, familyId) {
        const plan = await this.prisma.plan.findFirst({
            where: { id: BigInt(dto.planId) },
        });
        if (!plan) {
            throw new common_1.NotFoundException('用药计划不存在');
        }
        if (plan.familyId !== familyId) {
            throw new common_1.ForbiddenException('无权操作该计划');
        }
        const record = await this.prisma.record.create({
            data: {
                id: BigInt(Date.now()),
                familyId,
                planId: BigInt(dto.planId),
                medicineName: dto.medicineName,
                memberName: dto.memberName,
                time: dto.time,
                date: dto.date ? new Date(dto.date) : new Date(),
                status: 'pending',
            },
        });
        return record;
    }
};
exports.RecordsService = RecordsService;
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecordsService);
//# sourceMappingURL=records.service.js.map