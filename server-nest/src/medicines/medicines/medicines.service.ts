import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

function computeMedicineStatus(expiryDate: Date | null): { status: string; daysToExpiry: number | null } {
  if (!expiryDate) return { status: 'normal', daysToExpiry: null };
  const days = Math.ceil((expiryDate.getTime() - Date.now()) / (1000 * 3600 * 24));
  if (days <= 0) return { status: 'expired', daysToExpiry: days };
  if (days <= 30) return { status: 'expiring', daysToExpiry: days };
  return { status: 'normal', daysToExpiry: days };
}

@Injectable()
export class MedicinesService {
  constructor(private prisma: PrismaService) {}

  async getList(familyId: bigint) {
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

  async addMedicine(dto: CreateMedicineDto, familyId: bigint) {
    if (!familyId) throw new BadRequestException('缺少家庭ID，请先选择或创建家庭');
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

  async updateMedicine(id: bigint, dto: UpdateMedicineDto, familyId: bigint) {
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

  async deleteMedicine(id: bigint, familyId: bigint) {
    const result = await this.prisma.medicine.deleteMany({
      where: { id, familyId },
    });
    return result;
  }
}
