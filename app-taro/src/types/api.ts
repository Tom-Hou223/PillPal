// API 响应基础类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 用户
export interface User {
  id: number;
  openid: string;
  phone?: string;
  nickname?: string;
  avatarUrl?: string;
  createdAt?: string;
}

export interface UserProfile extends User {
  families: FamilyInfo[];
}

// 家庭
export interface FamilyInfo {
  id: number;
  name: string;
  role: 'admin' | 'member';
  inviteCode?: string;
  memberCount?: number;
  joinedAt?: string;
  createdAt?: string;
}

export interface FamilyDetail extends FamilyInfo {
  creatorId: number;
  creatorNickname?: string;
  myRole: string;
}

export interface FamilyMember {
  userId: number;
  nickname: string;
  avatarUrl?: string;
  phone?: string;
  role: 'admin' | 'member';
  relationship: string;
  joinedAt?: string;
}

// 家庭成员(FamilyMembers表)
export interface FamilyMemberRow {
  id: number;
  familyId: number;
  name: string;
  relationship?: string;
  age?: number;
  createdAt?: string;
}

// 关系规则
export interface RelationshipRule {
  id: number;
  relationship: string;
  maxCount?: number;
  description?: string;
}

// 药品
export interface Medicine {
  id: number;
  familyId: number;
  name: string;
  manufacturer?: string;
  specification?: string;
  category?: string;
  stock: number;
  unit?: string;
  expiryDate?: string;
  dosage?: string;
  createdAt?: string;
  daysToExpiry?: number | null;
  status: 'normal' | 'expiring' | 'expired';
}

// 用药计划
export interface Plan {
  id: number;
  familyId: number;
  medicineName: string;
  memberName: string;
  frequency?: string;
  timeSlots: string[];
  status: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
}

// 用药记录
export interface Record {
  id: number;
  familyId: number;
  planId: number;
  medicineName: string;
  memberName: string;
  time?: string;
  date?: string;
  status: 'pending' | 'completed' | 'missed';
  createdAt?: string;
}

// 识别
export interface RecognitionResult {
  success: boolean;
  data: {
    name: string;
    manufacturer?: string;
    specification?: string;
    category?: string;
    dosage?: string;
    daysToExpiry?: number;
    expiryDate?: string;
    barcode?: string;
    traceCode?: string;
  };
}

export interface RecognitionHistory {
  id: number;
  type: 'barcode' | 'image';
  inputData: string;
  result: any;
  isAdded: boolean;
  createdAt: string;
}

// 通知
export interface SubscriptionInfo {
  templateType: string;
  isActive: boolean;
  subscribedAt: string;
}

export interface NotificationSettings {
  reminderTime: number;
  expiryWarningDays: number;
}

// 统计
export interface FamilyStatistics {
  memberCount: number;
  medicineCount: number;
  planCount: number;
  familyMemberCount: number;
  expiringCount?: number;
  expiredCount?: number;
}

// 同步
export interface SyncSnapshot {
  medicines: Medicine[];
  plans: Plan[];
  familyMembers: FamilyMemberRow[];
  serverTime: string;
}

// Token
export interface LoginResult {
  token: string;
  refreshToken: string;
  userId: number;
  openid: string;
  hasFamily: boolean;
  families: FamilyInfo[];
  isNewUser?: boolean;
}
