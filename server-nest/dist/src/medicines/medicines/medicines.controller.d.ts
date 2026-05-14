import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    getList(req: any): Promise<{
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
    addMedicine(dto: CreateMedicineDto, req: any): Promise<{
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
    updateMedicine(id: string, dto: UpdateMedicineDto, req: any): Promise<{
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
    deleteMedicine(id: string, req: any): Promise<null>;
}
