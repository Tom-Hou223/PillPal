import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FamilyAdminGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const familyId = request.headers?.['x-family-id'] || request.params?.familyId || request.body?.familyId;

    if (!familyId) {
      throw new ForbiddenException('缺少家庭ID');
    }
    if (!request.user) {
      throw new ForbiddenException('请先登录');
    }

    const userId = request.user.id;
    const role = await this.prisma.familyUserRole.findUnique({
      where: { familyId_userId: { familyId: BigInt(familyId), userId } },
    });

    if (!role) {
      throw new ForbiddenException('无权访问该家庭');
    }

    if (role.role !== 'admin') {
      throw new ForbiddenException('需要管理员权限');
    }

    request.familyRole = role.role;
    request.familyId = BigInt(familyId);
    return true;
  }
}
