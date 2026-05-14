"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyAccessGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const prisma_service_1 = require("../../prisma/prisma.service");
let FamilyAccessGuard = class FamilyAccessGuard {
    reflector;
    prisma;
    constructor(reflector, prisma) {
        this.reflector = reflector;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const familyId = request.headers?.['x-family-id'] || request.params?.familyId || request.body?.familyId;
        if (!familyId)
            return true;
        if (!request.user)
            return true;
        const userId = request.user.id;
        const role = await this.prisma.familyUserRole.findUnique({
            where: { familyId_userId: { familyId: BigInt(familyId), userId } },
        });
        if (!role)
            throw new common_1.ForbiddenException('无权访问该家庭');
        request.familyRole = role.role;
        request.familyId = BigInt(familyId);
        return true;
    }
};
exports.FamilyAccessGuard = FamilyAccessGuard;
exports.FamilyAccessGuard = FamilyAccessGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, prisma_service_1.PrismaService])
], FamilyAccessGuard);
//# sourceMappingURL=family-access.guard.js.map