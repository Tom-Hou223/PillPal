import Taro from '@tarojs/taro';
import type { ApiResponse, LoginResult } from '../types/api';

// 后端地址 - 修改为你的后端地址
const API_BASE_URL = 'http://192.168.31.90:3001/api';

// ====================== Token 管理 ======================
class TokenManager {
  static getToken(): string {
    return Taro.getStorageSync('token') || '';
  }

  static setToken(token: string): void {
    Taro.setStorageSync('token', token);
  }

  static clearToken(): void {
    Taro.removeStorageSync('token');
  }

  static getRefreshToken(): string {
    return Taro.getStorageSync('refreshToken') || '';
  }

  static setRefreshToken(token: string): void {
    Taro.setStorageSync('refreshToken', token);
  }

  static clearRefreshToken(): void {
    Taro.removeStorageSync('refreshToken');
  }
}

// ====================== 家庭管理 ======================
class FamilyManager {
  static getCurrentFamilyId(): string {
    return Taro.getStorageSync('currentFamilyId') || '';
  }

  static setCurrentFamilyId(familyId: string): void {
    Taro.setStorageSync('currentFamilyId', familyId);
  }

  static getCurrentFamily(): any {
    return Taro.getStorageSync('currentFamily') || null;
  }

  static setCurrentFamily(family: any): void {
    Taro.setStorageSync('currentFamily', family);
    if (family && family.id) {
      this.setCurrentFamilyId(String(family.id));
    }
  }

  static clearCurrentFamily(): void {
    Taro.removeStorageSync('currentFamilyId');
    Taro.removeStorageSync('currentFamily');
  }

  static isAdmin(): boolean {
    const family = this.getCurrentFamily();
    return family ? family.role === 'admin' : false;
  }
}

// ====================== 用户管理 ======================
class UserManager {
  static getUser(): any {
    return Taro.getStorageSync('user') || null;
  }

  static setUser(user: any): void {
    Taro.setStorageSync('user', user);
  }

  static clearUser(): void {
    Taro.removeStorageSync('user');
  }

  static getCurrentMode(): { isLoggedIn: boolean; isGuestMode: boolean } {
    const token = TokenManager.getToken();
    const isLoggedIn = !!token;
    return { isLoggedIn, isGuestMode: !isLoggedIn };
  }
}

// ====================== 请求封装 ======================
function getMockData(url: string): any {
  // 药品列表
  if (url === '/medicine/list') {
    return { code: 0, data: [
      { id: 5001, familyId: 2001, name: '阿莫西林胶囊', manufacturer: '华北制药', specification: '0.25g*24粒', category: '抗生素', stock: 10, unit: '盒', dosage: '每次2粒，每日3次，饭后服用', expiryDate: '2026-12-31', status: 'normal', daysToExpiry: 230 },
      { id: 5002, familyId: 2001, name: '布洛芬缓释胶囊', manufacturer: '中美天津史克', specification: '0.3g*12粒', category: '止痛药', stock: 5, unit: '盒', dosage: '每次1粒，每日2次，疼痛时服用', expiryDate: '2026-06-30', status: 'expiring', daysToExpiry: 47 },
      { id: 5003, familyId: 2001, name: '维生素C片', manufacturer: '华北制药', specification: '0.1g*100片', category: '维生素', stock: 20, unit: '瓶', dosage: '每次1片，每日1次，口服', expiryDate: '2027-06-30', status: 'normal', daysToExpiry: 412 },
      { id: 5004, familyId: 2001, name: '感冒清热颗粒', manufacturer: '北京同仁堂', specification: '10g*10袋', category: '感冒药', stock: 15, unit: '盒', dosage: '每次1袋，每日3次，开水冲服', expiryDate: '2026-09-30', status: 'normal', daysToExpiry: 139 },
      { id: 5005, familyId: 2001, name: '创可贴', manufacturer: '云南白药', specification: '100片/盒', category: '医疗器械', stock: 50, unit: '盒', dosage: '按需使用，外用', expiryDate: '2027-12-31', status: 'normal', daysToExpiry: 596 },
    ]};
  }
  // 计划列表
  if (url === '/plan/list') {
    return { code: 0, data: [
      { id: 6001, familyId: 2001, medicineName: '阿莫西林胶囊', memberName: '张三', frequency: '每日3次', timeSlots: ['08:00','12:00','18:00'], status: 'active', startDate: '2026-05-01', endDate: '2026-05-14' },
      { id: 6002, familyId: 2001, medicineName: '维生素C片', memberName: '张三', frequency: '每日1次', timeSlots: ['08:30'], status: 'active', startDate: '2026-03-01', endDate: '2026-12-31' },
    ]};
  }
  // 家庭成员
  if (url === '/family/list') {
    return { code: 0, data: [
      { id: 4001, familyId: 2001, name: '张三', relationship: '本人', age: 35 },
      { id: 4002, familyId: 2001, name: '李四', relationship: '配偶', age: 33 },
    ]};
  }
  // 家庭列表
  if (url === '/families/my') {
    return { code: 0, data: [{ id: 2001, name: '我的家庭', role: 'admin', memberCount: 2 }]};
  }
  // 家庭成员 (families members)
  if (url.includes('/families/') && url.includes('/members') && !url.includes('/role') && !url.includes('/relationship')) {
    return { code: 0, data: [
      { userId: 1001, nickname: '张三', role: 'admin', relationship: 'self' },
      { userId: 1002, nickname: '李四', role: 'member', relationship: 'spouse' },
    ]};
  }
  // 关系规则
  if (url === '/families/relationship-rules') {
    return { code: 0, data: [
      { id:1, relationship:'self', maxCount:1, description:'本人' },
      { id:2, relationship:'spouse', maxCount:1, description:'配偶' },
      { id:3, relationship:'other', maxCount:null, description:'其他' },
    ]};
  }
  // 用药记录
  if (url.startsWith('/records')) {
    const today = new Date().toISOString().split('T')[0];
    return { code: 0, data: [
      { id: 7001, planId: 6001, medicineName: '阿莫西林胶囊', memberName: '张三', time: '08:00', date: today, status: 'completed' },
      { id: 7002, planId: 6001, medicineName: '阿莫西林胶囊', memberName: '张三', time: '12:00', date: today, status: 'pending' },
    ]};
  }
  // 识别历史
  if (url.includes('/medicine/recognize/history')) {
    return { code: 0, data: { items: [], total: 0, page: 1, limit: 20, totalPages: 0 }};
  }
  // 统计
  if (url === '/sync/statistics') {
    return { code: 0, data: { medicineCount: 5, planCount: 2, memberCount: 2, familyMemberCount: 2, expiringCount: 1, expiredCount: 0 }};
  }
  // 通知设置
  if (url === '/notifications/settings') {
    return { code: 0, data: { reminderTime: 15, expiryWarningDays: 30 }};
  }
  // 订阅状态
  if (url === '/notifications/subscriptions') {
    return { code: 0, data: { subscriptions: [], templates: {} }};
  }
  // 同步数据
  if (url === '/sync/full') {
    return { code: 0, data: { medicines: [], plans: [], familyMembers: [], serverTime: new Date().toISOString() }};
  }
  return null;
}

async function request<T = any>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
  options?: { header?: any; silent?: boolean },
): Promise<ApiResponse<T>> {
  const token = TokenManager.getToken();
  const familyId = FamilyManager.getCurrentFamilyId();

  // 需要认证的路径，但没有token → 返回mock数据
  const authPaths = ['/auth/', '/families/'];
  const needAuth = !authPaths.some(p => url.startsWith(p));
  if (needAuth && !token && method === 'GET') {
    const mock = getMockData(url);
    if (mock) return mock as ApiResponse<T>;
  }

  const header: any = {
    'Content-Type': 'application/json',
    ...(options?.header || {}),
  };

  if (token) header['Authorization'] = `Bearer ${token}`;
  if (familyId) header['x-family-id'] = String(familyId);

  try {
    const res = await Taro.request({
      url: `${API_BASE_URL}${url}`,
      method,
      data,
      header,
    });

    if (res.statusCode === 401) {
      const refreshToken = TokenManager.getRefreshToken();
      if (refreshToken) {
        try {
          const refreshRes = await Taro.request({
            url: `${API_BASE_URL}/auth/refresh`,
            method: 'POST',
            data: { refreshToken },
            header: { 'Content-Type': 'application/json' },
          });
          if (refreshRes.statusCode === 200 && refreshRes.data?.data?.accessToken) {
            TokenManager.setToken(refreshRes.data.data.accessToken);
            return request<T>(url, method, data, options);
          }
        } catch { /* ignore */ }
      }
      // 返回mock数据兜底
      if (method === 'GET') {
        const mock = getMockData(url);
        if (mock) return mock as ApiResponse<T>;
      }
      TokenManager.clearToken();
      UserManager.clearUser();
      Taro.setStorageSync('isLoggedIn', false);
      throw new Error('登录已过期，请重新登录');
    }

    if (res.statusCode >= 400) {
      const body = res.data as any;
      const backendMsg = body?.message || body?.error || body?.msg || '';
      const errMsg = backendMsg || `请求失败 (${res.statusCode})`;
      if (!options?.silent) {
        Taro.showToast({ title: errMsg, icon: 'none', duration: 3000 });
      }
      throw new Error(errMsg);
    }

    return res.data as ApiResponse<T>;
  } catch (error: any) {
    // GET请求失败时返回mock数据
    if (method === 'GET') {
      const mock = getMockData(url);
      if (mock) return mock as ApiResponse<T>;
    }
    if (!options?.silent) {
      Taro.showToast({ title: error.message || '网络请求失败', icon: 'none', duration: 2000 });
    }
    throw error;
  }
}

// ====================== 导出 ======================
export { TokenManager, FamilyManager, UserManager, request, API_BASE_URL };

// ====================== API 方法 ======================

// Auth
export const authApi = {
  loginByPhone: (phone: string, password?: string) =>
    request<LoginResult>('/auth/login-by-phone', 'POST', { phone, password }),

  loginByNickname: (nickname: string, password?: string) =>
    request<LoginResult>('/auth/login-by-nickname', 'POST', { nickname, password }),

  wxLogin: (code: string, userInfo?: any) =>
    request<LoginResult>('/auth/login', 'POST', { code, userInfo }),

  getProfile: () => request('/auth/profile', 'GET'),

  updateProfile: (data: any) => request('/auth/profile', 'PUT', data),

  uploadAvatar: (filePath: string) =>
    new Promise((resolve, reject) => {
      Taro.uploadFile({
        url: `${API_BASE_URL}/auth/upload-avatar`,
        filePath,
        name: 'avatar',
        header: { Authorization: `Bearer ${TokenManager.getToken()}` },
        success: (res) => resolve(JSON.parse(res.data)),
        fail: reject,
      });
    }),

  refreshToken: (refreshToken: string) =>
    request<{ accessToken: string }>('/auth/refresh', 'POST', { refreshToken }),

  logout: () => request('/auth/logout', 'POST'),
};

// Families
export const familiesApi = {
  create: (name: string) => request('/families/create', 'POST', { name }),

  getMy: () => request('/families/my', 'GET'),

  getRelationshipRules: () => request('/families/relationship-rules', 'GET'),

  getDetail: (familyId: string) => request(`/families/${familyId}`, 'GET'),

  update: (familyId: string, name: string) =>
    request(`/families/${familyId}`, 'PUT', { name }),

  delete: (familyId: string) => request(`/families/${familyId}`, 'DELETE'),

  generateInviteCode: (familyId: string) =>
    request(`/families/${familyId}/invite`, 'POST'),

  join: (inviteCode: string) =>
    request('/families/join', 'POST', { inviteCode }),

  getMembers: (familyId: string) =>
    request(`/families/${familyId}/members`, 'GET'),

  updateMemberRole: (familyId: string, userId: string, role: string) =>
    request(`/families/${familyId}/members/${userId}/role`, 'PUT', { role }),

  removeMember: (familyId: string, userId: string) =>
    request(`/families/${familyId}/members/${userId}`, 'DELETE'),

  leaveFamily: (familyId: string) =>
    request(`/families/${familyId}/leave`, 'POST'),

  addMemberByPhone: (familyId: string, phone: string, relationship: string) =>
    request(`/families/${familyId}/members/add-by-phone`, 'POST', { phone, relationship }),

  updateMemberRelationship: (familyId: string, userId: string, relationship: string) =>
    request(`/families/${familyId}/members/${userId}/relationship`, 'PUT', { relationship }),
};

// Family Members
export const familyApi = {
  getList: () => request('/family/list', 'GET'),

  add: (data: { name: string; relationship?: string; age?: number }) =>
    request('/family/add', 'POST', data),

  update: (id: number, data: { name: string; relationship?: string; age?: number }) =>
    request(`/family/update/${id}`, 'PUT', data),

  delete: (id: number) => request(`/family/delete/${id}`, 'DELETE'),
};

// Medicine
export const medicineApi = {
  getList: () => request('/medicine/list', 'GET'),

  add: (data: any) => request('/medicine/add', 'POST', data),

  update: (id: number, data: any) => request(`/medicine/update/${id}`, 'PUT', data),

  delete: (id: number) => request(`/medicine/delete/${id}`, 'DELETE'),

  recognizeBarcode: (barcode: string) =>
    request('/medicine/recognize/barcode', 'POST', { barcode }),

  recognizeImage: (filePath: string) =>
    new Promise((resolve, reject) => {
      console.log('[API] 图片识别开始，路径:', filePath);
      const header: any = {};
      const token = TokenManager.getToken();
      const familyId = FamilyManager.getCurrentFamilyId();
      console.log('[API] Token:', token ? '有' : '无');
      console.log('[API] FamilyId:', familyId);
      if (token) header['Authorization'] = `Bearer ${token}`;
      if (familyId) header['x-family-id'] = String(familyId);
      console.log('[API] 上传地址:', `${API_BASE_URL}/medicine/recognize/image`);
      Taro.uploadFile({
        url: `${API_BASE_URL}/medicine/recognize/image`,
        filePath,
        name: 'image',
        header,
        success: (res) => {
          console.log('[API] 上传成功，响应:', res);
          try { 
            const data = JSON.parse(res.data);
            console.log('[API] 解析后数据:', data);
            resolve(data); 
          } catch (e) { 
            console.error('[API] 解析响应失败:', e);
            reject(new Error('解析响应失败')); 
          }
        },
        fail: (err) => {
          console.error('[API] 上传失败:', err);
          reject(err);
        },
      });
    }),

  getRecognitionHistory: (page = 1, limit = 20) =>
    request(`/medicine/recognize/history?page=${page}&limit=${limit}`, 'GET'),
};

// Plans
export const planApi = {
  getList: () => request('/plan/list', 'GET'),

  create: (data: any) => request('/plan/create', 'POST', data),

  update: (id: number, data: any) => request(`/plan/update/${id}`, 'PUT', data),

  delete: (id: number) => request(`/plan/delete/${id}`, 'DELETE'),
};

// Records
export const recordsApi = {
  getList: (date?: string) =>
    request(`/records${date ? `?date=${date}` : ''}`, 'GET'),

  complete: (id: number) => request(`/records/complete/${id}`, 'POST'),

  miss: (id: number) => request(`/records/miss/${id}`, 'POST'),

  add: (data: any) => request('/records/add', 'POST', data),
};

// Notifications
export const notificationsApi = {
  subscribe: (templateType: string) =>
    request('/notifications/subscribe', 'POST', { templateType }),

  unsubscribe: (templateType: string) =>
    request(`/notifications/unsubscribe/${templateType}`, 'DELETE'),

  getSubscriptions: () => request('/notifications/subscriptions', 'GET'),

  saveSettings: (data: { reminderTime?: number; expiryWarningDays?: number }) =>
    request('/notifications/settings', 'POST', data),

  getSettings: () => request('/notifications/settings', 'GET'),
};

// Sync
export const syncApi = {
  getChanges: (lastSyncTime?: string) =>
    request(`/sync/changes${lastSyncTime ? `?lastSyncTime=${lastSyncTime}` : ''}`, 'GET'),

  getFull: () => request('/sync/full', 'GET'),

  getStatistics: () => request('/sync/statistics', 'GET'),
};
