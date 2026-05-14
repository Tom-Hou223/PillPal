import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';

@Injectable()
export class FamilyMembersService {
  constructor(private prisma: PrismaService) {}

  async getList(familyId: bigint) {
    const members = await this.prisma.familyMember.findMany({
      where: { familyId },
      orderBy: { createdAt: 'desc' },
    });

    return members.map((m) => ({
      ...m,
      id: m.id.toString(),
      familyId: m.familyId?.toString(),
    }));
  }

  async addMember(dto: AddFamilyMemberDto, familyId: bigint) {
    const member = await this.prisma.familyMember.create({
      data: {
        id: BigInt(Date.now()),
        familyId,
        name: dto.name,
        relationship: dto.relationship,
        age: dto.age,
      },
    });

    return {
      ...member,
      id: member.id.toString(),
      familyId: member.familyId?.toString(),
    };
  }

  async updateMember(id: bigint, dto: UpdateFamilyMemberDto, familyId: bigint) {
    const member = await this.prisma.familyMember.update({
      where: { id },
      data: {
        name: dto.name,
        relationship: dto.relationship,
        age: dto.age,
      },
    });

    return {
      ...member,
      id: member.id.toString(),
      familyId: member.familyId?.toString(),
    };
  }

  async deleteMember(id: bigint, familyId: bigint) {
    await this.prisma.familyMember.delete({
      where: { id },
    });

    return { id: id.toString() };
  }
}
