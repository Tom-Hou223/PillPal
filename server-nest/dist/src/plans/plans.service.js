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
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlansService = class PlansService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getList(familyId) {
        const list = await this.prisma.plan.findMany({
            where: { familyId },
            orderBy: { createdAt: 'desc' },
        });
        return list;
    }
    async createPlan(dto, familyId) {
        const plan = await this.prisma.plan.create({
            data: {
                id: BigInt(Date.now()),
                familyId,
                medicineName: dto.medicineName,
                memberName: dto.memberName,
                frequency: dto.frequency,
                timeSlots: dto.timeSlots ?? [],
                status: 'active',
                startDate: dto.startDate ? new Date(dto.startDate) : null,
                endDate: dto.endDate ? new Date(dto.endDate) : null,
            },
        });
        return plan;
    }
    async updatePlan(id, dto, familyId) {
        await this.prisma.plan.updateMany({
            where: { id, familyId },
            data: {
                ...(dto.medicineName !== undefined && { medicineName: dto.medicineName }),
                ...(dto.memberName !== undefined && { memberName: dto.memberName }),
                ...(dto.frequency !== undefined && { frequency: dto.frequency }),
                ...(dto.timeSlots !== undefined && { timeSlots: dto.timeSlots }),
                ...(dto.startDate !== undefined && { startDate: dto.startDate ? new Date(dto.startDate) : null }),
                ...(dto.endDate !== undefined && { endDate: dto.endDate ? new Date(dto.endDate) : null }),
                ...(dto.status !== undefined && { status: dto.status }),
            },
        });
        const updated = await this.prisma.plan.findFirst({
            where: { id, familyId },
        });
        return updated;
    }
    async deletePlan(id, familyId) {
        const result = await this.prisma.plan.deleteMany({
            where: { id, familyId },
        });
        return result;
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlansService);
//# sourceMappingURL=plans.service.js.map