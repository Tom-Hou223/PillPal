import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Input, Button } from '@tarojs/components';
import { authApi, API_BASE_URL } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { safeName } from '../../utils/date';
import './profile.scss';

const Profile: React.FC = () => {
  const { isLoggedIn, isGuestMode, loadFromStorage, fetchProfile } = useUserStore();

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [formData, setFormData] = useState({
    nickname: '',
    avatarUrl: '',
    phone: '',
  });
  const [tempAvatarPath, setTempAvatarPath] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight || 0);
      },
    });
    loadFromStorage();
    loadUserInfo();
  }, []);

  const loadUserInfo = useCallback(() => {
    const state = useUserStore.getState();
    if (state.isGuestMode) {
      setFormData({ nickname: '', avatarUrl: '', phone: '' });
      return;
    }

    Taro.showLoading({ title: '加载中...', mask: true });

    authApi.getProfile().then((res) => {
      Taro.hideLoading();

      if (res.code === 0) {
        const userInfo: any = res.data;

        let avatarUrl = userInfo.avatarUrl || '';
        if (avatarUrl) {
          const serverBaseUrl = API_BASE_URL.replace('/api', '');
          if (avatarUrl.startsWith('/uploads/') || avatarUrl.startsWith('uploads/')) {
            avatarUrl = avatarUrl.startsWith('/') ? avatarUrl : '/' + avatarUrl;
            avatarUrl = serverBaseUrl + avatarUrl;
          } else if (!avatarUrl.startsWith('http://') && !avatarUrl.startsWith('https://')) {
            avatarUrl = serverBaseUrl + '/' + avatarUrl;
          }
        }

        setFormData({
          nickname: safeName(userInfo.nickname),
          avatarUrl: avatarUrl,
          phone: userInfo.phone || '',
        });
      }
    }).catch(() => {
      Taro.hideLoading();
      Taro.showToast({ title: '加载用户信息失败', icon: 'none' });
    });
  }, []);

  const onNicknameInput = (e: any) => {
    setFormData((prev) => ({ ...prev, nickname: e.detail.value || e.detail }));
  };

  const onPhoneInput = (e: any) => {
    setFormData((prev) => ({ ...prev, phone: e.detail.value || e.detail }));
  };

  const onAvatarUpload = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        setTempAvatarPath(tempFilePath);
        Taro.showToast({ title: '头像已选择', icon: 'success' });
      },
      fail: () => {
        Taro.showToast({ title: '选择头像失败', icon: 'none' });
      },
    });
  };

  const uploadAvatar = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const token = Taro.getStorageSync('token');
      if (!token) {
        reject(new Error('未登录'));
        return;
      }

      console.log('开始上传头像:', filePath);
      Taro.uploadFile({
        url: `${API_BASE_URL}/auth/upload-avatar`,
        filePath,
        name: 'avatar',
        header: { Authorization: `Bearer ${token}` },
        success: (res) => {
          console.log('上传响应:', res);
          try {
            const data = JSON.parse(res.data);
            console.log('解析后的响应:', data);
            
            // 正确解析响应，支持可能的嵌套结构
            let actualData = data;
            if (data.code === 0 && data.data) {
              actualData = data.data;
              // 支持 { data: { success: true, data: ... } } 的嵌套格式
              if (actualData.success && actualData.data) {
                actualData = actualData.data;
              }
            }
            
            if (data.code === 0 && actualData.avatarUrl) {
              console.log('解析到的头像 URL:', actualData.avatarUrl);
              resolve(actualData.avatarUrl);
            } else {
              reject(new Error(data.message || '上传失败'));
            }
          } catch (e) {
            console.error('解析响应失败:', e);
            reject(new Error('解析响应失败'));
          }
        },
        fail: (err) => {
          console.error('上传失败:', err);
          reject(new Error('上传头像失败'));
        },
      });
    });
  };

  const updateUserProfile = (data: any) => {
    return authApi.updateProfile(data);
  };

  const onSave = () => {
    const { nickname, phone } = formData;

    if (!nickname || !nickname.trim()) {
      Taro.showToast({ title: '请输入昵称', icon: 'none' });
      return;
    }

    if (phone && phone.trim()) {
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(phone.trim())) {
        Taro.showToast({ title: '手机号格式不正确', icon: 'none' });
        return;
      }
    }

    setSaving(true);
    Taro.showLoading({ title: '保存中...', mask: true });

    const saveAndGoBack = () => {
      Taro.hideLoading();
      setSaving(false);
      Taro.showToast({ title: '保存成功', icon: 'success' });
      // 重新获取用户信息，确保数据是最新的
      fetchProfile();
      setTimeout(() => {
        Taro.navigateBack();
      }, 1000);
    };

    if (tempAvatarPath) {
      uploadAvatar(tempAvatarPath).then((avatarUrl) => {
        console.log('上传成功，得到的 URL:', avatarUrl);
        const serverBaseUrl = API_BASE_URL.replace('/api', '');
        const fullAvatarUrl = serverBaseUrl + avatarUrl + '?t=' + Date.now();
        console.log('完整的头像 URL:', fullAvatarUrl);

        return updateUserProfile({
          nickname: nickname.trim(),
          avatarUrl: avatarUrl,
          phone: phone ? phone.trim() : '',
        }).then(() => {
          console.log('更新用户信息成功');
          setFormData((prev) => ({ ...prev, avatarUrl: fullAvatarUrl }));
          // 清空临时路径
          setTempAvatarPath('');
        });
      }).then(saveAndGoBack).catch((error: any) => {
        console.error('保存头像失败:', error);
        Taro.hideLoading();
        setSaving(false);
        Taro.showToast({ title: error.message || '保存失败', icon: 'none' });
      });
    } else {
      updateUserProfile({
        nickname: nickname.trim(),
        phone: phone ? phone.trim() : '',
      }).then(saveAndGoBack).catch((error: any) => {
        console.error('保存失败:', error);
        Taro.hideLoading();
        setSaving(false);
        Taro.showToast({ title: error.message || '保存失败', icon: 'none' });
      });
    }
  };

  const displayAvatar = tempAvatarPath || formData.avatarUrl || '';

  return (
    <View
      className="profile-container"
      style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 32rpx)` }}
    >
      {/* Avatar section */}
      <View className="avatar-section">
        <View className="avatar-wrapper">
          <View className="avatar" onClick={onAvatarUpload}>
            {displayAvatar ? (
              <Image src={displayAvatar} mode="aspectFill" className="avatar-image" />
            ) : (
              <View className="avatar-placeholder">
                <Text className="avatar-placeholder-icon">👤</Text>
              </View>
            )}
            <View className="avatar-mask">
              <Text className="avatar-mask-text">点击更换</Text>
            </View>
          </View>
          <Button className="avatar-upload-btn" size="mini" onClick={onAvatarUpload}>
            更换头像
          </Button>
        </View>
      </View>

      {/* Form section */}
      <View className="form-section">
        <View className="form-item">
          <Text className="form-label">昵称</Text>
          <Input
            className="form-input"
            placeholder="请输入昵称"
            value={formData.nickname}
            onInput={onNicknameInput}
          />
        </View>

        <View className="form-item">
          <Text className="form-label">手机号</Text>
          <Input
            className="form-input"
            type="number"
            placeholder="请输入手机号"
            value={formData.phone}
            onInput={onPhoneInput}
            maxlength={11}
          />
        </View>
      </View>

      {/* Actions */}
      <View className="actions">
        <Button
          className="save-button"
          loading={saving}
          disabled={saving}
          onClick={onSave}
        >
          保存
        </Button>
      </View>
    </View>
  );
};

export default Profile;
