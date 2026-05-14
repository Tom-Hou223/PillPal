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
  ParseIntPipe,
} from '@nestjs/common';
import type { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from './guards/family-access.guard';
import { FamilyAdminGuard } from './guards/family-admin.guard';
import { FamiliesService } from './families.service';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { JoinFamilyDto } from './dto/join-family.dto';
import { AddMemberByPhoneDto } from './dto/add-member-by-phone.dto';

@Controller('api/families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createFamily(
    @Body() dto: CreateFamilyDto,
    @CurrentUser('id') userId: bigint,
  ) {
    return this.familiesService.createFamily(dto.name, userId);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  getMyFamilies(@CurrentUser('id') userId: bigint) {
    return this.familiesService.getMyFamilies(userId);
  }

  @Get('relationship-rules')
  @UseGuards(JwtAuthGuard)
  getRelationshipRules() {
    return this.familiesService.getRelationshipRules();
  }

  @Get(':familyId')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  getFamilyDetail(
    @Param('familyId') familyId: string,
    @Req() req: Request,
  ) {
    return this.familiesService.getFamilyDetail(
      BigInt(familyId),
      (req as any).familyRole,
    );
  }

  @Put(':familyId')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  updateFamily(
    @Param('familyId') familyId: string,
    @Body() dto: UpdateFamilyDto,
  ) {
    return this.familiesService.updateFamily(BigInt(familyId), dto.name);
  }

  @Delete(':familyId')
  @UseGuards(JwtAuthGuard)
  deleteFamily(
    @Param('familyId') familyId: string,
    @CurrentUser('id') userId: bigint,
  ) {
    return this.familiesService.deleteFamily(BigInt(familyId), userId);
  }

  @Post(':familyId/invite')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  generateInviteCode(@Param('familyId') familyId: string) {
    return this.familiesService.generateInviteCode(BigInt(familyId));
  }

  @Post('join')
  @UseGuards(JwtAuthGuard)
  joinByInviteCode(
    @Body() dto: JoinFamilyDto,
    @CurrentUser('id') userId: bigint,
  ) {
    return this.familiesService.joinByInviteCode(dto.inviteCode, userId);
  }

  @Get(':familyId/members')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  getMembers(@Param('familyId') familyId: string) {
    return this.familiesService.getMembers(BigInt(familyId));
  }

  @Put(':familyId/members/:userId/role')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  updateMemberRole(
    @Param('familyId') familyId: string,
    @Param('userId') userId: string,
    @Body('role') role: string,
  ) {
    return this.familiesService.updateMemberRole(
      BigInt(familyId),
      BigInt(userId),
      role,
    );
  }

  @Delete(':familyId/members/:userId')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  removeMember(
    @Param('familyId') familyId: string,
    @Param('userId') userId: string,
  ) {
    return this.familiesService.removeMember(BigInt(familyId), BigInt(userId));
  }

  @Post(':familyId/leave')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  leaveFamily(
    @Param('familyId') familyId: string,
    @CurrentUser('id') userId: bigint,
  ) {
    return this.familiesService.leaveFamily(BigInt(familyId), userId);
  }

  @Post(':familyId/members/add-by-phone')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  addMemberByPhone(
    @Param('familyId') familyId: string,
    @Body() dto: AddMemberByPhoneDto,
  ) {
    return this.familiesService.addMemberByPhone(
      BigInt(familyId),
      dto.phone,
      dto.relationship,
    );
  }

  @Put(':familyId/members/:userId/relationship')
  @UseGuards(JwtAuthGuard, FamilyAdminGuard)
  updateMemberRelationship(
    @Param('familyId') familyId: string,
    @Param('userId') userId: string,
    @Body('relationship') relationship: string,
  ) {
    return this.familiesService.updateMemberRelationship(
      BigInt(familyId),
      BigInt(userId),
      relationship,
    );
  }
}
