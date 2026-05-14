import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansController {
    private readonly plansService;
    constructor(plansService: PlansService);
    getList(req: any): Promise<{
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
    createPlan(dto: CreatePlanDto, req: any): Promise<{
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
    updatePlan(id: string, dto: UpdatePlanDto, req: any): Promise<{
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
    deletePlan(id: string, req: any): Promise<null>;
}
