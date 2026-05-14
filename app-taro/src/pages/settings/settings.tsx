import { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { useUserStore } from '../../stores/user.store';
import { UserManager, FamilyManager, TokenManager } from '../../services/api';
import { notificationsApi } from '../../services/api';
import './settings.scss';

interface ReminderSettings {
  pushEnabled: boolean;
  notificationType: string;
  reminderTime: string;
  expiryWarningDays: string;
  doNotDisturb: boolean;
  doNotDisturbStart: string;
  doNotDisturbEnd: string;
}

const NOTIFICATION_TYPES = [
  { label: '微信通知', value: 'wechat' },
  { label: '应用内提醒', value: 'app' },
];

const REMINDER_TIMES = [
  { label: '提前5分钟', value: '5' },
  { label: '提前10分钟', value: '10' },
  { label: '提前15分钟', value: '15' },
  { label: '提前30分钟', value: '30' },
];

const EXPIRY_WARNING_DAYS = [
  { label: '提前7天', value: '7' },
  { label: '提前15天', value: '15' },
  { label: '提前30天', value: '30' },
  { label: '提前60天', value: '60' },
];

export default function Settings() {
  const { isSeniorMode, seniorTheme, setSeniorMode, setSeniorTheme } = useUserStore();

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [notificationAuthorized, setNotificationAuthorized] = useState(false);

  const [reminderSettings, setReminderSettings] = useState<ReminderSettings>({
    pushEnabled: true,
    notificationType: 'wechat',
    reminderTime: '15',
    expiryWarningDays: '30',
    doNotDisturb: false,
    doNotDisturbStart: '22:00',
    doNotDisturbEnd: '08:00',
  });

  const [showThemeSheet, setShowThemeSheet] = useState(false);
  const [showNotificationTypeSheet, setShowNotificationTypeSheet] = useState(false);
  const [showReminderTimeSheet, setShowReminderTimeSheet] = useState(false);
  const [showExpiryWarningSheet, setShowExpiryWarningSheet] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const getExpiryWarningLabel = useCallback((days: string) => {
    const item = EXPIRY_WARNING_DAYS.find((d) => d.value === days);
    return item ? item.label : '提前30天';
  }, []);

  const [expiryWarningLabel, setExpiryWarningLabel] = useState('提前30天');

  const getSystemInfo = useCallback(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const loadSettings = useCallback(() => {
    const savedSettings = Taro.getStorageSync('reminderSettings');
    if (savedSettings) {
      setReminderSettings({
        pushEnabled: savedSettings.pushEnabled !== undefined ? savedSettings.pushEnabled : true,
        notificationType: savedSettings.notificationType || 'wechat',
        reminderTime: savedSettings.reminderTime || '15',
        expiryWarningDays: savedSettings.expiryWarningDays || '30',
        doNotDisturb: savedSettings.doNotDisturb || false,
        doNotDisturbStart: savedSettings.doNotDisturbStart || '22:00',
        doNotDisturbEnd: savedSettings.doNotDisturbEnd || '08:00',
      });
    }
    const label = getExpiryWarningLabel(savedSettings?.expiryWarningDays || '30');
    setExpiryWarningLabel(label);
  }, [getExpiryWarningLabel]);

  const checkNotificationPermission = useCallback(() => {
    const tmplIds = [
      'pYTIFUgvO40l0ZnQ3Miy6P5x_VpYUF5GY_NuuvkxeLE',
      'S07bmEbAECl0mAdvmz4RRFsUh8sDLvVOTtvLx7vyL7A',
    ];
    Taro.getSetting({
      withSubscriptions: true,
      success: (res: any) => {
        let hasAuthorized = false;
        if (res.subscriptionsSetting && res.subscriptionsSetting.itemSettings) {
          tmplIds.forEach((id) => {
            if (res.subscriptionsSetting.itemSettings[id] === 'accept') {
              hasAuthorized = true;
            }
          });
        }
        setNotificationAuthorized(hasAuthorized);
      },
      fail: () => {
        setNotificationAuthorized(false);
      },
    });
  }, []);

  useEffect(() => {
    getSystemInfo();
    loadSettings();
    checkNotificationPermission();
  }, [getSystemInfo, loadSettings, checkNotificationPermission]);

  useDidShow(() => {
    getSystemInfo();
    loadSettings();
    checkNotificationPermission();
  });

  const onSave = () => {
    Taro.showLoading({ title: '保存中...', mask: true });
    try {
      Taro.setStorageSync('reminderSettings', reminderSettings);
      Taro.hideLoading();
      Taro.showToast({ title: '保存成功', icon: 'success' });
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '保存失败', icon: 'none' });
    }
  };

  const onReset = () => {
    Taro.showModal({
      title: '确认重置',
      content: '确定要恢复默认设置吗？',
      confirmText: '重置',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          const defaults: ReminderSettings = {
            pushEnabled: true,
            notificationType: 'wechat',
            reminderTime: '15',
            expiryWarningDays: '30',
            doNotDisturb: false,
            doNotDisturbStart: '22:00',
            doNotDisturbEnd: '08:00',
          };
          setReminderSettings(defaults);
          setExpiryWarningLabel(getExpiryWarningLabel('30'));
          Taro.showToast({ title: '已恢复默认', icon: 'success' });
        }
      },
    });
  };

  const onSeniorModeChange = (e: any) => {
    const value = e.detail.value;
    setSeniorMode(value);
    Taro.showToast({
      title: value ? '已开启老年模式' : '已关闭老年模式',
      icon: 'success',
      duration: 2000,
    });
    setTimeout(() => {
      Taro.reLaunch({ url: '/pages/settings/settings' });
    }, 2000);
  };

  const selectTheme = (value: 'white' | 'yellow') => {
    setSeniorTheme(value);
    setShowThemeSheet(false);
    Taro.showToast({
      title: value === 'yellow' ? '已切换到黑底黄字' : '已切换到白底黑字',
      icon: 'success',
      duration: 2000,
    });
    setTimeout(() => {
      Taro.reLaunch({ url: '/pages/settings/settings' });
    }, 2000);
  };

  const requestNotificationPermission = () => {
    Taro.showModal({
      title: '通知权限',
      content: '为了及时收到用药提醒和药品过期通知，需要您授权通知权限。',
      confirmText: '授权',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          const EXPIRY_TMPL = 'pYTIFUgvO40l0ZnQ3Miy6P5x_VpYUF5GY_NuuvkxeLE';
          const MED_TMPL = 'S07bmEbAECl0mAdvmz4RRFsUh8sDLvVOTtvLx7vyL7A';
          const tmplIds = [EXPIRY_TMPL, MED_TMPL].filter(id => id && id !== 'your-template-id');
          if (tmplIds.length === 0) {
            Taro.showToast({ title: '请先配置订阅消息模板ID', icon: 'none' });
            return;
          }
          Taro.requestSubscribeMessage({
            tmplIds,
            success: (subscribeRes: any) => {
              let hasAuthorized = false;
              tmplIds.forEach((id) => { if (subscribeRes[id] === 'accept') hasAuthorized = true; });
              if (hasAuthorized) {
                Taro.showToast({ title: '授权成功', icon: 'success' });
                setTimeout(() => checkNotificationPermission(), 500);
              } else {
                Taro.showToast({ title: '您拒绝了授权', icon: 'none' });
              }
            },
            fail: (err: any) => {
              if (err.errCode === 20001) {
                Taro.showToast({ title: '模板ID未配置，请先在微信公众平台设置', icon: 'none', duration: 3000 });
              } else {
                Taro.showToast({ title: '授权失败', icon: 'none' });
              }
            },
          });
        }
      },
    });
  };

  const onRestoreGuestData = () => {
    Taro.showModal({
      title: '恢复默认数据',
      content: '确定要恢复默认的未登录数据吗？这将会清除当前的未登录数据。',
      success: (res) => {
        if (res.confirm) {
          // 清除现有的未登录数据
          const storageKeys = Taro.getStorageInfoSync().keys;
          storageKeys.forEach((key) => {
            if (key.startsWith('guest_') || key === 'medicineList' || key === 'planList') {
              Taro.removeStorageSync(key);
            }
          });
          Taro.showToast({ title: '已恢复默认数据', icon: 'success' });
          Taro.switchTab({ url: '/pages/index/index' });
        }
      },
    });
  };

  const containerClass = `settings-container${isSeniorMode ? ' senior-mode' : ''}${isSeniorMode && seniorTheme === 'yellow' ? ' theme-yellow' : ''}`;

  const renderSheet = (
    show: boolean,
    title: string,
    options: { label: string; value: string }[],
    currentValue: string,
    onSelect: (value: string) => void,
    onClose: () => void,
  ) => {
    if (!show) return null;
    return (
      <View className="sheet-overlay" onClick={onClose}>
        <View className="sheet-container" onClick={(e) => e.stopPropagation()}>
          <View className="sheet-header">
            <Text className="sheet-title">{title}</Text>
            <View className="sheet-close" onClick={onClose}>
              <Text>&times;</Text>
            </View>
          </View>
          <View className="sheet-content">
            {options.map((item) => (
              <View
                key={item.value}
                className={`sheet-item ${currentValue === item.value ? 'active' : ''}`}
                onClick={() => onSelect(item.value)}
              >
                <Text className="sheet-item-label">{item.label}</Text>
                {currentValue === item.value && (
                  <Text className="sheet-item-check">&#10003;</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className={containerClass} style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 32rpx)` }}>
      <NavBar title="系统设置" showBack />

      {/* 提醒设置 */}
      <View className="settings-section">
        <View className="section-title">
          <Text>提醒设置</Text>
        </View>
        <View className="cell-group">
          <View className="cell">
            <Text className="cell-title">开启推送</Text>
            <Switch
              checked={reminderSettings.pushEnabled}
              color="#27AE60"
              onChange={(e) =>
                setReminderSettings((s) => ({ ...s, pushEnabled: e.detail.value }))
              }
            />
          </View>

          <View
            className="cell cell-link"
            onClick={() => setShowNotificationTypeSheet(true)}
          >
            <Text className="cell-title">通知方式</Text>
            <View className="cell-value-wrap">
              <Text className="cell-value">
                {reminderSettings.notificationType === 'wechat' ? '微信通知' : '应用内提醒'}
              </Text>
              <Text className="cell-arrow">&gt;</Text>
            </View>
          </View>

          <View
            className="cell cell-link"
            onClick={() => setShowReminderTimeSheet(true)}
          >
            <Text className="cell-title">提醒时间</Text>
            <View className="cell-value-wrap">
              <Text className="cell-value">{reminderSettings.reminderTime}分钟前</Text>
              <Text className="cell-arrow">&gt;</Text>
            </View>
          </View>

          <View
            className="cell cell-link"
            onClick={() => setShowExpiryWarningSheet(true)}
          >
            <Text className="cell-title">预警天数</Text>
            <View className="cell-value-wrap">
              <Text className="cell-value">{expiryWarningLabel}</Text>
              <Text className="cell-arrow">&gt;</Text>
            </View>
          </View>

          <View className="cell">
            <Text className="cell-title">免打扰模式</Text>
            <Switch
              checked={reminderSettings.doNotDisturb}
              color="#27AE60"
              onChange={(e) =>
                setReminderSettings((s) => ({ ...s, doNotDisturb: e.detail.value }))
              }
            />
          </View>

          {reminderSettings.doNotDisturb && (
            <View className="cell cell-link" onClick={() => setShowTimePicker(true)}>
              <Text className="cell-title">免打扰时间</Text>
              <View className="cell-value-wrap">
                <Text className="cell-value">
                  {reminderSettings.doNotDisturbStart} - {reminderSettings.doNotDisturbEnd}
                </Text>
                <Text className="cell-arrow">&gt;</Text>
              </View>
            </View>
          )}

          <View className="cell cell-link" onClick={requestNotificationPermission}>
            <Text className="cell-title">通知权限</Text>
            <View className="cell-value-wrap">
              <Text className="cell-value">{notificationAuthorized ? '已授权' : '点击授权'}</Text>
              <Text className="cell-arrow">&gt;</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 界面设置 */}
      <View className="settings-section">
        <View className="section-title">
          <Text>界面设置</Text>
        </View>
        <View className="cell-group">
          <View className="cell">
            <Text className="cell-title">老年模式</Text>
            <Switch
              checked={isSeniorMode}
              color="#27AE60"
              onChange={onSeniorModeChange}
            />
          </View>
          {isSeniorMode && (
            <View className="cell cell-link" onClick={() => setShowThemeSheet(true)}>
              <Text className="cell-title">字体主题</Text>
              <View className="cell-value-wrap">
                <Text className="cell-value">
                  {seniorTheme === 'yellow' ? '黑底黄字' : '白底黑字'}
                </Text>
                <Text className="cell-arrow">&gt;</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* 操作按钮 */}
      <View className="actions">
        <View className="btn btn-primary" onClick={onSave}>
          <Text className="btn-text">保存设置</Text>
        </View>
        <View className="btn btn-default" onClick={onReset}>
          <Text className="btn-text">恢复默认设置</Text>
        </View>
        <View className="btn btn-danger" onClick={onRestoreGuestData}>
          <Text className="btn-text">恢复默认未登录数据</Text>
        </View>
      </View>

      {/* 主题选择器 Sheet */}
      {renderSheet(showThemeSheet, '选择字体主题', [
        { label: '黑底黄字', value: 'yellow' },
        { label: '白底黑字', value: 'white' },
      ], seniorTheme, (v) => selectTheme(v as 'white' | 'yellow'), () => setShowThemeSheet(false))}

      {/* 通知方式选择器 */}
      {renderSheet(showNotificationTypeSheet, '选择通知方式', NOTIFICATION_TYPES, reminderSettings.notificationType, (v) => {
        setReminderSettings((s) => ({ ...s, notificationType: v }));
        setShowNotificationTypeSheet(false);
      }, () => setShowNotificationTypeSheet(false))}

      {/* 提醒时间选择器 */}
      {renderSheet(showReminderTimeSheet, '选择提醒时间', REMINDER_TIMES, reminderSettings.reminderTime, (v) => {
        setReminderSettings((s) => ({ ...s, reminderTime: v }));
        setShowReminderTimeSheet(false);
      }, () => setShowReminderTimeSheet(false))}

      {/* 预警天数选择器 */}
      {renderSheet(showExpiryWarningSheet, '选择预警天数', EXPIRY_WARNING_DAYS, reminderSettings.expiryWarningDays, (v) => {
        setReminderSettings((s) => ({ ...s, expiryWarningDays: v }));
        setExpiryWarningLabel(getExpiryWarningLabel(v));
        setShowExpiryWarningSheet(false);
      }, () => setShowExpiryWarningSheet(false))}

      {/* 免打扰时间选择器 */}
      {showTimePicker && (
        <View className="sheet-overlay" onClick={() => setShowTimePicker(false)}>
          <View className="time-picker-container" onClick={(e) => e.stopPropagation()}>
            <View className="time-picker-header">
              <Text className="time-picker-cancel" onClick={() => setShowTimePicker(false)}>取消</Text>
              <Text className="time-picker-title">免打扰时间</Text>
              <Text className="time-picker-confirm" onClick={() => setShowTimePicker(false)}>确定</Text>
            </View>
            <View className="time-picker-content">
              <View className="time-item">
                <Text>开始时间</Text>
                <View className="time-picker-input">
                  {/* eslint-disable-next-line */}
                  {/* @ts-ignore */}
                  <picker
                    mode="time"
                    value={reminderSettings.doNotDisturbStart}
                    onChange={(e) => {
                      setReminderSettings((s) => ({ ...s, doNotDisturbStart: e.detail.value }));
                    }}
                  >
                    <View className="picker-value">{reminderSettings.doNotDisturbStart}</View>
                  </picker>
                </View>
              </View>
              <View className="time-item">
                <Text>结束时间</Text>
                <View className="time-picker-input">
                  {/* eslint-disable-next-line */}
                  {/* @ts-ignore */}
                  <picker
                    mode="time"
                    value={reminderSettings.doNotDisturbEnd}
                    onChange={(e) => {
                      setReminderSettings((s) => ({ ...s, doNotDisturbEnd: e.detail.value }));
                    }}
                  >
                    <View className="picker-value">{reminderSettings.doNotDisturbEnd}</View>
                  </picker>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
