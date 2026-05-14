import type { Request } from 'express';
import { FamilyMembersService } from './family-members.service';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';
export declare class FamilyMembersController {
    private readonly familyMembersService;
    constructor(familyMembersService: FamilyMembersService);
    getList(req: Request): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }[]>;
    addMember(dto: AddFamilyMemberDto, req: Request): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }>;
    updateMember(id: string, dto: UpdateFamilyMemberDto, req: Request): Promise<{
        id: string;
        familyId: string | undefined;
        createdAt: Date | null;
        name: string;
        relationship: string | null;
        age: number | null;
    }>;
    deleteMember(id: string, req: Request): Promise<{
        id: string;
    }>;
}
