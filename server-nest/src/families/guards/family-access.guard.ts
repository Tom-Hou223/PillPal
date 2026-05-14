/**原项目 middleware/permission.js 中 checkCurrentFamilyAccess （L98-133）和 getCurrentFamilyId */ 
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FamilyAccessGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const familyId = request.headers?.['x-family-id'] || request.params?.familyId || request.body?.familyId;

    if (!familyId) return true; // 无家庭ID时放行
    if (!request.user) return true; // 未认证时放行

    const userId = request.user.id;
    const role = await this.prisma.familyUserRole.findUnique({
      where: { familyId_userId: { familyId: BigInt(familyId), userId } },
    });

    if (!role) throw new ForbiddenException('无权访问该家庭');

    request.familyRole = role.role;
    request.familyId = BigInt(familyId);
    return true;
  }
}