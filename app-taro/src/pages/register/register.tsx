import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Input, Button } from "@tarojs/components";
import { authApi } from "../../services/api";
import { useUserStore } from "../../stores/user.store";
import type { LoginResult } from "../../types/api";
import "./register.scss";

const Register: React.FC = () => {
  const { setLoggedIn } = useUserStore();

  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [phoneError, setPhoneError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const systemInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight || 0);
  }, []);

  // Validation
  const validatePhone = (value: string): boolean => {
    if (!value || value.trim() === "") {
      setPhoneError("");
      return false;
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(value.trim())) {
      setPhoneError("请输入正确的手机号");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateNickname = (value: string): boolean => {
    if (!value || value.trim() === "") {
      setNicknameError("");
      return false;
    }
    if (value.length < 2 || value.length > 20) {
      setNicknameError("昵称长度应在2-20个字符之间");
      return false;
    }
    setNicknameError("");
    return true;
  };

  const validatePassword = (value: string): boolean => {
    if (!value || value.trim() === "") {
      setPasswordError("");
      return false;
    }
    if (value.length < 6 || value.length > 20) {
      setPasswordError("密码长度应在6-20个字符之间");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const onPhoneInput = (e: any) => {
    const val = e.detail.value || e.detail || "";
    setPhone(val);
    validatePhone(val);
  };

  const onNicknameInput = (e: any) => {
    const val = e.detail.value || e.detail || "";
    setNickname(val);
    validateNickname(val);
  };

  const onPasswordInput = (e: any) => {
    const val = e.detail.value || e.detail || "";
    setPassword(val);
    validatePassword(val);
  };

  const navigateToLogin = () => {
    Taro.redirectTo({ url: "/pages/login/login" });
  };

  const showUserAgreement = () => {
    Taro.showModal({
      title: "用户协议",
      content:
        "欢迎使用PillPal！本协议是您与PillPal之间的法律协议。请您务必审慎阅读、充分理解本协议各条款内容...",
      showCancel: true,
      confirmText: "同意",
      cancelText: "取消",
    });
  };

  const showPrivacyPolicy = () => {
    Taro.showModal({
      title: "隐私政策",
      content:
        "PillPal致力于保护您的隐私。本政策描述了我们如何收集、使用、存储和保护您的个人信息...",
      showCancel: true,
      confirmText: "同意",
      cancelText: "取消",
    });
  };

  const onRegister = () => {
    const isPhoneValid = validatePhone(phone);
    const isNicknameValid = validateNickname(nickname);
    const isPasswordValid = validatePassword(password);

    if (!isPhoneValid || !isNicknameValid || !isPasswordValid) {
      return;
    }

    setLoading(true);
    Taro.showLoading({ title: "注册中...", mask: true });

    // Call loginByPhone which handles both login and registration
    authApi
      .loginByPhone(phone.trim(), password)
      .then((res) => {
        Taro.hideLoading();
        setLoading(false);

        if (res.code !== 0) {
          Taro.showModal({
            title: "注册失败",
            content: res.message || "请检查网络连接或稍后重试",
            showCancel: false,
          });
          return;
        }

        const loginData = res.data as LoginResult;
        setLoggedIn(loginData.token, loginData.refreshToken, {
          id: loginData.userId,
          openid: loginData.openid,
          families: loginData.families,
        });

        // If new user, update nickname
        if (loginData.isNewUser) {
          authApi
            .updateProfile({ nickname: nickname.trim() })
            .then(() => {
              Taro.showToast({ title: "注册成功", icon: "success" });
              setTimeout(() => {
                Taro.switchTab({ url: "/pages/index/index" });
              }, 1500);
            })
            .catch((error) => {
              console.error("更新昵称失败:", error);
              Taro.showToast({
                title: "注册成功，但更新昵称失败",
                icon: "none",
              });
              setTimeout(() => {
                Taro.switchTab({ url: "/pages/index/index" });
              }, 1500);
            });
        } else {
          Taro.showToast({ title: "登录成功", icon: "success" });
          setTimeout(() => {
            Taro.switchTab({ url: "/pages/index/index" });
          }, 1500);
        }
      })
      .catch((error) => {
        Taro.hideLoading();
        setLoading(false);
        Taro.showModal({
          title: "注册失败",
          content: error.message || "请检查网络连接或稍后重试",
          showCancel: false,
        });
      });
  };

  return (
    <View
      className="register-container"
      style={{ paddingTop: `calc(${statusBarHeight}px + 80rpx)` }}
    >
      <View className="login-card">
        <View className="card-header">
          <Text className="card-title">注册新账号</Text>
        </View>

        <View className="login-form">
          {/* Phone input */}
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

          {/* Nickname input */}
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
            {nicknameError && (
              <Text className="error-message">{nicknameError}</Text>
            )}
          </View>

          {/* Password input */}
          <View className="form-group">
            <View className="field-wrapper">
              <Text className="field-icon">🔒</Text>
              <Input
                className="field-input"
                type="password"
                placeholder="请输入密码"
                value={password}
                onInput={onPasswordInput}
              />
            </View>
            {passwordError && (
              <Text className="error-message">{passwordError}</Text>
            )}
          </View>

          {/* Register button */}
          <Button
            className="login-button"
            loading={loading}
            disabled={loading}
            onClick={onRegister}
          >
            注册并登录
          </Button>
        </View>

        {/* Login link */}
        <View className="register-link">
          <Text>已有账号？</Text>
          <Text className="link" onClick={navigateToLogin}>
            立即登录
          </Text>
        </View>

        {/* Footer agreement */}
        <View className="footer">
          <Text>注册即表示同意</Text>
          <View className="footer-links">
            <Text className="link" onClick={showUserAgreement}>
              《用户协议》
            </Text>
            <Text>和</Text>
            <Text className="link" onClick={showPrivacyPolicy}>
              《隐私政策》
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
