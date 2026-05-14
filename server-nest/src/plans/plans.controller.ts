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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../families/guards/family-access.guard';
import { FamilyAdminGuard } from '../families/guards/family-admin.guard';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('api/plan')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get('list')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getList(@Req() req) {
    return this.plansService.getList(req.familyId);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async createPlan(@Body() dto: CreatePlanDto, @Req() req) {
    return this.plansService.createPlan(dto, req.familyId);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async updatePlan(@Param('id') id: string, @Body() dto: UpdatePlanDto, @Req() req) {
    return this.plansService.updatePlan(BigInt(id), dto, req.familyId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  async deletePlan(@Param('id') id: string, @Req() req) {
    await this.plansService.deletePlan(BigInt(id), req.familyId);
    return null;
  }
}
