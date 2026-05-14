# PillPal — 药丸伙伴

> NestJS + Taro + React + TypeScript 全栈重构版

[![NestJS](https://img.shields.io/badge/NestJS-11.x-E0234E)](https://nestjs.com/)
[![Taro](https://img.shields.io/badge/Taro-3.6.38-0078D4)](https://taro.jd.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1)](https://www.mysql.com/)

**PillPal** 是一款面向家庭的常备药品智能管理小程序，支持药品库存管理、用药计划提醒、OCR 拍照识别、多家庭协作、微信推送通知等功能。

---

## 目录

- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [后端架构](#后端架构)
- [前端架构](#前端架构)
- [数据库设计](#数据库设计)
- [API 文档](#api-文档)
- [功能清单](#功能清单)
- [已知不足](#已知不足)
- [改进路线图](#改进路线图)

---

## 项目结构

```
PillPal\
├── server-nest/            # NestJS 后端 (66 个 TS 文件)
│   ├── src/
│   │   ├── auth/           # 认证模块 (JWT 双Token)
│   │   ├── families/       # 家庭管理
│   │   ├── family-members/ # 家庭成员信息
│   │   ├── medicines/      # 药品库存
│   │   ├── plans/          # 用药计划
│   │   ├── records/        # 用药记录
│   │   ├── notifications/  # 通知订阅 + 微信推送
│   │   ├── recognition/    # OCR/条形码识别
│   │   ├── sync/           # 数据同步 + WebSocket
│   │   ├── reminder/       # 定时任务调度
│   │   ├── prisma/         # 数据库客户端
│   │   ├── redis/          # Redis 缓存/黑名单
│   │   └── common/         # 过滤器/拦截器/装饰器
│   ├── prisma/
│   │   ├── schema.prisma   # 数据模型 (13 表)
│   │   ├── seed.ts         # 种子数据
│   │   └── migrations/     # 迁移历史
│   └── .env                # 环境配置
│
├── app-taro/               # Taro 小程序前端 (28 页)
│   ├── src/
│   │   ├── pages/          # 28 个页面
│   │   ├── components/     # 4 个通用组件
│   │   ├── services/       # API 层 + Socket
│   │   ├── stores/         # Zustand 状态管理
│   │   ├── types/          # TypeScript 类型
│   │   └── utils/          # 工具函数
│   ├── config/             # Taro 构建配置
│   └── dist/               # 小程序编译产物
│
├── 项目技术文档.md           # 详细技术文档
└── README.md               # 本文件
```

---

## 快速开始

### 环境要求

| 依赖    | 版本       |
| ------- | ---------- |
| Node.js | ≥18        |
| MySQL   | 8.0        |
| Redis   | 3.x (可选) |

### 1. 后端

```bash
cd server-nest

# 安装依赖
npm install

# 初始化数据库（已存在则跳过）
npx prisma db push

# 填充种子数据
npx prisma db seed

# 启动
npm run build && node dist/src/main.js
# → http://localhost:3001
# → Swagger: http://localhost:3001/api-docs
```

### 2. 前端

```bash
cd app-taro

# 安装依赖
npm install

# 修改 API 地址（src/services/api.ts 第5行）
# const API_BASE_URL = 'http://你的IP:3001/api';

# 构建
npm run build:weapp

# dist/ 目录用微信开发者工具打开
```

### 3. 微信开发者工具

- 打开 `app-taro/dist/`
- 详情 → 本地设置 → 勾选「不校验合法域名」
- 详情 → 本地设置 → 基础库 3.0.2

---

## 后端架构

### 模块依赖图

```
app.module
├── ConfigModule (全局配置)
├── ScheduleModule (定时任务)
├── AuthModule (认证)
│   └── JwtStrategy + JwtRefreshStrategy
├── FamiliesModule (家庭管理)
│   └── FamilyAccessGuard + FamilyAdminGuard
├── FamilyMembersModule (家庭成员)
├── MedicinesModule (药品库存)
├── PlansModule (用药计划)
├── RecordsModule (用药记录)
├── NotificationsModule (通知)
├── RecognitionModule (OCR识别)
├── SyncModule (同步 + WebSocket)
└── ReminderModule (定时提醒)
```

### 技术特性

| 特性        | 说明                                   |
| ----------- | -------------------------------------- |
| 双Token     | Access Token 15min + Refresh Token 7天 |
| Token黑名单 | Redis 存储已登出 Token                 |
| 动态计算    | 药品状态(正常/临期/过期)运行时计算     |
| 参数校验    | class-validator DTO + ValidationPipe   |
| Prisma ORM  | 类型安全数据库访问                     |
| 百度OCR     | accurate_basic 高精度文字识别          |
| 阿里云条码  | 药品条形码查询                         |
| Swagger     | /api-docs 自动生成 API 文档            |

### 定时任务

| 任务                    | 频次      | 实现                      |
| ----------------------- | --------- | ------------------------- |
| 药品过期检查            | 每天 8:00 | `@Cron(EVERY_DAY_AT_8AM)` |
| 用药提醒 + 自动创建记录 | 每分钟    | `@Cron(EVERY_MINUTE)`     |

---

## 前端架构

### 技术栈

| 层       | 选型                   |
| -------- | ---------------------- |
| 框架     | Taro 3.6.38 + React 18 |
| 状态管理 | Zustand 4              |
| 样式     | SCSS (rpx)             |
| 类型     | TypeScript 5           |
| 构建     | Webpack 5              |

### 页面总览 (28 页)

| 分类 | 页面                             | 说明                                   |
| ---- | -------------------------------- | -------------------------------------- |
| Tab  | 首页                             | 日历 + 按时段分组的用药计划 + 统计卡片 |
| Tab  | 计划                             | 计划列表、筛选、CRUD弹窗               |
| Tab  | 药品库                           | 药品列表、搜索、扫码/拍照/相册OCR识别  |
| Tab  | 我的                             | 用户信息、家庭切换、菜单               |
| 认证 | 登录/注册/资料                   | 三Tab登录(手机/昵称/微信) + 头像上传   |
| 家庭 | 管理/成员/选择                   | 家庭CRUD、邀请码、角色管理             |
| 药品 | 详情/扫码/临期                   | 药品编辑、条形码/OCR识别入口、过期预警 |
| 计划 | 创建/详情/快速添加               | 用药计划CRUD + 记录跟踪                |
| 工具 | 统计/设置/提醒/导出/备份/医院... | 9个功能页面                            |

### 核心组件 (4)

| 组件           | 说明                             |
| -------------- | -------------------------------- |
| CustomTabBar   | 普通4Tab / 老年2Tab 自适应       |
| NavBar         | 自定义导航栏，状态栏高度适应     |
| Calendar       | 月历，日状态着色(完成/待办/错过) |
| MemberSelector | 家庭成员横向滚动选择器           |

### Mock 降级

API 请求失败或未登录时，自动返回本地 mock 数据。覆盖药品列表/计划/家庭成员/记录/统计等读操作。写操作需登录且连接后端。

---

## 数据库设计

### ER 简图

```
users ──┬── family_user_roles ──┬── families
        │                       │
        ├── user_subscriptions  ├── medicines
        ├── user_notification_  ├── plans ─── records
        │   settings            ├── family_members
        ├── recognition_history ├── recognition_history
        └── refresh_tokens      └── family_statistics (VIEW)
```

### 表清单 (13表 + 1视图)

| 表                         | 行数 | 说明                             |
| -------------------------- | :--: | -------------------------------- |
| users                      |  8   | 用户 (openid/手机/昵称/头像)     |
| families                   |  3   | 家庭组 (名称/创建者/邀请码)      |
| family_user_roles          |  5   | 用户-家庭角色 (admin/member)     |
| family_relationship_rules  |  11  | 关系规则 (self/spouse/father...) |
| family_members             |  5   | 成员信息 (姓名/关系/年龄)        |
| medicines                  |  21  | 药品库存 (名称/厂商/规格/过期日) |
| plans                      |  6   | 用药计划 (药品/成员/频次/时段)   |
| records                    |  15  | 用药记录 (计划/时间/状态)        |
| refresh_tokens             |  25  | Refresh Token (双Token)          |
| user_subscriptions         |  0   | 用户推送订阅                     |
| user_notification_settings |  0   | 用户提醒设置                     |
| recognition_history        | 395  | OCR识别历史                      |
| family_statistics          |  —   | 家庭统计视图                     |

### 与原项目差异

| 变更                         | 原因              |
| ---------------------------- | ----------------- |
| ➕ refresh_tokens            | 双Token机制       |
| ➖ data_change_logs + 触发器 | WebSocket替代轮询 |
| ➖ days_to_expiry / status   | 应用层动态计算    |
| ➖ 存储过程 / 定时事件       | NestJS @Cron 替代 |

---

## API 文档

### 端点统计: 49 个

| 模块           | 端点 | 认证 | 权限                |
| -------------- | :--: | :--: | ------------------- |
| Auth           |  8   | 部分 | —                   |
| Families       |  14  |  ✅  | 家庭成员/管理员     |
| Family Members |  4   |  ✅  | 成员/管理员         |
| Medicines      | 4+3  |  ✅  | 管理员(写)/成员(读) |
| Plans          |  4   |  ✅  | 管理员(写)/成员(读) |
| Records        |  4   |  ✅  | 成员                |
| Notifications  |  5   |  ✅  | 登录用户            |
| Sync           |  3   |  ✅  | 成员                |

### 统一响应格式

```json
{ "code": 0, "message": "success", "data": { ... } }
```

错误时 code 为 HTTP 状态码，message 为错误描述。

---

## 功能清单

| 功能                    | 状态 | 说明                       |
| ----------------------- | :--: | -------------------------- |
| 📱 微信/手机/昵称登录   |  ✅  | 三合一登录页               |
| 🔐 双Token + 黑名单登出 |  ✅  | 比原项目单Token更安全      |
| 🏠 多家庭协作           |  ✅  | 创建/加入/邀请码/角色管理  |
| 👨‍👩‍👧‍👦 家庭成员管理         |  ✅  | 关系规则限制               |
| 💊 药品库存管理         |  ✅  | 动态计算过期状态           |
| 📋 用药计划             |  ✅  | 多时段、频率、日期范围     |
| ✅ 用药打卡             |  ✅  | 完成/错过/跳过             |
| 📸 拍照 OCR 识别        |  ✅  | 百度AI 高精度 + 多图合并   |
| 📷 条形码扫描           |  ✅  | 阿里云条码查询             |
| 🔍 药品溯源             |  ✅  | OCR 提取追溯码             |
| ⏰ 定时用药提醒         |  ✅  | 每分钟检查、自动创建记录   |
| 🔔 微信推送通知         |  ⚠️  | 代码完整，待配置模板ID     |
| 📊 数据统计             |  ✅  | 药品/计划/提醒三维统计     |
| 👴 老年模式             |  ✅  | 大字版 + 黑白/黄黑主题     |
| 🔄 数据同步             |  ✅  | HTTP API + WebSocket(可选) |
| 📄 Swagger 文档         |  ✅  | /api-docs 自动生成         |

---

## 已知不足

### 微信推送未生效

| 阻断项     | 当前值                                           |
| ---------- | ------------------------------------------------ |
| 过期模板ID | `WECHAT_EXPIRY_TEMPLATE_ID=your-template-id`     |
| 用药模板ID | `WECHAT_MEDICATION_TEMPLATE_ID=your-template-id` |
| 用户订阅   | `user_subscriptions` 表为空                      |

> 需在微信公众平台申请订阅消息模板，填入 `.env` 后生效。

### 前端硬编码

| 变量        | 文件           | 当前值                          |
| ----------- | -------------- | ------------------------------- |
| API 基址    | `api.ts` L5    | `http://192.168.31.90:3001/api` |
| Socket 地址 | `socket.ts` L6 | `http://192.168.31.90:3001`     |
| 头像前缀    | `mine.tsx`     | Server Base URL 硬编码          |

> 切换网络环境需手动修改，建议抽取为 `config.ts`。

### 安全加固

| 问题       | 建议                              |
| ---------- | --------------------------------- |
| JWT Secret | `your-access-secret-key` 为弱密钥 |
| CORS       | `app.enableCors()` 无来源限制     |
| 数据库     | 密码明文存储于 `.env`             |

### 其他

| 问题                | 说明                                    |
| ------------------- | --------------------------------------- |
| BigInt 序列化       | 依赖全局 polyfill，非标准方案           |
| Socket 超时         | 客户端连接后端 WebSocket 失败（非阻塞） |
| 种子数据日期        | 部分日期仍为 2023/2026 混合             |
| Reminder-list 页面  | 功能已整合到首页，独立页面冗余          |
| scroll-view padding | 微信基础库 3.0.2 不支持                 |

---

## 改进路线图

### 🔴 短期 (1-2周)

- [ ] 微信公众平台申请订阅消息模板 → 启用微信推送
- [ ] 替换 JWT Secret 为随机强密钥
- [ ] 前端 API 基址抽取到 `src/config.ts`
- [ ] 种子数据日期更新到当前年

### 🟡 中期 (1-3月)

- [ ] WebSocket 实时推送联调通过
- [ ] 批量导入药品 (Excel/CSV)
- [ ] 用药依从性统计图表优化
- [ ] 头像上传路径改为相对路径 + 后端拼接
- [ ] 单元测试覆盖核心 Service
- [ ] CI/CD: GitHub Actions 自动构建

### 🟢 长期 (3-6月)

- [ ] 腾讯云 OCR 替代百度 OCR (更高精度)
- [ ] 药品相互作用智能提醒
- [ ] 多语言支持 (中/英)
- [ ] Docker Compose 一键部署
- [ ] Redis 缓存层优化性能
- [ ] E2E 自动化测试

---

## 维护者

**RayHo** — [项目地址](https://github.com/Tom-Hou223/PillPal)

---

> ☕ Built with NestJS, Taro, React, Prisma & Love.
