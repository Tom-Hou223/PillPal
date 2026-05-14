import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansService {
    private prisma;
    constructor(prisma: PrismaService);
    getList(familyId: bigint): Promise<{
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
    }[]>;
    createPlan(dto: CreatePlanDto, familyId: bigint): Promise<{
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
    }>;
    updatePlan(id: bigint, dto: UpdatePlanDto, familyId: bigint): Promise<{
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
    } | null>;
    deletePlan(id: bigint, familyId: bigint): Promise<import("@prisma/client").Prisma.BatchPayload>;
}
