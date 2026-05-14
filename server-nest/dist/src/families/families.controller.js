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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const family_access_guard_1 = require("./guards/family-access.guard");
const family_admin_guard_1 = require("./guards/family-admin.guard");
const families_service_1 = require("./families.service");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const create_family_dto_1 = require("./dto/create-family.dto");
const update_family_dto_1 = require("./dto/update-family.dto");
const join_family_dto_1 = require("./dto/join-family.dto");
const add_member_by_phone_dto_1 = require("./dto/add-member-by-phone.dto");
let FamiliesController = class FamiliesController {
    familiesService;
    constructor(familiesService) {
        this.familiesService = familiesService;
    }
    createFamily(dto, userId) {
        return this.familiesService.createFamily(dto.name, userId);
    }
    getMyFamilies(userId) {
        return this.familiesService.getMyFamilies(userId);
    }
    getRelationshipRules() {
        return this.familiesService.getRelationshipRules();
    }
    getFamilyDetail(familyId, req) {
        return this.familiesService.getFamilyDetail(BigInt(familyId), req.familyRole);
    }
    updateFamily(familyId, dto) {
        return this.familiesService.updateFamily(BigInt(familyId), dto.name);
    }
    deleteFamily(familyId, userId) {
        return this.familiesService.deleteFamily(BigInt(familyId), userId);
    }
    generateInviteCode(familyId) {
        return this.familiesService.generateInviteCode(BigInt(familyId));
    }
    joinByInviteCode(dto, userId) {
        return this.familiesService.joinByInviteCode(dto.inviteCode, userId);
    }
    getMembers(familyId) {
        return this.familiesService.getMembers(BigInt(familyId));
    }
    updateMemberRole(familyId, userId, role) {
        return this.familiesService.updateMemberRole(BigInt(familyId), BigInt(userId), role);
    }
    removeMember(familyId, userId) {
        return this.familiesService.removeMember(BigInt(familyId), BigInt(userId));
    }
    leaveFamily(familyId, userId) {
        return this.familiesService.leaveFamily(BigInt(familyId), userId);
    }
    addMemberByPhone(familyId, dto) {
        return this.familiesService.addMemberByPhone(BigInt(familyId), dto.phone, dto.relationship);
    }
    updateMemberRelationship(familyId, userId, relationship) {
        return this.familiesService.updateMemberRelationship(BigInt(familyId), BigInt(userId), relationship);
    }
};
exports.FamiliesController = FamiliesController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_family_dto_1.CreateFamilyDto, BigInt]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "createFamily", null);
__decorate([
    (0, common_1.Get)('my'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BigInt]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "getMyFamilies", null);
__decorate([
    (0, common_1.Get)('relationship-rules'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "getRelationshipRules", null);
__decorate([
    (0, common_1.Get)(':familyId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "getFamilyDetail", null);
__decorate([
    (0, common_1.Put)(':familyId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_family_dto_1.UpdateFamilyDto]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "updateFamily", null);
__decorate([
    (0, common_1.Delete)(':familyId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, BigInt]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "deleteFamily", null);
__decorate([
    (0, common_1.Post)(':familyId/invite'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "generateInviteCode", null);
__decorate([
    (0, common_1.Post)('join'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_family_dto_1.JoinFamilyDto, BigInt]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "joinByInviteCode", null);
__decorate([
    (0, common_1.Get)(':familyId/members'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "getMembers", null);
__decorate([
    (0, common_1.Put)(':familyId/members/:userId/role'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "updateMemberRole", null);
__decorate([
    (0, common_1.Delete)(':familyId/members/:userId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "removeMember", null);
__decorate([
    (0, common_1.Post)(':familyId/leave'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, BigInt]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "leaveFamily", null);
__decorate([
    (0, common_1.Post)(':familyId/members/add-by-phone'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_member_by_phone_dto_1.AddMemberByPhoneDto]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "addMemberByPhone", null);
__decorate([
    (0, common_1.Put)(':familyId/members/:userId/relationship'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('familyId')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)('relationship')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "updateMemberRelationship", null);
exports.FamiliesController = FamiliesController = __decorate([
    (0, common_1.Controller)('api/families'),
    __metadata("design:paramtypes", [families_service_1.FamiliesService])
], FamiliesController);
//# sourceMappingURL=families.controller.js.map