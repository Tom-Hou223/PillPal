import { PrismaService } from '../prisma/prisma.service';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';
export declare class FamilyMembersService {
    private prisma;
    constructor(prisma: PrismaService);
    getList(familyId: bigint): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }[]>;
    addMember(dto: AddFamilyMemberDto, familyId: bigint): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }>;
    updateMember(id: bigint, dto: UpdateFamilyMemberDto, familyId: bigint): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }>;
    deleteMember(id: bigint, familyId: bigint): Promise<{
        id: string;
    }>;
}
