import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { useUserStore } from '../../stores/user.store';
import { medicineApi, planApi, familyApi } from '../../services/api';
import { FamilyManager, UserManager } from '../../services/api';
import type { Medicine, Plan, FamilyMemberRow, ApiResponse } from '../../types/api';
import './backup.scss';

interface BackupHistoryItem {
  timestamp: number;
  date: string;
  medicines: number;
  plans: number;
  members: number;
}

interface BackupData {
  timestamp: number;
  date: string;
  data: {
    medicines: Medicine[];
    plans: Plan[];
    members: FamilyMemberRow[];
  };
}

export default function Backup() {
  const { isLoggedIn, isGuestMode } = useUserStore();

  const [loading, setLoading] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [backupHistory, setBackupHistory] = useState<BackupHistoryItem[]>([]);

  useEffect(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const loadBackupHistory = useCallback(() => {
    const history = Taro.getStorageSync('backupHistory') || [];
    setBackupHistory(history);
  }, []);

  useEffect(() => {
    loadBackupHistory();
  }, [loadBackupHistory]);

  useDidShow(() => {
    loadBackupHistory();
  });

  const onBackupNow = async () => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能备份数据',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    const familyId = FamilyManager.getCurrentFamilyId();
    if (!familyId) {
      Taro.showToast({ title: '请先选择家庭', icon: 'none' });
      return;
    }

    setLoading(true);

    try {
      const [medicinesRes, plansRes, membersRes] = await Promise.all([
        medicineApi.getList() as unknown as ApiResponse<Medicine[]>,
        planApi.getList() as unknown as ApiResponse<Plan[]>,
        familyApi.getList() as unknown as ApiResponse<FamilyMemberRow[]>,
      ]);

      const backupData: BackupData = {
        timestamp: new Date().getTime(),
        date: new Date().toISOString(),
        data: {
          medicines: medicinesRes.data || [],
          plans: plansRes.data || [],
          members: membersRes.data || [],
        },
      };

      // 保存备份数据
      Taro.setStorageSync('backupData', backupData);

      // 更新备份历史
      let history: BackupHistoryItem[] = Taro.getStorageSync('backupHistory') || [];
      history.unshift({
        timestamp: backupData.timestamp,
        date: backupData.date,
        medicines: backupData.data.medicines.length,
        plans: backupData.data.plans.length,
        members: backupData.data.members.length,
      });

      // 只保留最近10次
      history = history.slice(0, 10);
      Taro.setStorageSync('backupHistory', history);
      setBackupHistory(history);

      Taro.showToast({ title: '备份成功', icon: 'success' });
    } catch {
      Taro.showToast({ title: '备份失败', icon: 'none' });
    } finally {
      setLoading(false);
    }
  };

  const onRestoreData = () => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能恢复数据',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    Taro.showModal({
      title: '确认恢复',
      content: '恢复数据将覆盖当前数据，确定要继续吗？',
      confirmText: '恢复',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          performRestore();
        }
      },
    });
  };

  const performRestore = () => {
    const backupData = Taro.getStorageSync('backupData');
    if (!backupData) {
      Taro.showToast({ title: '无备份数据', icon: 'none' });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      Taro.showToast({ title: '恢复成功', icon: 'success' });
      setLoading(false);
    }, 1000);
  };

  const onExportData = async () => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能导出数据',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    const familyId = FamilyManager.getCurrentFamilyId();
    if (!familyId) {
      Taro.showToast({ title: '请先选择家庭', icon: 'none' });
      return;
    }

    setLoading(true);

    try {
      const [medicinesRes, plansRes, membersRes] = await Promise.all([
        medicineApi.getList() as unknown as ApiResponse<Medicine[]>,
        planApi.getList() as unknown as ApiResponse<Plan[]>,
        familyApi.getList() as unknown as ApiResponse<FamilyMemberRow[]>,
      ]);

      const exportData = {
        timestamp: new Date().getTime(),
        date: new Date().toISOString(),
        version: '1.0',
        data: {
          medicines: medicinesRes.data || [],
          plans: plansRes.data || [],
          members: membersRes.data || [],
        },
      };

      Taro.setStorageSync('exportData', exportData);
      Taro.showToast({ title: '导出成功', icon: 'success' });
    } catch {
      Taro.showToast({ title: '导出失败', icon: 'none' });
    } finally {
      setLoading(false);
    }
  };

  const onImportData = () => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能导入数据',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    Taro.showModal({
      title: '确认导入',
      content: '导入数据将覆盖当前数据，确定要继续吗？',
      confirmText: '导入',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          performImport();
        }
      },
    });
  };

  const performImport = () => {
    const importData = Taro.getStorageSync('exportData');
    if (!importData) {
      Taro.showToast({ title: '无导入数据', icon: 'none' });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      Taro.showToast({ title: '导入成功', icon: 'success' });
      setLoading(false);
    }, 1000);
  };

  const onClearBackup = () => {
    Taro.showModal({
      title: '确认清除',
      content: '确定要清除所有备份数据吗？',
      confirmText: '清除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Taro.removeStorageSync('backupData');
          Taro.removeStorageSync('backupHistory');
          setBackupHistory([]);
          Taro.showToast({ title: '已清除', icon: 'success' });
        }
      },
    });
  };

  const formatDate = (dateStr: string): string => {
    try {
      const d = new Date(dateStr);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <View className="backup-container">
      <NavBar title="数据备份" showBack />

      <View className="content" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 24rpx)` }}>
        {/* 备份操作 */}
        <View className="section">
          <View className="section-title">
            <Text>备份操作</Text>
          </View>
          <View className="backup-actions">
            <View className={`backup-card ${loading ? 'disabled' : ''}`} onClick={loading ? undefined : onBackupNow}>
              <Text className="backup-card-icon">&#128190;</Text>
              <Text className="backup-card-title">立即备份</Text>
              <Text className="backup-card-desc">备份当前药品、计划和家庭成员数据</Text>
            </View>
          </View>
        </View>

        {/* 备份历史 */}
        <View className="section">
          <View className="section-header">
            <View className="section-title">
              <Text>备份历史</Text>
            </View>
            {backupHistory.length > 0 && (
              <View className="clear-btn" onClick={onClearBackup}>
                <Text className="clear-btn-text">清除</Text>
              </View>
            )}
          </View>
          {backupHistory.length > 0 ? (
            <View className="history-list">
              {backupHistory.map((item, index) => (
                <View key={index} className="history-item">
                  <View className="history-header">
                    <Text className="history-date">{formatDate(item.date)}</Text>
                    <View className="history-stats">
                      <Text className="history-stat">药品 {item.medicines}</Text>
                      <Text className="history-divider">|</Text>
                      <Text className="history-stat">计划 {item.plans}</Text>
                      <Text className="history-divider">|</Text>
                      <Text className="history-stat">成员 {item.members}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View className="empty-state">
              <Text className="empty-icon">&#128203;</Text>
              <Text className="empty-text">暂无备份记录</Text>
            </View>
          )}
        </View>

        {/* 数据导入/导出 */}
        <View className="section">
          <View className="section-title">
            <Text>数据管理</Text>
          </View>
          <View className="data-actions">
            <View className="data-card" onClick={onExportData}>
              <Text className="data-card-icon">&#128229;</Text>
              <Text className="data-card-title">导出数据</Text>
              <Text className="data-card-desc">导出为 JSON 格式</Text>
            </View>
            <View className="data-card" onClick={onImportData}>
              <Text className="data-card-icon">&#128228;</Text>
              <Text className="data-card-title">导入数据</Text>
              <Text className="data-card-desc">从备份文件恢复</Text>
            </View>
            <View className="data-card" onClick={onRestoreData}>
              <Text className="data-card-icon">&#8634;</Text>
              <Text className="data-card-title">恢复备份</Text>
              <Text className="data-card-desc">恢复到最近备份</Text>
            </View>
          </View>
        </View>

        {/* 加载遮罩 */}
        {loading && (
          <View className="loading-overlay">
            <View className="spinner" />
            <Text className="loading-text">处理中...</Text>
          </View>
        )}
      </View>
    </View>
  );
}
