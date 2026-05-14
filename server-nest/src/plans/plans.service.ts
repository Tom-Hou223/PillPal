import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async getList(familyId: bigint) {
    const list = await this.prisma.plan.findMany({
      where: { familyId },
      orderBy: { createdAt: 'desc' },
    });
    return list;
  }

  async createPlan(dto: CreatePlanDto, familyId: bigint) {
    const plan = await this.prisma.plan.create({
      data: {
        id: BigInt(Date.now()),
        familyId,
        medicineName: dto.medicineName,
        memberName: dto.memberName,
        frequency: dto.frequency,
        timeSlots: dto.timeSlots ?? [],
        status: 'active',
        startDate: dto.startDate ? new Date(dto.startDate) : null,
        endDate: dto.endDate ? new Date(dto.endDate) : null,
      },
    });
    return plan;
  }

  async updatePlan(id: bigint, dto: UpdatePlanDto, familyId: bigint) {
    await this.prisma.plan.updateMany({
      where: { id, familyId },
      data: {
        ...(dto.medicineName !== undefined && { medicineName: dto.medicineName }),
        ...(dto.memberName !== undefined && { memberName: dto.memberName }),
        ...(dto.frequency !== undefined && { frequency: dto.frequency }),
        ...(dto.timeSlots !== undefined && { timeSlots: dto.timeSlots }),
        ...(dto.startDate !== undefined && { startDate: dto.startDate ? new Date(dto.startDate) : null }),
        ...(dto.endDate !== undefined && { endDate: dto.endDate ? new Date(dto.endDate) : null }),
        ...(dto.status !== undefined && { status: dto.status }),
      },
    });

    const updated = await this.prisma.plan.findFirst({
      where: { id, familyId },
    });

    return updated;
  }

  async deletePlan(id: bigint, familyId: bigint) {
    const result = await this.prisma.plan.deleteMany({
      where: { id, familyId },
    });
    return result;
  }
}
