import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../families/guards/family-access.guard';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller('api/records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getRecords(@Req() req, @Query('date') date?: string) {
    return this.recordsService.getRecords(req.familyId, date);
  }

  @Post('complete/:id')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async completeRecord(@Param('id') id: string, @Req() req) {
    return this.recordsService.completeRecord(BigInt(id), req.familyId);
  }

  @Post('miss/:id')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async missRecord(@Param('id') id: string, @Req() req) {
    return this.recordsService.missRecord(BigInt(id), req.familyId);
  }

  @Post('add')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async addRecord(@Body() dto: CreateRecordDto, @Req() req) {
    return this.recordsService.addRecord(dto, req.familyId);
  }
}
