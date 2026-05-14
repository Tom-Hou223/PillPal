import { PrismaService } from '../../prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesService {
    private prisma;
    constructor(prisma: PrismaService);
    getList(familyId: bigint): Promise<{
        days_to_expiry: number | null;
        status: string;
        id: bigint;
        createdAt: Date | null;
        name: string;
        familyId: bigint | null;
        manufacturer: string | null;
        specification: string | null;
        category: string | null;
        stock: number | null;
        unit: string | null;
        expiryDate: Date | null;
        dosage: string | null;
    }[]>;
    addMedicine(dto: CreateMedicineDto, familyId: bigint): Promise<{
        days_to_expiry: number | null;
        status: string;
        id: bigint;
        createdAt: Date | null;
        name: string;
        familyId: bigint | null;
        manufacturer: string | null;
        specification: string | null;
        category: string | null;
        stock: number | null;
        unit: string | null;
        expiryDate: Date | null;
        dosage: string | null;
    }>;
    updateMedicine(id: bigint, dto: UpdateMedicineDto, familyId: bigint): Promise<{
        days_to_expiry: number | null;
        status: string;
        id: bigint;
        createdAt: Date | null;
        name: string;
        familyId: bigint | null;
        manufacturer: string | null;
        specification: string | null;
        category: string | null;
        stock: number | null;
        unit: string | null;
        expiryDate: Date | null;
        dosage: string | null;
    } | null>;
    deleteMedicine(id: bigint, familyId: bigint): Promise<import("@prisma/client").Prisma.BatchPayload>;
}
