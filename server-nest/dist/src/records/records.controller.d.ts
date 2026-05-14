import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    getRecords(req: any, date?: string): Promise<{
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
    completeRecord(id: string, req: any): Promise<{
        id: bigint;
        status: string;
    }>;
    missRecord(id: string, req: any): Promise<{
        id: bigint;
        status: string;
    }>;
    addRecord(dto: CreateRecordDto, req: any): Promise<{
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
