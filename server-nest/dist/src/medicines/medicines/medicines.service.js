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
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
function computeMedicineStatus(expiryDate) {
    if (!expiryDate)
        return { status: 'normal', daysToExpiry: null };
    const days = Math.ceil((expiryDate.getTime() - Date.now()) / (1000 * 3600 * 24));
    if (days <= 0)
        return { status: 'expired', daysToExpiry: days };
    if (days <= 30)
        return { status: 'expiring', daysToExpiry: days };
    return { status: 'normal', daysToExpiry: days };
}
let MedicinesService = class MedicinesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getList(familyId) {
        const list = await this.prisma.medicine.findMany({
            where: { familyId },
            orderBy: { createdAt: 'desc' },
        });
        return list.map((item) => {
            const computed = computeMedicineStatus(item.expiryDate);
            return {
                ...item,
                days_to_expiry: computed.daysToExpiry,
                status: computed.status,
            };
        });
    }
    async addMedicine(dto, familyId) {
        if (!familyId)
            throw new common_1.BadRequestException('缺少家庭ID，请先选择或创建家庭');
        const medicine = await this.prisma.medicine.create({
            data: {
                id: BigInt(Date.now()),
                familyId,
                name: dto.name,
                manufacturer: dto.manufacturer,
                specification: dto.specification,
                category: dto.category,
                stock: dto.stock ?? 0,
                unit: dto.unit,
                expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null,
                dosage: dto.dosage,
            },
        });
        const computed = computeMedicineStatus(medicine.expiryDate);
        return {
            ...medicine,
            days_to_expiry: computed.daysToExpiry,
            status: computed.status,
        };
    }
    async updateMedicine(id, dto, familyId) {
        await this.prisma.medicine.updateMany({
            where: { id, familyId },
            data: {
                ...(dto.name !== undefined && { name: dto.name }),
                ...(dto.manufacturer !== undefined && { manufacturer: dto.manufacturer }),
                ...(dto.specification !== undefined && { specification: dto.specification }),
                ...(dto.category !== undefined && { category: dto.category }),
                ...(dto.stock !== undefined && { stock: dto.stock }),
                ...(dto.unit !== undefined && { unit: dto.unit }),
                ...(dto.dosage !== undefined && { dosage: dto.dosage }),
                ...(dto.expiryDate !== undefined && { expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null }),
            },
        });
        const updated = await this.prisma.medicine.findFirst({
            where: { id, familyId },
        });
        if (!updated) {
            return null;
        }
        const computed = computeMedicineStatus(updated.expiryDate);
        return {
            ...updated,
            days_to_expiry: computed.daysToExpiry,
            status: computed.status,
        };
    }
    async deleteMedicine(id, familyId) {
        const result = await this.prisma.medicine.deleteMany({
            where: { id, familyId },
        });
        return result;
    }
};
exports.MedicinesService = MedicinesService;
exports.MedicinesService = MedicinesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MedicinesService);
//# sourceMappingURL=medicines.service.js.map