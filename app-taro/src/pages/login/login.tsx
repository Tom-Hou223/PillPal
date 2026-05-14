import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Input, Button, Checkbox } from '@tarojs/components';
import { authApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import type { LoginResult } from '../../types/api';
import './login.scss';

const Login: React.FC = () => {
  const { isLoggedIn, setLoggedIn, setCurrentFamily } = useUserStore();

  const [activeTab, setActiveTab] = useState<'phone' | 'account'>('phone');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  // Check login status on mount
  useEffect(() => {
    const systemInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight || 0);
    checkLoginStatus();
    loadRememberedCredentials();
  }, []);

  const checkLoginStatus = useCallback(() => {
    if (isLoggedIn) {
      Taro.switchTab({ url: '/pages/index/index' });
    }
  }, [isLoggedIn]);

  const loadRememberedCredentials = () => {
    const remembered = Taro.getStorageSync('rememberedCredentials');
    if (remembered) {
      setPhone(remembered.phone || '');
      setPassword(remembered.password || '');
      setRememberMe(true);
    }
  };

  // Validation
  const validatePhone = (value: string): boolean => {
    if (!value || value.trim() === '') {
      setPhoneError('');
      return false;
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(value.trim())) {
      setPhoneError('请输入正确的手机号');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateNickname = (value: string): boolean => {
    if (!value || value.trim() === '') {
      setNicknameError('');
      return false;
    }
    if (value.length < 2 || value.length > 20) {
      setNicknameError('昵称长度应在2-20个字符之间');
      return false;
    }
    setNicknameError('');
    return true;
  };

  const validatePassword = (value: string): boolean => {
    if (!value || value.trim() === '') {
      setPasswordError('');
      return false;
    }
    if (value.length < 6 || value.length > 20) {
      setPasswordError('密码长度应在6-20个字符之间');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Input handlers
  const onPhoneInput = (e: any) => {
    const val = e.detail.value || e.detail || '';
    setPhone(val);
    validatePhone(val);
  };

  const onNicknameInput = (e: any) => {
    const val = e.detail.value || e.detail || '';
    setNickname(val);
    validateNickname(val);
  };

  const onPasswordInput = (e: any) => {
    const val = e.detail.value || e.detail || '';
    setPassword(val);
    validatePassword(val);
  };

  const handleLoginSuccess = (loginData: LoginResult) => {
    setLoading(false);
    Taro.hideLoading();

    // Save remembered credentials
    if (rememberMe) {
      Taro.setStorageSync('rememberedCredentials', {
        phone: activeTab === 'phone' ? phone.trim() : '',
        password,
      });
    } else {
      Taro.removeStorageSync('rememberedCredentials');
    }

    // Persist login state
    setLoggedIn(loginData.token, loginData.refreshToken, {
      id: loginData.userId,
      openid: loginData.openid,
      families: loginData.families,
    });

    Taro.showToast({ title: '登录成功', icon: 'success' });

    const currentFamily = Taro.getStorageSync('currentFamily');
    const hasFamilies = loginData.hasFamily && loginData.families && loginData.families.length > 0;

    setTimeout(() => {
      if (!currentFamily || !currentFamily.id) {
        if (hasFamilies) {
          Taro.redirectTo({ url: '/pages/family-select/family-select' });
        } else {
          Taro.switchTab({ url: '/pages/index/index' });
        }
      } else {
        Taro.switchTab({ url: '/pages/index/index' });
      }
    }, 1500);
  };

  const handleLoginError = (error: any) => {
    setLoading(false);
    Taro.hideLoading();
    Taro.showToast({
      title: '登录失败，请检查账号密码或网络连接',
      icon: 'none',
    });
  };

  // Phone/Nickname login
  const onLogin = () => {
    let isValid = false;
    if (activeTab === 'phone') {
      isValid = validatePhone(phone) && validatePassword(password);
    } else {
      isValid = validateNickname(nickname) && validatePassword(password);
    }
    if (!isValid) return;

    setLoading(true);
    Taro.showLoading({ title: '登录中...', mask: true });

    const loginPromise =
      activeTab === 'phone'
        ? authApi.loginByPhone(phone.trim(), password)
        : authApi.loginByNickname(nickname.trim(), password);

    loginPromise.then((res) => {
      if (res.code === 0) {
        handleLoginSuccess(res.data as LoginResult);
      } else {
        Taro.hideLoading();
        setLoading(false);
        Taro.showToast({ title: res.message || '登录失败', icon: 'none' });
      }
    }).catch(handleLoginError);
  };

  // WeChat login
  const onWeChatLogin = async () => {
    setLoading(true);
    Taro.showLoading({ title: '登录中...', mask: true });

    try {
      const loginRes = await Taro.login();
      const res = await authApi.wxLogin(loginRes.code);

      Taro.hideLoading();

      if (res.code === 0) {
        const loginData = res.data as LoginResult;
        setLoggedIn(loginData.token, loginData.refreshToken, {
          id: loginData.userId,
          openid: loginData.openid,
          families: loginData.families,
        });

        Taro.showToast({ title: '登录成功', icon: 'success' });

        const currentFamily = Taro.getStorageSync('currentFamily');
        const hasFamilies = loginData.hasFamily && loginData.families && loginData.families.length > 0;

        setTimeout(() => {
          if (!currentFamily || !currentFamily.id) {
            if (hasFamilies) {
              Taro.redirectTo({ url: '/pages/family-select/family-select' });
            } else {
              Taro.switchTab({ url: '/pages/index/index' });
            }
          } else {
            Taro.switchTab({ url: '/pages/index/index' });
          }
        }, 1500);
      } else {
        Taro.showModal({
          title: '登录失败',
          content: res.message || '登录失败，请稍后重试',
          showCancel: false,
        });
        setLoading(false);
      }
    } catch (error: any) {
      Taro.hideLoading();
      Taro.showModal({
        title: '登录失败',
        content: error.message || '登录失败，请稍后重试',
        showCancel: false,
      });
      setLoading(false);
    }
  };

  // Guest mode
  const onGuestLogin = () => {
    Taro.showModal({
      title: '提示',
      content: '未登录模式下数据仅保存在本地，无法与家人共享。建议使用微信登录。',
      confirmText: '继续',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          useUserStore.getState().setGuestMode();
          Taro.switchTab({ url: '/pages/index/index' });
        }
      },
    });
  };

  const switchTab = (tab: 'phone' | 'account') => {
    setActiveTab(tab);
    setPhoneError('');
    setNicknameError('');
    setPasswordError('');
  };

  const navigateToRegister = () => {
    Taro.redirectTo({ url: '/pages/register/register' });
  };

  const onForgotPassword = () => {
    Taro.showToast({ title: '忘记密码功能开发中', icon: 'none' });
  };

  const onRememberChange = (e: any) => {
    setRememberMe(!!e.detail.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const showUserAgreement = () => {
    Taro.showModal({
      title: '用户协议',
      content: '欢迎使用medhome！本协议是您与medhome之间的法律协议。请您务必审慎阅读、充分理解本协议各条款内容...',
      showCancel: true,
      confirmText: '同意',
      cancelText: '取消',
    });
  };

  const showPrivacyPolicy = () => {
    Taro.showModal({
      title: '隐私政策',
      content: 'medhome致力于保护您的隐私。本政策描述了我们如何收集、使用、存储和保护您的个人信息...',
      showCancel: true,
      confirmText: '同意',
      cancelText: '取消',
    });
  };

  return (
    <View
      className="login-container"
      style={{ paddingTop: `calc(${statusBarHeight}px + 80rpx)` }}
    >
      <View className="login-card">
        <View className="card-header">
          <Text className="card-title">欢迎回来</Text>
          <Text className="card-subtitle">请登录您的账号</Text>
        </View>

        {/* Login tabs */}
        <View className="login-tabs">
          <View
            className={`tab ${activeTab === 'phone' ? 'active' : ''}`}
            style={
              activeTab === 'phone'
                ? { color: '#27AE60', borderBottom: '2rpx solid #27AE60' }
                : {}
            }
            onClick={() => switchTab('phone')}
          >
            手机号登录
          </View>
          <View
            className={`tab ${activeTab === 'account' ? 'active' : ''}`}
            style={
              activeTab === 'account'
                ? { color: '#27AE60', borderBottom: '2rpx solid #27AE60' }
                : {}
            }
            onClick={() => switchTab('account')}
          >
            昵称登录
          </View>
        </View>

        {/* Login form */}
        <View className="login-form">
          {activeTab === 'phone' && (
            <View className="form-group">
              <View className="field-wrapper">
                <Text className="field-icon">📱</Text>
                <Input
                  className="field-input"
                  type="number"
                  placeholder="请输入手机号"
                  value={phone}
                  onInput={onPhoneInput}
                  maxlength={11}
                />
              </View>
              {phoneError && <Text className="error-message">{phoneError}</Text>}
            </View>
          )}

          {activeTab === 'account' && (
            <View className="form-group">
              <View className="field-wrapper">
                <Text className="field-icon">👤</Text>
                <Input
                  className="field-input"
                  placeholder="请输入昵称"
                  value={nickname}
                  onInput={onNicknameInput}
                />
              </View>
              {nicknameError && <Text className="error-message">{nicknameError}</Text>}
            </View>
          )}

          <View className="form-group">
            <View className="field-wrapper">
              <Text className="field-icon">🔒</Text>
              <Input
                className="field-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="请输入密码"
                value={password}
                onInput={onPasswordInput}
              />
              <Text className="field-icon-right" onClick={togglePassword}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </Text>
            </View>
            {passwordError && <Text className="error-message">{passwordError}</Text>}
          </View>

          <View className="form-footer">
            <View className="remember-me">
              <Checkbox
                checked={rememberMe}
                onChange={onRememberChange}
                color="#27AE60"
              />
              <Text className="remember-text">记住我</Text>
            </View>
            <Text className="forgot-password" onClick={onForgotPassword}>
              忘记密码？
            </Text>
          </View>

          <Button
            className="login-button"
            loading={loading}
            disabled={loading}
            onClick={onLogin}
          >
            登录
          </Button>
        </View>

        {/* Divider */}
        <View className="divider">
          <Text>其他登录方式</Text>
        </View>

        {/* Action buttons */}
        <View className="button-group">
          <Button className="action-button wechat-login" onClick={onWeChatLogin}>
            <Text className="btn-icon">💚</Text>
            <Text>微信登录</Text>
          </Button>
          <View className="action-button register-button" onClick={navigateToRegister}>
            <Text className="btn-icon">👥</Text>
            <Text>立即注册</Text>
          </View>
        </View>

        {/* Guest mode */}
        <View className="action-button guest-button" onClick={onGuestLogin}>
          <Text className="btn-icon">👤</Text>
          <Text>未登录模式</Text>
          <Text className="guest-desc">无需登录，浏览示例数据</Text>
        </View>

        {/* Footer links */}
        <View className="footer">
          <Text>
            登录即表示同意
            <Text className="link" onClick={showUserAgreement}>
              《用户协议》
            </Text>
            和
            <Text className="link" onClick={showPrivacyPolicy}>
              《隐私政策》
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
