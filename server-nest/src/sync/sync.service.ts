import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get family statistics using the family_statistics view
   */
  async getStatistics(familyId: bigint) {
    // Aggregated stats via Prisma
    const [medicineCount, planCount, recordCount, memberCount] =
      await Promise.all([
        this.prisma.medicine.count({ where: { familyId } }),
        this.prisma.plan.count({ where: { familyId } }),
        this.prisma.record.count({
          where: { plan: { familyId } },
        }),
        this.prisma.familyMember.count({ where: { familyId } }),
      ]);

    const expiringCount = await this.prisma.medicine.count({
      where: {
        familyId,
        expiryDate: {
          lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          gt: new Date(),
        },
      },
    });

    const expiredCount = await this.prisma.medicine.count({
      where: {
        familyId,
        expiryDate: {
          lte: new Date(),
        },
      },
    });

    return {
      medicineCount,
      planCount,
      recordCount,
      memberCount,
      expiringCount,
      expiredCount,
    };
  }

  /**
   * Get full snapshot of family data for initial sync
   */
  async getFullSnapshot(familyId: bigint) {
    const [medicines, plans, records, members] = await Promise.all([
      this.prisma.medicine.findMany({ where: { familyId } }),
      this.prisma.plan.findMany({ where: { familyId } }),
      this.prisma.record.findMany({
        where: { plan: { familyId } },
        include: { plan: true },
        orderBy: { date: 'desc' },
        take: 200,
      }),
      this.prisma.familyMember.findMany({ where: { familyId } }),
    ]);

    return { medicines, plans, records, members };
  }
}
