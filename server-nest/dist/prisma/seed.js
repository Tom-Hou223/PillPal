"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_mariadb_1.PrismaMariaDb(process.env['DATABASE_URL']),
});
async function main() {
    console.log('🌱 清理旧测试数据...');
    const testPhoneUsers = await prisma.user.findMany({
        where: { phone: { in: ['13800138001', '13800138002'] } },
        select: { id: true },
    });
    const testUserIds = [...new Set([1001n, 1002n, ...testPhoneUsers.map(u => u.id)])];
    for (const uid of testUserIds) {
        await prisma.familyUserRole.deleteMany({ where: { userId: uid } });
    }
    const testFamilyIds = [2001n];
    await prisma.record.deleteMany({ where: { id: { in: [7001n, 7002n, 7003n, 7004n, 7005n, 7006n, 7007n, 7008n] } } });
    await prisma.plan.deleteMany({ where: { id: { in: [6001n, 6002n, 6003n, 6004n] } } });
    await prisma.medicine.deleteMany({ where: { id: { in: [5001n, 5002n, 5003n, 5004n, 5005n, 5006n] } } });
    await prisma.familyMember.deleteMany({ where: { id: { in: [4001n, 4002n, 4003n, 4004n, 4005n] } } });
    await prisma.family.deleteMany({ where: { id: { in: testFamilyIds } } });
    await prisma.user.deleteMany({ where: { id: { in: testUserIds } } });
    console.log('🌱 插入示例数据...');
    await prisma.user.createMany({
        data: [
            { id: 1001n, openid: 'test_openid_1001', phone: '13800138001', nickname: '张三' },
            { id: 1002n, openid: 'test_openid_1002', phone: '13800138002', nickname: '李四' },
        ],
    });
    await prisma.family.create({
        data: { id: 2001n, name: '测试家庭', creatorId: 1001n, inviteCode: 'TEST1234' },
    });
    await prisma.familyUserRole.createMany({
        data: [
            { id: 3001n, familyId: 2001n, userId: 1001n, role: 'admin', relationship: 'self' },
            { id: 3002n, familyId: 2001n, userId: 1002n, role: 'member', relationship: 'spouse' },
        ],
    });
    await prisma.familyMember.createMany({
        data: [
            { id: 4001n, familyId: 2001n, name: '张三', relationship: '本人', age: 35 },
            { id: 4002n, familyId: 2001n, name: '李四', relationship: '配偶', age: 33 },
            { id: 4003n, familyId: 2001n, name: '张小明', relationship: '子女', age: 10 },
            { id: 4004n, familyId: 2001n, name: '张父', relationship: '父亲', age: 60 },
            { id: 4005n, familyId: 2001n, name: '张母', relationship: '母亲', age: 58 },
        ],
    });
    await prisma.medicine.createMany({
        data: [
            { id: 5001n, familyId: 2001n, name: '阿莫西林胶囊', manufacturer: '华北制药', specification: '0.25g*24粒', category: '抗生素', stock: 10, unit: '盒', expiryDate: new Date('2026-12-31'), dosage: '每次2粒，每日3次，饭后服用' },
            { id: 5002n, familyId: 2001n, name: '布洛芬缓释胶囊', manufacturer: '中美天津史克', specification: '0.3g*12粒', category: '止痛药', stock: 5, unit: '盒', expiryDate: new Date('2026-06-30'), dosage: '每次1粒，每日2次，疼痛时服用' },
            { id: 5003n, familyId: 2001n, name: '盐酸伐地那非片', manufacturer: '拜耳医药', specification: '20mg*1片', category: '男科用药', stock: 3, unit: '盒', expiryDate: new Date('2026-01-31'), dosage: '每次1片，按需服用，性生活前30分钟服用' },
            { id: 5004n, familyId: 2001n, name: '感冒清热颗粒', manufacturer: '北京同仁堂', specification: '10g*10袋', category: '感冒药', stock: 15, unit: '盒', expiryDate: new Date('2026-09-30'), dosage: '每次1袋，每日3次，开水冲服' },
            { id: 5005n, familyId: 2001n, name: '维生素C片', manufacturer: '华北制药', specification: '0.1g*100片', category: '维生素', stock: 20, unit: '瓶', expiryDate: new Date('2027-06-30'), dosage: '每次1片，每日1次，口服' },
            { id: 5006n, familyId: 2001n, name: '创可贴', manufacturer: '云南白药', specification: '100片/盒', category: '医疗器械', stock: 50, unit: '盒', expiryDate: new Date('2027-12-31'), dosage: '按需使用，外用' },
        ],
    });
    await prisma.plan.createMany({
        data: [
            { id: 6001n, familyId: 2001n, medicineName: '阿莫西林胶囊', memberName: '张三', frequency: '每日3次', timeSlots: ['08:00', '12:00', '18:00'], status: 'active', startDate: new Date('2023-03-01'), endDate: new Date('2026-06-07') },
            { id: 6002n, familyId: 2001n, medicineName: '布洛芬缓释胶囊', memberName: '李四', frequency: '每日2次', timeSlots: ['09:00', '21:00'], status: 'active', startDate: new Date('2023-03-01'), endDate: new Date('2026-06-03') },
            { id: 6003n, familyId: 2001n, medicineName: '盐酸伐地那非片', memberName: '张三', frequency: '按需服用', timeSlots: [], status: 'active', startDate: new Date('2023-03-01'), endDate: new Date('2026-12-31') },
            { id: 6004n, familyId: 2001n, medicineName: '维生素C片', memberName: '张三', frequency: '每日1次', timeSlots: ['08:30'], status: 'active', startDate: new Date('2023-01-01'), endDate: new Date('2026-12-31') },
        ],
    });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    await prisma.record.createMany({
        data: [
            { id: 7001n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '08:00', date: today, status: 'completed' },
            { id: 7002n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '12:00', date: today, status: 'completed' },
            { id: 7003n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '18:00', date: today, status: 'pending' },
            { id: 7004n, familyId: 2001n, planId: 6002n, medicineName: '布洛芬缓释胶囊', memberName: '李四', time: '09:00', date: today, status: 'completed' },
            { id: 7005n, familyId: 2001n, planId: 6004n, medicineName: '维生素C片', memberName: '张三', time: '08:30', date: today, status: 'completed' },
            { id: 7006n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '08:00', date: yesterday, status: 'completed' },
            { id: 7007n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '12:00', date: yesterday, status: 'completed' },
            { id: 7008n, familyId: 2001n, planId: 6001n, medicineName: '阿莫西林胶囊', memberName: '张三', time: '18:00', date: yesterday, status: 'completed' },
        ],
    });
    console.log('✅ 示例数据插入完成！');
    console.log('  - 2 用户, 1 家庭, 2 角色关系');
    console.log('  - 5 家庭成员, 6 药品, 4 用药计划, 8 用药记录');
}
main()
    .catch((e) => {
    console.error('❌ 种子数据插入失败:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map