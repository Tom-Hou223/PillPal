import { create } from 'zustand';
import Taro from '@tarojs/taro';
import { TokenManager, UserManager, FamilyManager, authApi } from '../services/api';
import type { UserProfile, FamilyInfo } from '../types/api';

interface UserState {
  isLoggedIn: boolean;
  isGuestMode: boolean;
  isSeniorMode: boolean;
  seniorTheme: 'white' | 'yellow';
  user: UserProfile | null;
  currentFamily: FamilyInfo | null;
  families: FamilyInfo[];

  setLoggedIn: (token: string, refreshToken: string, user: any) => void;
  setGuestMode: () => void;
  setSeniorMode: (mode: boolean) => void;
  setSeniorTheme: (theme: 'white' | 'yellow') => void;
  setCurrentFamily: (family: FamilyInfo | null) => void;
  setFamilies: (families: FamilyInfo[]) => void;
  logout: () => Promise<void>;
  loadFromStorage: () => void;
  fetchProfile: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  isLoggedIn: false,
  isGuestMode: true,
  isSeniorMode: Taro.getStorageSync('seniorMode') || false,
  seniorTheme: (Taro.getStorageSync('seniorTheme') as 'white' | 'yellow') || 'white',
  user: null,
  currentFamily: FamilyManager.getCurrentFamily(),
  families: [],

  setLoggedIn: (token, refreshToken, user) => {
    TokenManager.setToken(token);
    TokenManager.setRefreshToken(refreshToken);
    UserManager.setUser(user);
    Taro.setStorageSync('isLoggedIn', true);
    Taro.setStorageSync('isGuestMode', false);
    set({ isLoggedIn: true, isGuestMode: false, user });
  },

  setGuestMode: () => {
    TokenManager.clearToken();
    TokenManager.clearRefreshToken();
    UserManager.clearUser();
    FamilyManager.clearCurrentFamily();
    Taro.setStorageSync('isLoggedIn', false);
    Taro.setStorageSync('isGuestMode', true);
    set({ isLoggedIn: false, isGuestMode: true, user: null, currentFamily: null, families: [] });
  },

  setSeniorMode: (mode) => {
    Taro.setStorageSync('seniorMode', mode);
    set({ isSeniorMode: mode });
  },

  setSeniorTheme: (theme) => {
    Taro.setStorageSync('seniorTheme', theme);
    set({ seniorTheme: theme });
  },

  setCurrentFamily: (family) => {
    FamilyManager.setCurrentFamily(family);
    set({ currentFamily: family });
  },

  setFamilies: (families) => {
    set({ families });
  },

  logout: async () => {
    try {
      await authApi.logout();
    } catch {
      // ignore
    }
    get().setGuestMode();
  },

  loadFromStorage: () => {
    const token = TokenManager.getToken();
    const isLoggedIn = !!token;
    const isGuestMode = !isLoggedIn;
    const user = UserManager.getUser();
    const currentFamily = FamilyManager.getCurrentFamily();
    const isSeniorMode = Taro.getStorageSync('seniorMode') || false;
    const seniorTheme = Taro.getStorageSync('seniorTheme') || 'white';
    set({ isLoggedIn, isGuestMode, user, currentFamily, isSeniorMode, seniorTheme });
  },

  fetchProfile: async () => {
    try {
      const res = await authApi.getProfile();
      if (res.code === 0) {
        const profile = res.data as UserProfile;
        UserManager.setUser(profile);
        set({ user: profile, families: profile.families || [] });
      }
    } catch {
      // ignore
    }
  },
}));
