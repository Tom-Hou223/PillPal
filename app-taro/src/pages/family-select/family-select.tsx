import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Input, Button, ScrollView } from '@tarojs/components';
import { familiesApi, FamilyManager } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import type { FamilyInfo } from '../../types/api';
import './family-select.scss';

const FamilySelect: React.FC = () => {
  const { setCurrentFamily } = useUserStore();

  const [families, setFamilies] = useState<FamilyInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    const systemInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight || 0);
    loadFamilies();
  }, []);

  const loadFamilies = useCallback(async () => {
    setLoading(true);

    try {
      const res = await familiesApi.getMy();
      if (res.code === 0) {
        setFamilies(res.data || []);
      }
    } catch {
      Taro.showToast({ title: '加载失败', icon: 'none' });
    }
    setLoading(false);
  }, []);

  const selectFamily = (family: FamilyInfo) => {
    FamilyManager.setCurrentFamily(family);
    setCurrentFamily(family);

    // Clear cached data
    Taro.removeStorageSync('cache_medicines');
    Taro.removeStorageSync('cache_plans');
    Taro.removeStorageSync('cache_familyMembers');
    Taro.removeStorageSync('cache_records');

    Taro.showToast({ title: `已切换到${family.name}`, icon: 'success' });

    setTimeout(() => {
      Taro.switchTab({ url: '/pages/index/index' });
    }, 1500);
  };

  const onFamilyTap = (family: FamilyInfo) => {
    selectFamily(family);
  };

  // Create family
  const showCreateDialogFn = () => {
    setShowCreateDialog(true);
    setFamilyName('');
  };

  const hideCreateDialog = () => {
    setShowCreateDialog(false);
  };

  const onFamilyNameInput = (e: any) => {
    setFamilyName(e.detail.value || e.detail || '');
  };

  const onCreateFamily = async () => {
    if (!familyName || familyName.trim() === '') {
      Taro.showToast({ title: '请输入家庭名称', icon: 'none' });
      return;
    }

    Taro.showLoading({ title: '创建中...', mask: true });

    try {
      const res = await familiesApi.create(familyName.trim());
      Taro.hideLoading();

      if (res.code === 0) {
        Taro.showToast({ title: '创建成功', icon: 'success' });
        hideCreateDialog();

        setTimeout(() => {
          const family = res.data as FamilyInfo;
          selectFamily(family);
        }, 1500);
      } else {
        Taro.showToast({ title: res.message || '创建失败', icon: 'none' });
      }
    } catch (error: any) {
      Taro.hideLoading();
      Taro.showToast({ title: error.message || '创建失败', icon: 'none' });
    }
  };

  // Join family
  const showJoinDialogFn = () => {
    setShowJoinDialog(true);
    setInviteCode('');
  };

  const hideJoinDialog = () => {
    setShowJoinDialog(false);
  };

  const onInviteCodeInput = (e: any) => {
    const val = e.detail.value || e.detail || '';
    setInviteCode(val.toUpperCase());
  };

  const onJoinFamily = async () => {
    if (!inviteCode || inviteCode.trim() === '') {
      Taro.showToast({ title: '请输入邀请码', icon: 'none' });
      return;
    }

    Taro.showLoading({ title: '加入中...', mask: true });

    try {
      const res = await familiesApi.join(inviteCode.trim());
      Taro.hideLoading();

      if (res.code === 0) {
        Taro.showToast({ title: '加入成功', icon: 'success' });
        hideJoinDialog();

        setTimeout(() => {
          loadFamilies();
        }, 1500);
      } else {
        Taro.showToast({ title: res.message || '加入失败', icon: 'none' });
      }
    } catch (error: any) {
      Taro.hideLoading();
      Taro.showToast({ title: error.message || '加入失败', icon: 'none' });
    }
  };

  return (
    <View
      className="container"
      style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx)` }}
    >
      <View className="content">
        {/* Loading */}
        {loading && (
          <View className="loading-container">
            <Text>加载中...</Text>
          </View>
        )}

        {/* Family list */}
        {!loading && families.length > 0 && (
          <View className="family-list">
            <View className="section-title">我的家庭</View>
            {families.map((item) => (
              <View
                key={item.id}
                className="family-item"
                onClick={() => onFamilyTap(item)}
              >
                <View className="family-info">
                  <View className="family-name">🏡{item.name}</View>
                </View>
                <Text className="family-arrow">&gt;</Text>
              </View>
            ))}
          </View>
        )}

        {/* Empty state */}
        {!loading && families.length === 0 && (
          <View className="empty-container">
            <Text className="empty-text">还没有加入任何家庭</Text>
            <View className="empty-tips">创建或加入一个家庭，开始管理药品</View>
          </View>
        )}

        {/* Action buttons */}
        <View className="action-buttons">
          <Button className="action-btn create-btn" onClick={showCreateDialogFn}>
            创建家庭
          </Button>
          <Button className="action-btn join-btn" onClick={showJoinDialogFn}>
            加入家庭
          </Button>
        </View>
      </View>

      {/* Create Family Dialog */}
      {showCreateDialog && (
        <View className="dialog-overlay" onClick={hideCreateDialog}>
          <View className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-title">创建家庭</View>
            <View className="dialog-body">
              <Input
                className="dialog-input"
                placeholder="请输入家庭名称"
                value={familyName}
                onInput={onFamilyNameInput}
                maxlength={20}
              />
            </View>
            <View className="dialog-buttons">
              <Button className="dialog-btn cancel" onClick={hideCreateDialog}>取消</Button>
              <Button className="dialog-btn confirm" onClick={onCreateFamily}>创建</Button>
            </View>
          </View>
        </View>
      )}

      {/* Join Family Dialog */}
      {showJoinDialog && (
        <View className="dialog-overlay" onClick={hideJoinDialog}>
          <View className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-title">加入家庭</View>
            <View className="dialog-body">
              <Input
                className="dialog-input"
                placeholder="请输入邀请码"
                value={inviteCode}
                onInput={onInviteCodeInput}
                maxlength={20}
              />
              <View className="dialog-tips">请向家庭管理员获取邀请码</View>
            </View>
            <View className="dialog-buttons">
              <Button className="dialog-btn cancel" onClick={hideJoinDialog}>取消</Button>
              <Button className="dialog-btn confirm" onClick={onJoinFamily}>加入</Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default FamilySelect;
