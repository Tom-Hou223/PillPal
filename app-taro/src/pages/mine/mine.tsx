import { useState, useCallback } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import Taro, { useDidShow, useLoad } from "@tarojs/taro";
import { useUserStore } from "../../stores/user.store";
import { UserManager, FamilyManager, authApi } from "../../services/api";
import { safeName } from "../../utils/date";
import type { FamilyInfo } from "../../types/api";
import CustomTabBar from "../../custom-tab-bar";
import "./mine.scss";

interface MenuItem {
  icon: string;
  title: string;
  url: string;
  needLogin: boolean;
}

const MENU_LIST: MenuItem[] = [
  {
    icon: "manager-o",
    title: "家庭管理",
    url: "/pages/family-manage/family-manage",
    needLogin: true,
  },
  {
    icon: "friends-o",
    title: "家庭成员",
    url: "/pages/family/family",
    needLogin: false,
  },
  {
    icon: "chart-trending-o",
    title: "数据统计",
    url: "/pages/statistics/statistics",
    needLogin: false,
  },
  {
    icon: "setting-o",
    title: "系统设置",
    url: "/pages/settings/settings",
    needLogin: false,
  },
  {
    icon: "info-o",
    title: "关于我们",
    url: "/pages/about/about",
    needLogin: false,
  },
  {
    icon: "service-o",
    title: "反馈通道",
    url: "/pages/feedback/feedback",
    needLogin: false,
  },
];

const SENIOR_MENU_LIST = [
  { icon: "👨‍👩‍👧‍👦", title: "家庭成员", url: "/pages/family/family" },
  { icon: "📊", title: "数据统计", url: "/pages/statistics/statistics" },
  { icon: "⚙️", title: "系统设置", url: "/pages/settings/settings" },
  { icon: "ℹ️", title: "关于我们", url: "/pages/about/about" },
];

const MENU_ICON_MAP: Record<string, string> = {
  "manager-o": "👥",
  "friends-o": "👨‍👩‍👧‍👦",
  "chart-trending-o": "📊",
  "setting-o": "⚙️",
  "info-o": "ℹ️",
  "service-o": "💬",
};

const SERVER_BASE_URL = "http://192.168.31.90:3001";

interface UserInfoDisplay {
  avatar: string;
  nickname: string;
  phone: string;
}

export default function MinePage() {
  const {
    isSeniorMode,
    seniorTheme,
    isGuestMode,
    isLoggedIn,
    setSeniorMode,
    setSeniorTheme,
    setGuestMode,
    logout,
    fetchProfile,
    loadFromStorage,
  } = useUserStore();

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfoDisplay>({
    avatar: "",
    nickname: "未登录",
    phone: "",
  });
  const [currentFamily, setCurrentFamily] = useState<FamilyInfo | null>(null);
  const [avatarError, setAvatarError] = useState(false);

  // ==================== Data loading ====================
  const loadUserInfo = useCallback(async () => {
    if (isGuestMode || !isLoggedIn) {
      setUserInfo({ avatar: "", nickname: "未登录", phone: "" });
      setAvatarError(false);
      return;
    }

    try {
      const res: any = await authApi.getProfile();
      if (res && res.code === 0) {
        const profile = res.data;
        let avatarUrl = profile.avatarUrl || "";

        if (avatarUrl) {
          if (
            avatarUrl.startsWith("/uploads/") ||
            avatarUrl.startsWith("uploads/")
          ) {
            avatarUrl = avatarUrl.startsWith("/") ? avatarUrl : "/" + avatarUrl;
            avatarUrl = SERVER_BASE_URL + avatarUrl + "?t=" + Date.now();
          } else if (
            !avatarUrl.startsWith("http://") &&
            !avatarUrl.startsWith("https://")
          ) {
            avatarUrl = SERVER_BASE_URL + "/" + avatarUrl + "?t=" + Date.now();
          }
        }

        setUserInfo({
          avatar: avatarUrl,
          nickname: safeName(profile.nickname),
          phone: profile.phone || "",
        });
        setAvatarError(false);
        UserManager.setUser(profile);
      }
    } catch (err) {
      console.error("加载用户信息失败:", err);
    }
  }, [isGuestMode, isLoggedIn]);

  const loadCurrentFamily = useCallback(() => {
    if (isGuestMode || !isLoggedIn) {
      setCurrentFamily(null);
      return;
    }
    const family = FamilyManager.getCurrentFamily();
    setCurrentFamily(family);
  }, [isGuestMode, isLoggedIn]);

  // ==================== Handlers ====================
  const handleToggleSeniorMode = useCallback(() => {
    const newMode = !isSeniorMode;
    setSeniorMode(newMode);
    Taro.showToast({
      title: newMode ? "已开启老年模式" : "已关闭老年模式",
      icon: "success",
      duration: 2000,
    });
    setTimeout(() => {
      Taro.reLaunch({ url: "/pages/mine/mine" });
    }, 2000);
  }, [isSeniorMode, setSeniorMode]);

  const handleToggleSeniorTheme = useCallback(() => {
    const newTheme = seniorTheme === "white" ? "yellow" : "white";
    setSeniorTheme(newTheme);
    Taro.showToast({
      title: newTheme === "yellow" ? "已切换为黑底黄字" : "已切换为白底黑字",
      icon: "success",
      duration: 1500,
    });
  }, [seniorTheme, setSeniorTheme]);

  const handleToggleGuestMode = useCallback(() => {
    if (isGuestMode) {
      // Not logged in, redirect to login
      Taro.redirectTo({ url: "/pages/login/login" });
    } else {
      // Logged in, confirm logout
      Taro.showModal({
        title: "退出登录",
        content: "确定要退出登录吗？",
        confirmText: "确定",
        cancelText: "取消",
        success: (res) => {
          if (res.confirm) {
            handleLogout();
          }
        },
      });
    }
  }, [isGuestMode]);

  const handleLogout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // ignore network error
    }
    setGuestMode();
    setCurrentFamily(null);
    setUserInfo({ avatar: "", nickname: "未登录", phone: "" });
    setAvatarError(false);
    Taro.showToast({ title: "已退出登录", icon: "success" });
  }, [isGuestMode, setGuestMode, logout]);

  const handleMenuClick = useCallback(
    (item: MenuItem) => {
      const { url, needLogin, title } = item;

      if (needLogin && isGuestMode) {
        Taro.showModal({
          title: "登录提示",
          content: "需要登录才能使用此功能",
          confirmText: "去登录",
          success: (res) => {
            if (res.confirm) {
              Taro.redirectTo({ url: "/pages/login/login" });
            }
          },
        });
        return;
      }

      // Family management: check if family is already selected
      if (title === "家庭管理") {
        const family = FamilyManager.getCurrentFamily();
        if (!family || !(family as any).id) {
          Taro.navigateTo({ url: "/pages/family-select/family-select" });
          return;
        }
      }

      Taro.navigateTo({ url });
    },
    [isGuestMode],
  );

  const handleEditProfile = useCallback(() => {
    if (isGuestMode) {
      Taro.showModal({
        title: "登录提示",
        content: "需要登录才能编辑个人信息",
        confirmText: "去登录",
        success: (res) => {
          if (res.confirm) {
            Taro.redirectTo({ url: "/pages/login/login" });
          }
        },
      });
      return;
    }
    Taro.navigateTo({ url: "/pages/profile/profile" });
  }, [isGuestMode]);

  const handleFamilyTap = useCallback(() => {
    if (isGuestMode) {
      Taro.showModal({
        title: "登录提示",
        content: "需要登录才能管理家庭",
        confirmText: "去登录",
        success: (res) => {
          if (res.confirm) {
            Taro.redirectTo({ url: "/pages/login/login" });
          }
        },
      });
      return;
    }
    Taro.navigateTo({ url: "/pages/family-select/family-select" });
  }, [isGuestMode]);

  const handleSeniorMenuClick = useCallback((url: string) => {
    Taro.navigateTo({ url });
  }, []);

  // ==================== Lifecycle ====================
  useLoad(() => {
    const sysInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(sysInfo.statusBarHeight || 0);

    loadFromStorage();
    loadUserInfo();
    loadCurrentFamily();
  });

  useDidShow(() => {
    loadFromStorage();
    loadUserInfo();
    loadCurrentFamily();
  });

  // ==================== Render: Nav Bar ====================
  const renderNavBar = () => (
    <View className="nav-bar" style={{ paddingTop: `${statusBarHeight}px` }}>
      <View className="nav-bar-content">
        <Text className="nav-bar-title">我的</Text>
      </View>
    </View>
  );

  const renderSwitch = (checked: boolean, onClick: () => void) => (
    <View
      className={`switch ${checked ? "switch-on" : "switch-off"}`}
      onClick={onClick}
    >
      <View className={`switch-thumb ${checked ? "thumb-on" : "thumb-off"}`} />
    </View>
  );

  // ==================== Render: Senior Mode ====================
  if (isSeniorMode) {
    const themeCls = seniorTheme === "yellow" ? "theme-yellow" : "theme-white";

    return (
      <View
        className={`mine-senior-container ${themeCls}`}
        style={{ paddingTop: `${statusBarHeight + 88 + 32}px` }}
      >
        {renderNavBar()}

        {/* User card */}
        <View className="senior-user-card" onClick={handleEditProfile}>
          <View className="user-avatar">
            {userInfo.avatar && !avatarError ? (
              <Image
                src={userInfo.avatar}
                mode="aspectFill"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <Text className="avatar-placeholder">👤</Text>
            )}
          </View>
          <View className="user-info-col">
            <Text className="user-name">
              {safeName(userInfo.nickname) || "未登录"}
            </Text>
            {userInfo.phone ? (
              <Text className="user-phone">{userInfo.phone}</Text>
            ) : null}
          </View>
        </View>

        {/* Family card */}
        {!isGuestMode && currentFamily ? (
          <View className="senior-family-card" onClick={handleFamilyTap}>
            <Text className="family-icon">🏠</Text>
            <Text className="family-name">{currentFamily.name}</Text>
          </View>
        ) : null}

        {/* Senior theme toggle */}
        <View className="senior-theme-row">
          <Text className="senior-theme-label">护眼模式（黑底黄字）</Text>
          <View
            className="senior-theme-switch"
            onClick={handleToggleSeniorTheme}
          >
            <View
              className={`switch-track ${
                seniorTheme === "yellow"
                  ? "switch-track-on"
                  : "switch-track-off"
              }`}
            >
              <View
                className={`switch-knob ${
                  seniorTheme === "yellow"
                    ? "switch-knob-on"
                    : "switch-knob-off"
                }`}
              />
            </View>
          </View>
        </View>

        {/* Menu grid */}
        <View className="senior-menu">
          {SENIOR_MENU_LIST.map((item, idx) => (
            <View
              key={idx}
              className="senior-menu-item"
              onClick={() => handleSeniorMenuClick(item.url)}
            >
              <Text className="menu-icon">{item.icon}</Text>
              <Text className="menu-text">{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Logout */}
        {!isGuestMode && (
          <View className="senior-logout">
            <Button
              className="senior-btn senior-btn-logout"
              onClick={handleLogout}
            >
              退出登录
            </Button>
          </View>
        )}

        {/* Version */}
        <View className="version-info">
          <Text className="version-text">PillPal v2.0.0</Text>
        </View>
      </View>
    );
  }

  // ==================== Render: Normal Mode ====================
  return (
    <View
      className="mine-container"
      style={{ paddingTop: `${statusBarHeight + 88 + 32}px` }}
    >
      {renderNavBar()}

      {/* User info section */}
      <View className="user-info-section">
        <View className="avatar-section" onClick={handleEditProfile}>
          <View className="avatar">
            {userInfo.avatar && !avatarError ? (
              <Image
                src={userInfo.avatar}
                mode="aspectFill"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <View className="avatar-placeholder">
                <Text>👤</Text>
              </View>
            )}
          </View>

          <View className="user-details">
            <Text className="nickname">
              {safeName(userInfo.nickname) || "未登录"}
            </Text>

            {/* Family name inline */}
            {!isGuestMode && currentFamily ? (
              <View
                className="family-info-ios"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFamilyTap();
                }}
              >
                <Text className="family-name-text">{currentFamily.name}</Text>
              </View>
            ) : null}

            {isGuestMode ? (
              <Text className="guest-badge">未登录状态</Text>
            ) : null}
          </View>

          <View className="arrow-right">
            <Text className="arrow-right-icon">{">"}</Text>
          </View>
        </View>
      </View>

      {/* Settings section */}
      <View className="settings-section">
        <View className="settings-cell">
          <Text className="settings-cell-title">老年模式</Text>
          {renderSwitch(isSeniorMode, handleToggleSeniorMode)}
        </View>
        {isSeniorMode && (
          <View className="settings-cell">
            <Text className="settings-cell-title">护眼模式（黑底黄字）</Text>
            {renderSwitch(seniorTheme === "yellow", handleToggleSeniorTheme)}
          </View>
        )}
      </View>

      {/* Menu list */}
      <View className="menu-section">
        {MENU_LIST.map((item) => (
          <View
            key={item.title}
            className="menu-cell"
            onClick={() => handleMenuClick(item)}
          >
            <View className="menu-cell-left">
              <Text className="menu-cell-icon">
                {MENU_ICON_MAP[item.icon] || "📄"}
              </Text>
              <Text className="menu-cell-title">{item.title}</Text>
            </View>
            <Text className="menu-cell-arrow">{">"}</Text>
          </View>
        ))}
      </View>

      {/* Login / Logout button */}
      <View className="login-logout-section">
        <View className="auth-btn" onClick={handleToggleGuestMode}>
          <Text className="auth-btn-text">{isGuestMode ? "登录" : "退出"}</Text>
        </View>
      </View>

      {/* Version info */}
      <View className="version-info">
        <Text className="version-text">PillPal v2.0.0</Text>
      </View>
      <CustomTabBar />
    </View>
  );
}
