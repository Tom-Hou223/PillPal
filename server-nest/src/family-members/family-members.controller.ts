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
import type { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../families/guards/family-access.guard';
import { FamilyAdminGuard } from '../families/guards/family-admin.guard';
import { FamilyMembersService } from './family-members.service';
import { AddFamilyMemberDto } from './dto/add-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';

@Controller('api/family')
export class FamilyMembersController {
  constructor(
    private readonly familyMembersService: FamilyMembersService,
  ) {}

  @Get('list')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  getList(@Req() req: Request) {
    const familyId = (req as any).familyId;
    return this.familyMembersService.getList(familyId);
  }

  @Post('add')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  addMember(
    @Body() dto: AddFamilyMemberDto,
    @Req() req: Request,
  ) {
    const familyId = (req as any).familyId;
    return this.familyMembersService.addMember(dto, familyId);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  updateMember(
    @Param('id') id: string,
    @Body() dto: UpdateFamilyMemberDto,
    @Req() req: Request,
  ) {
    const familyId = (req as any).familyId;
    return this.familyMembersService.updateMember(BigInt(id), dto, familyId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  deleteMember(
    @Param('id') id: string,
    @Req() req: Request,
  ) {
    const familyId = (req as any).familyId;
    return this.familyMembersService.deleteMember(BigInt(id), familyId);
  }
}
