import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../families/guards/family-access.guard';
import { SyncService } from './sync.service';

@Controller('api/sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  /**
   * 获取数据变更日志（增量同步）
   * GET /api/sync/changes
   * 注意: 此端点已废弃，data_change_logs 表将不再使用。
   * 客户端应使用 WebSocket 接收实时推送。
   */
  @Get('changes')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getChanges(@Req() req: any) {
    // data_change_logs 表已废弃，返回空变更
    return {
      medicines: [],
      plans: [],
      familyMembers: [],
      deletedIds: {
        medicines: [],
        plans: [],
        familyMembers: [],
      },
      serverTime: new Date().toISOString(),
      deprecated: true,
      message: '此端点已废弃，请使用 WebSocket 接收实时推送',
    };
  }

  /**
   * 获取完整数据（全量同步）
   * GET /api/sync/full
   */
  @Get('full')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getFullSync(@Req() req: any) {
    const snapshot = await this.syncService.getFullSnapshot(req.familyId);
    return {
      ...snapshot,
      serverTime: new Date().toISOString(),
    };
  }

  /**
   * 获取家庭统计信息
   * GET /api/sync/statistics
   */
  @Get('statistics')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getStatistics(@Req() req: any) {
    return this.syncService.getStatistics(req.familyId);
  }
}
