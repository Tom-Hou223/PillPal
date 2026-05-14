import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
export declare class RecognitionService {
    private prisma;
    private configService;
    private readonly logger;
    private baiduAccessToken;
    private baiduTokenExpireTime;
    constructor(prisma: PrismaService, configService: ConfigService);
    private get BarcodeApiUrl();
    private get BaiduOcrUrl();
    private get BaiduTokenUrl();
    recognizeBarcode(barcode: string): Promise<{
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
    private getMockBarcodeData;
    private parseCategoryFromRemark;
    private parseDosageFromRemark;
    recognizeImage(imageBuffer: Buffer): Promise<{
        success: boolean;
        data: any;
    }>;
    private getMockImageData;
    getBaiduAccessToken(): Promise<string>;
    parseOCRResult(ocrData: any): any;
    private formatOcrDate;
    saveHistory(userId: number, familyId: bigint, type: 'barcode' | 'image', inputData: string, recognitionResult: any): Promise<void>;
    getHistory(userId: number, familyId: bigint, page?: number, limit?: number): Promise<{
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
