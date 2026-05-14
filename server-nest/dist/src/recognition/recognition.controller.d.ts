import { RecognitionService } from './recognition.service';
import { BarcodeRecognizeDto } from './dto/barcode-recognize.dto';
import { HistoryQueryDto } from './dto/history-query.dto';
export declare class RecognitionController {
    private readonly recognitionService;
    private readonly logger;
    constructor(recognitionService: RecognitionService);
    recognizeBarcode(dto: BarcodeRecognizeDto, userId: number, req: any): Promise<{
        success: boolean;
        data: {
            barcode: string;
            name: string;
            manufacturer: string;
            specification: string;
            category: string;
            dosage: string;
            expiryDate: string;
            daysToExpiry: number;
        };
    } | {
        success: boolean;
        data: {
            name: any;
            manufacturer: any;
            specification: any;
            category: string;
            dosage: string;
            daysToExpiry: number;
        };
    }>;
    recognizeImage(file: Express.Multer.File, userId: number, req: any): Promise<{
        success: boolean;
        data: any;
    }>;
    getHistory(query: HistoryQueryDto, userId: number, req: any): Promise<{
        items: {
            id: bigint;
            createdAt: Date | null;
            userId: bigint;
            type: import("@prisma/client").$Enums.RecognitionType;
            familyId: bigint;
            inputData: string | null;
            recognitionResult: import("@prisma/client/runtime/client").JsonValue | null;
            isAdded: boolean | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
