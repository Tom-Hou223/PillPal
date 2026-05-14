import { PrismaService } from '../prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';
export declare class RecordsService {
    private prisma;
    constructor(prisma: PrismaService);
    getRecords(familyId: bigint, date?: string): Promise<{
        id: bigint;
        createdAt: Date | null;
        familyId: bigint | null;
        medicineName: string;
        memberName: string;
        status: string | null;
        planId: bigint | null;
        time: string | null;
        date: Date | null;
    }[]>;
    completeRecord(id: bigint, familyId: bigint): Promise<{
        id: bigint;
        status: string;
    }>;
    missRecord(id: bigint, familyId: bigint): Promise<{
        id: bigint;
        status: string;
    }>;
    addRecord(dto: CreateRecordDto, familyId: bigint): Promise<{
        id: bigint;
        createdAt: Date | null;
        familyId: bigint | null;
        medicineName: string;
        memberName: string;
        status: string | null;
        planId: bigint | null;
        time: string | null;
        date: Date | null;
    }>;
}
