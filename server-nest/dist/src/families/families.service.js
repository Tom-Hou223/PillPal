"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FamiliesService = class FamiliesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    genInviteCode(length = 8) {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }
    async createFamily(name, userId) {
        const now = Date.now();
        const inviteCode = this.genInviteCode();
        const expiresAt = new Date(now + 7 * 24 * 60 * 60 * 1000);
        return this.prisma.$transaction(async (tx) => {
            const family = await tx.family.create({
                data: {
                    id: BigInt(now),
                    name,
                    creatorId: userId,
                    inviteCode,
                    inviteCodeExpiresAt: expiresAt,
                },
            });
            const role = await tx.familyUserRole.create({
                data: {
                    id: BigInt(now + 1),
                    familyId: family.id,
                    userId,
                    role: 'admin',
                    relationship: 'self',
                },
            });
            return {
                ...family,
                inviteCode,
                inviteCodeExpiresAt: expiresAt,
                id: family.id.toString(),
                creatorId: family.creatorId.toString(),
                role: role.role,
            };
        });
    }
    async getMyFamilies(userId) {
        const roles = await this.prisma.familyUserRole.findMany({
            where: { userId },
            include: {
                family: {
                    include: {
                        _count: {
                            select: { familyUserRoles: true },
                        },
                    },
                },
            },
            orderBy: { joinedAt: 'desc' },
        });
        return roles.map((r) => ({
            id: r.family.id.toString(),
            name: r.family.name,
            creatorId: r.family.creatorId.toString(),
            inviteCode: r.family.inviteCode,
            inviteCodeExpiresAt: r.family.inviteCodeExpiresAt,
            createdAt: r.family.createdAt,
            role: r.role,
            memberCount: r.family._count.familyUserRoles,
        }));
    }
    async getRelationshipRules() {
        return this.prisma.familyRelationshipRule.findMany();
    }
    async getFamilyDetail(familyId, familyRole) {
        const family = await this.prisma.family.findUnique({
            where: { id: familyId },
            include: {
                creator: {
                    select: {
                        id: true,
                        nickname: true,
                        avatarUrl: true,
                        phone: true,
                    },
                },
            },
        });
        if (!family) {
            throw new common_1.NotFoundException('家庭不存在');
        }
        const memberCount = await this.prisma.familyUserRole.count({
            where: { familyId },
        });
        const detail = {
            id: family.id.toString(),
            name: family.name,
            creatorId: family.creatorId.toString(),
            creator: family.creator,
            memberCount,
            createdAt: family.createdAt,
            myRole: familyRole,
        };
        if (familyRole === 'admin') {
            detail.inviteCode = family.inviteCode;
            detail.inviteCodeExpiresAt = family.inviteCodeExpiresAt;
        }
        return detail;
    }
    async updateFamily(familyId, name) {
        const family = await this.prisma.family.update({
            where: { id: familyId },
            data: { name },
        });
        return {
            ...family,
            id: family.id.toString(),
            creatorId: family.creatorId.toString(),
        };
    }
    async deleteFamily(familyId, userId) {
        const family = await this.prisma.family.findUnique({
            where: { id: familyId },
        });
        if (!family) {
            throw new common_1.NotFoundException('家庭不存在');
        }
        if (family.creatorId !== userId) {
            throw new common_1.ForbiddenException('只有创建者才能删除家庭');
        }
        await this.prisma.$transaction(async (tx) => {
            const plans = await tx.plan.findMany({
                where: { familyId },
                select: { id: true },
            });
            const planIds = plans.map((p) => p.id);
            if (planIds.length > 0) {
                await tx.record.deleteMany({
                    where: { planId: { in: planIds } },
                });
                await tx.record.deleteMany({
                    where: { familyId },
                });
            }
            await tx.plan.deleteMany({
                where: { familyId },
            });
            await tx.medicine.deleteMany({
                where: { familyId },
            });
            await tx.recognitionHistory.deleteMany({
                where: { familyId },
            });
            await tx.familyMember.deleteMany({
                where: { familyId },
            });
            await tx.familyUserRole.deleteMany({
                where: { familyId },
            });
            await tx.family.delete({
                where: { id: familyId },
            });
        });
        return { id: familyId.toString() };
    }
    async generateInviteCode(familyId) {
        const inviteCode = this.genInviteCode();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const family = await this.prisma.family.update({
            where: { id: familyId },
            data: {
                inviteCode,
                inviteCodeExpiresAt: expiresAt,
            },
        });
        return {
            inviteCode: family.inviteCode,
            inviteCodeExpiresAt: family.inviteCodeExpiresAt,
        };
    }
    async joinByInviteCode(inviteCode, userId) {
        const code = inviteCode.toUpperCase();
        const family = await this.prisma.family.findUnique({
            where: { inviteCode: code },
        });
        if (!family) {
            throw new common_1.BadRequestException('无效的邀请码');
        }
        if (family.inviteCodeExpiresAt && new Date() > family.inviteCodeExpiresAt) {
            throw new common_1.BadRequestException('邀请码已过期');
        }
        const existingMember = await this.prisma.familyUserRole.findUnique({
            where: { familyId_userId: { familyId: family.id, userId } },
        });
        if (existingMember) {
            throw new common_1.BadRequestException('您已经是该家庭成员');
        }
        const role = await this.prisma.familyUserRole.create({
            data: {
                id: BigInt(Date.now()),
                familyId: family.id,
                userId,
                role: 'member',
                relationship: 'other',
            },
        });
        return {
            familyId: family.id.toString(),
            familyName: family.name,
            role: role.role,
        };
    }
    async getMembers(familyId) {
        const members = await this.prisma.familyUserRole.findMany({
            where: { familyId },
            include: {
                user: {
                    select: {
                        id: true,
                        nickname: true,
                        avatarUrl: true,
                        phone: true,
                    },
                },
            },
            orderBy: [{ role: 'desc' }, { joinedAt: 'asc' }],
        });
        return members.map((m) => ({
            id: m.id.toString(),
            userId: m.userId.toString(),
            familyId: m.familyId.toString(),
            role: m.role,
            relationship: m.relationship,
            joinedAt: m.joinedAt,
            user: m.user,
        }));
    }
    async updateMemberRole(familyId, targetUserId, role) {
        if (role !== 'admin' && role !== 'member') {
            throw new common_1.BadRequestException('角色必须是 admin 或 member');
        }
        const family = await this.prisma.family.findUnique({
            where: { id: familyId },
        });
        if (!family) {
            throw new common_1.NotFoundException('家庭不存在');
        }
        if (family.creatorId === targetUserId) {
            throw new common_1.BadRequestException('不能修改创建者的角色');
        }
        const memberRole = await this.prisma.familyUserRole.update({
            where: { familyId_userId: { familyId, userId: targetUserId } },
            data: { role: role },
        });
        return {
            id: memberRole.id.toString(),
            familyId: memberRole.familyId.toString(),
            userId: memberRole.userId.toString(),
            role: memberRole.role,
        };
    }
    async removeMember(familyId, targetUserId) {
        const family = await this.prisma.family.findUnique({
            where: { id: familyId },
        });
        if (!family) {
            throw new common_1.NotFoundException('家庭不存在');
        }
        if (family.creatorId === targetUserId) {
            throw new common_1.BadRequestException('不能移除创建者');
        }
        await this.prisma.familyUserRole.delete({
            where: { familyId_userId: { familyId, userId: targetUserId } },
        });
        return { userId: targetUserId.toString() };
    }
    async leaveFamily(familyId, userId) {
        const family = await this.prisma.family.findUnique({
            where: { id: familyId },
        });
        if (!family) {
            throw new common_1.NotFoundException('家庭不存在');
        }
        if (family.creatorId === userId) {
            throw new common_1.BadRequestException('创建者不能退出家庭');
        }
        await this.prisma.familyUserRole.delete({
            where: { familyId_userId: { familyId, userId } },
        });
        return { message: '已退出家庭' };
    }
    async addMemberByPhone(familyId, phone, relationship) {
        return this.prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { phone },
            });
            if (!user) {
                throw new common_1.NotFoundException('未找到该手机号对应的用户');
            }
            const existingMember = await tx.familyUserRole.findUnique({
                where: { familyId_userId: { familyId, userId: user.id } },
            });
            if (existingMember) {
                throw new common_1.BadRequestException('该用户已是家庭成员');
            }
            const rule = await tx.familyRelationshipRule.findUnique({
                where: { relationship },
            });
            if (rule && rule.maxCount) {
                const currentCount = await tx.familyUserRole.count({
                    where: { familyId, relationship },
                });
                if (currentCount >= rule.maxCount) {
                    throw new common_1.BadRequestException(`该关系类型(${relationship})已达到最大数量限制(${rule.maxCount})`);
                }
            }
            const memberRole = await tx.familyUserRole.create({
                data: {
                    id: BigInt(Date.now()),
                    familyId,
                    userId: user.id,
                    role: 'member',
                    relationship,
                },
            });
            return {
                id: memberRole.id.toString(),
                familyId: memberRole.familyId.toString(),
                userId: memberRole.userId.toString(),
                role: memberRole.role,
                relationship: memberRole.relationship,
                user: {
                    id: user.id.toString(),
                    nickname: user.nickname,
                    phone: user.phone,
                    avatarUrl: user.avatarUrl,
                },
            };
        });
    }
    async updateMemberRelationship(familyId, targetUserId, relationship) {
        return this.prisma.$transaction(async (tx) => {
            const rule = await tx.familyRelationshipRule.findUnique({
                where: { relationship },
            });
            if (rule && rule.maxCount) {
                const currentCount = await tx.familyUserRole.count({
                    where: {
                        familyId,
                        relationship,
                        userId: { not: targetUserId },
                    },
                });
                if (currentCount >= rule.maxCount) {
                    throw new common_1.BadRequestException(`该关系类型(${relationship})已达到最大数量限制(${rule.maxCount})`);
                }
            }
            const memberRole = await tx.familyUserRole.update({
                where: { familyId_userId: { familyId, userId: targetUserId } },
                data: { relationship },
            });
            return {
                id: memberRole.id.toString(),
                familyId: memberRole.familyId.toString(),
                userId: memberRole.userId.toString(),
                role: memberRole.role,
                relationship: memberRole.relationship,
            };
        });
    }
};
exports.FamiliesService = FamiliesService;
exports.FamiliesService = FamiliesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FamiliesService);
//# sourceMappingURL=families.service.js.map