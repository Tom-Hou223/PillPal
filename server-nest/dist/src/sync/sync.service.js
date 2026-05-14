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
exports.SyncService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SyncService = class SyncService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStatistics(familyId) {
        const [medicineCount, planCount, recordCount, memberCount] = await Promise.all([
            this.prisma.medicine.count({ where: { familyId } }),
            this.prisma.plan.count({ where: { familyId } }),
            this.prisma.record.count({
                where: { plan: { familyId } },
            }),
            this.prisma.familyMember.count({ where: { familyId } }),
        ]);
        const expiringCount = await this.prisma.medicine.count({
            where: {
                familyId,
                expiryDate: {
                    lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    gt: new Date(),
                },
            },
        });
        const expiredCount = await this.prisma.medicine.count({
            where: {
                familyId,
                expiryDate: {
                    lte: new Date(),
                },
            },
        });
        return {
            medicineCount,
            planCount,
            recordCount,
            memberCount,
            expiringCount,
            expiredCount,
        };
    }
    async getFullSnapshot(familyId) {
        const [medicines, plans, records, members] = await Promise.all([
            this.prisma.medicine.findMany({ where: { familyId } }),
            this.prisma.plan.findMany({ where: { familyId } }),
            this.prisma.record.findMany({
                where: { plan: { familyId } },
                include: { plan: true },
                orderBy: { date: 'desc' },
                take: 200,
            }),
            this.prisma.familyMember.findMany({ where: { familyId } }),
        ]);
        return { medicines, plans, records, members };
    }
};
exports.SyncService = SyncService;
exports.SyncService = SyncService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SyncService);
//# sourceMappingURL=sync.service.js.map