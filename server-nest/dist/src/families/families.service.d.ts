import { PrismaService } from '../prisma/prisma.service';
export declare class FamiliesService {
    private prisma;
    constructor(prisma: PrismaService);
    private genInviteCode;
    createFamily(name: string, userId: bigint): Promise<{
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
    getFamilyDetail(familyId: bigint, familyRole: string): Promise<any>;
    updateFamily(familyId: bigint, name: string): Promise<{
        id: string;
        creatorId: string;
        createdAt: Date | null;
        name: string;
        inviteCode: string | null;
        inviteCodeExpiresAt: Date | null;
    }>;
    deleteFamily(familyId: bigint, userId: bigint): Promise<{
        id: string;
    }>;
    generateInviteCode(familyId: bigint): Promise<{
        inviteCode: string | null;
        inviteCodeExpiresAt: Date | null;
    }>;
    joinByInviteCode(inviteCode: string, userId: bigint): Promise<{
        familyId: string;
        familyName: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
    }>;
    getMembers(familyId: bigint): Promise<{
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
    updateMemberRole(familyId: bigint, targetUserId: bigint, role: string): Promise<{
        id: string;
        familyId: string;
        userId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
    }>;
    removeMember(familyId: bigint, targetUserId: bigint): Promise<{
        userId: string;
    }>;
    leaveFamily(familyId: bigint, userId: bigint): Promise<{
        message: string;
    }>;
    addMemberByPhone(familyId: bigint, phone: string, relationship: string): Promise<{
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
    updateMemberRelationship(familyId: bigint, targetUserId: bigint, relationship: string): Promise<{
        id: string;
        familyId: string;
        userId: string;
        role: import("@prisma/client").$Enums.FamilyRole | null;
        relationship: string | null;
    }>;
}
