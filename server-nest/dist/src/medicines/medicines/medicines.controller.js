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
exports.MedicinesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const family_access_guard_1 = require("../../families/guards/family-access.guard");
const family_admin_guard_1 = require("../../families/guards/family-admin.guard");
const medicines_service_1 = require("./medicines.service");
const create_medicine_dto_1 = require("./dto/create-medicine.dto");
const update_medicine_dto_1 = require("./dto/update-medicine.dto");
let MedicinesController = class MedicinesController {
    medicinesService;
    constructor(medicinesService) {
        this.medicinesService = medicinesService;
    }
    async getList(req) {
        return this.medicinesService.getList(req.familyId);
    }
    async addMedicine(dto, req) {
        return this.medicinesService.addMedicine(dto, req.familyId);
    }
    async updateMedicine(id, dto, req) {
        return this.medicinesService.updateMedicine(BigInt(id), dto, req.familyId);
    }
    async deleteMedicine(id, req) {
        await this.medicinesService.deleteMedicine(BigInt(id), req.familyId);
        return null;
    }
};
exports.MedicinesController = MedicinesController;
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_access_guard_1.FamilyAccessGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicinesController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_dto_1.CreateMedicineDto, Object]),
    __metadata("design:returntype", Promise)
], MedicinesController.prototype, "addMedicine", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicine_dto_1.UpdateMedicineDto, Object]),
    __metadata("design:returntype", Promise)
], MedicinesController.prototype, "updateMedicine", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, family_admin_guard_1.FamilyAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MedicinesController.prototype, "deleteMedicine", null);
exports.MedicinesController = MedicinesController = __decorate([
    (0, common_1.Controller)('api/medicine'),
    __metadata("design:paramtypes", [medicines_service_1.MedicinesService])
], MedicinesController);
//# sourceMappingURL=medicines.controller.js.map