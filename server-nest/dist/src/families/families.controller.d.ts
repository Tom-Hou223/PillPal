import type { Request } from 'express';
import { FamiliesService } from './families.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { JoinFamilyDto } from './dto/join-family.dto';
import { AddMemberByPhoneDto } from './dto/add-member-by-phone.dto';
export declare class FamiliesController {
    private readonly familiesService;
    constructor(familiesService: FamiliesService);
    createFamily(dto: CreateFamilyDto, userId: bigint): Promise<{
        inviteCode: string;
        inviteCodeExpiresAt: Date;
        id: string;
        creatorId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        createdAt: Date | null;
        name: string;
    }>;
    getMyFamilies(userId: bigint): Promise<{
        id: string;
        name: string;
        creatorId: string;
        inviteCode: string | null;
        inviteCodeExpiresAt: Date | null;
        createdAt: Date | null;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        memberCount: number;
    }[]>;
    getRelationshipRules(): Promise<{
        id: number;
        relationship: string;
        maxCount: number | null;
        description: string | null;
    }[]>;
    getFamilyDetail(familyId: string, req: Request): Promise<any>;
    updateFamily(familyId: string, dto: UpdateFamilyDto): Promise<{
        id: string;
        creatorId: string;
        createdAt: Date | null;
        name: string;
        inviteCode: string | null;
        inviteCodeExpiresAt: Date | null;
    }>;
    deleteFamily(familyId: string, userId: bigint): Promise<{
        id: string;
    }>;
    generateInviteCode(familyId: string): Promise<{
        inviteCode: string | null;
        inviteCodeExpiresAt: Date | null;
    }>;
    joinByInviteCode(dto: JoinFamilyDto, userId: bigint): Promise<{
        familyId: string;
        familyName: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
    }>;
    getMembers(familyId: string): Promise<{
        id: string;
        userId: string;
        familyId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        relationship: string | null;
        joinedAt: Date | null;
        user: {
            id: bigint;
            phone: string | null;
            nickname: string | null;
            avatarUrl: string | null;
        };
    }[]>;
    updateMemberRole(familyId: string, userId: string, role: string): Promise<{
        id: string;
        familyId: string;
        userId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
    }>;
    removeMember(familyId: string, userId: string): Promise<{
        userId: string;
    }>;
    leaveFamily(familyId: string, userId: bigint): Promise<{
        message: string;
    }>;
    addMemberByPhone(familyId: string, dto: AddMemberByPhoneDto): Promise<{
        id: string;
        familyId: string;
        userId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        relationship: string | null;
        user: {
            id: string;
            nickname: string | null;
            phone: string | null;
            avatarUrl: string | null;
        };
    }>;
    updateMemberRelationship(familyId: string, userId: string, relationship: string): Promise<{
        id: string;
        familyId: string;
        userId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        relationship: string | null;
    }>;
}
