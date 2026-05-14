import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordsService {
  constructor(private prisma: PrismaService) {}

  async getRecords(familyId: bigint, date?: string) {
    const where: any = {
      plan: { familyId },
    };
    if (date) {
      where.date = new Date(date);
    }

    const list = await this.prisma.record.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return list;
  }

  async completeRecord(id: bigint, familyId: bigint) {
    const record = await this.prisma.record.findFirst({
      where: { id },
      include: { plan: true },
    });

    if (!record) {
      throw new NotFoundException('记录不存在');
    }
    if (!record.plan || record.plan.familyId !== familyId) {
      throw new ForbiddenException('无权操作该记录');
    }

    await this.prisma.record.update({
      where: { id },
      data: { status: 'completed' },
    });

    return { id, status: 'completed' };
  }

  async missRecord(id: bigint, familyId: bigint) {
    const record = await this.prisma.record.findFirst({
      where: { id },
      include: { plan: true },
    });

    if (!record) {
      throw new NotFoundException('记录不存在');
    }
    if (!record.plan || record.plan.familyId !== familyId) {
      throw new ForbiddenException('无权操作该记录');
    }

    await this.prisma.record.update({
      where: { id },
      data: { status: 'missed' },
    });

    return { id, status: 'missed' };
  }

  async addRecord(dto: CreateRecordDto, familyId: bigint) {
    const plan = await this.prisma.plan.findFirst({
      where: { id: BigInt(dto.planId) },
    });

    if (!plan) {
      throw new NotFoundException('用药计划不存在');
    }
    if (plan.familyId !== familyId) {
      throw new ForbiddenException('无权操作该计划');
    }

    const record = await this.prisma.record.create({
      data: {
        id: BigInt(Date.now()),
        familyId,
        planId: BigInt(dto.planId),
        medicineName: dto.medicineName,
        memberName: dto.memberName,
        time: dto.time,
        date: dto.date ? new Date(dto.date) : new Date(),
        status: 'pending',
      },
    });
    return record;
  }
}
