import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../../families/guards/family-access.guard';
import { FamilyAdminGuard } from '../../families/guards/family-admin.guard';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Controller('api/medicine')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Get('list')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getList(@Req() req) {
    return this.medicinesService.getList(req.familyId);
  }

  @Post('add')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async addMedicine(@Body() dto: CreateMedicineDto, @Req() req) {
    return this.medicinesService.addMedicine(dto, req.familyId);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async updateMedicine(@Param('id') id: string, @Body() dto: UpdateMedicineDto, @Req() req) {
    return this.medicinesService.updateMedicine(BigInt(id), dto, req.familyId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async deleteMedicine(@Param('id') id: string, @Req() req) {
    await this.medicinesService.deleteMedicine(BigInt(id), req.familyId);
    return null;
  }
}
