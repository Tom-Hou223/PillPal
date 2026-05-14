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
exports.FamilyMembersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const family_access_guard_1 = require("../families/guards/family-access.guard");
const family_admin_guard_1 = require("../families/guards/family-admin.guard");
const family_members_service_1 = require("./family-members.service");
const add_family_member_dto_1 = require("./dto/add-family-member.dto");
const update_family_member_dto_1 = require("./dto/update-family-member.dto");
let FamilyMembersController = class FamilyMembersController {
    familyMembersService;
    constructor(familyMembersService) {
        this.familyMembersService = familyMembersService;
    }
    getList(req) {
        const familyId = req.familyId;
        return this.familyMembersService.getList(familyId);
    }
    addMember(dto, req) {
        const familyId = req.familyId;
        return this.familyMembersService.addMember(dto, familyId);
    }
    updateMember(id, dto, req) {
        const familyId = req.familyId;
        return this.familyMembersService.updateMember(BigInt(id), dto, familyId);
    }
    deleteMember(id, req) {
        const familyId = req.familyId;
        return this.familyMembersService.deleteMember(BigInt(id), familyId);
    }
};
exports.FamilyMembersController = FamilyMembersController;
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FamilyMembersController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_family_member_dto_1.AddFamilyMemberDto, Object]),
    __metadata("design:returntype", void 0)
], FamilyMembersController.prototype, "addMember", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_family_member_dto_1.UpdateFamilyMemberDto, Object]),
    __metadata("design:returntype", void 0)
], FamilyMembersController.prototype, "updateMember", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FamilyMembersController.prototype, "deleteMember", null);
exports.FamilyMembersController = FamilyMembersController = __decorate([
    (0, common_1.Controller)('api/family'),
    __metadata("design:paramtypes", [family_members_service_1.FamilyMembersService])
], FamilyMembersController);
//# sourceMappingURL=family-members.controller.js.map