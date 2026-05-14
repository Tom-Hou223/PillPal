import { PrismaService } from '../prisma/prisma.service';
export declare class SyncService {
    private prisma;
    constructor(prisma: PrismaService);
    getStatistics(familyId: bigint): Promise<{
        medicineCount: number;
        planCount: number;
        recordCount: number;
        memberCount: number;
        expiringCount: number;
        expiredCount: number;
    }>;
    getFullSnapshot(familyId: bigint): Promise<{
        medicines: {
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
        }[];
        plans: {
            id: bigint;
            createdAt: Date | null;
            familyId: bigint | null;
            medicineName: string;
            memberName: string;
            frequency: string | null;
            timeSlots: import("@prisma/client/runtime/client").JsonValue | null;
            status: string | null;
            startDate: Date | null;
            endDate: Date | null;
        }[];
        records: ({
            plan: {
                id: bigint;
                createdAt: Date | null;
                familyId: bigint | null;
                medicineName: string;
                memberName: string;
                frequency: string | null;
                timeSlots: import("@prisma/client/runtime/client").JsonValue | null;
                status: string | null;
                startDate: Date | null;
                endDate: Date | null;
            } | null;
        } & {
            id: bigint;
            createdAt: Date | null;
            familyId: bigint | null;
            medicineName: string;
            memberName: string;
            status: string | null;
            planId: bigint | null;
            time: string | null;
            date: Date | null;
        })[];
        members: {
            id: bigint;
            createdAt: Date | null;
            name: string;
            familyId: bigint | null;
            relationship: string | null;
            age: number | null;
        }[];
    }>;
}
