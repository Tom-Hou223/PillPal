import { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { useUserStore } from '../../stores/user.store';
import { notificationsApi } from '../../services/api';
import type { NotificationSettings, ApiResponse, SubscriptionInfo } from '../../types/api';
import './reminder-settings.scss';

const REMINDER_TIMES = [
  { label: '提前5分钟', value: 5 },
  { label: '提前10分钟', value: 10 },
  { label: '提前15分钟', value: 15 },
  { label: '提前30分钟', value: 30 },
];

const EXPIRY_WARNING_DAYS = [
  { label: '提前7天', value: 7 },
  { label: '提前15天', value: 15 },
  { label: '提前30天', value: 30 },
  { label: '提前60天', value: 60 },
];

export default function ReminderSettings() {
  const { isLoggedIn } = useUserStore();

  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const [reminderSettings, setReminderSettings] = useState({
    pushEnabled: true,
    reminderTime: 15,
    expiryWarningDays: 30,
  });

  const [expirySubscribed, setExpirySubscribed] = useState(false);
  const [medicationSubscribed, setMedicationSubscribed] = useState(false);
  const [templates, setTemplates] = useState({ expiry: '', medication: '' });

  const [showReminderTimeSheet, setShowReminderTimeSheet] = useState(false);
  const [showExpiryWarningSheet, setShowExpiryWarningSheet] = useState(false);
  const [reminderTimeLabel, setReminderTimeLabel] = useState('提前15分钟');
  const [expiryWarningLabel, setExpiryWarningLabel] = useState('提前30天');

  const updateLabels = useCallback((time: number, days: number) => {
    const timeItem = REMINDER_TIMES.find((t) => t.value === time);
    const dayItem = EXPIRY_WARNING_DAYS.find((d) => d.value === days);
    setReminderTimeLabel(timeItem ? timeItem.label : '提前15分钟');
    setExpiryWarningLabel(dayItem ? dayItem.label : '提前30天');
  }, []);

  const getSystemInfo = useCallback(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const loadSettings = useCallback(() => {
    const savedSettings = Taro.getStorageSync('reminderSettings') || {};
    const reminderTime = savedSettings.reminderTime || 15;
    const expiryWarningDays = savedSettings.expiryWarningDays || 30;

    setReminderSettings({
      pushEnabled: savedSettings.pushEnabled !== undefined ? savedSettings.pushEnabled : true,
      reminderTime,
      expiryWarningDays,
    });

    updateLabels(reminderTime, expiryWarningDays);

    // 如果已登录，从服务器加载设置
    if (isLoggedIn) {
      notificationsApi.getSettings().then((res: any) => {
        if (res.code === 0) {
          setReminderSettings((s) => ({
            ...s,
            reminderTime: res.data.reminder_time,
            expiryWarningDays: res.data.expiry_warning_days,
          }));
          updateLabels(res.data.reminder_time, res.data.expiry_warning_days);
        }
      }).catch(() => {
        // ignore
      });
    }
  }, [isLoggedIn, updateLabels]);

  const loadSubscriptions = useCallback(() => {
    if (!isLoggedIn) return;

    notificationsApi.getSubscriptions().then((res: any) => {
      if (res.code === 0) {
        const subscriptions: any[] = res.data.subscriptions || [];
        setExpirySubscribed(subscriptions.some((s) => s.template_type === 'expiry' && s.is_active));
        setMedicationSubscribed(subscriptions.some((s) => s.template_type === 'medication' && s.is_active));
        setTemplates(res.data.templates || { expiry: '', medication: '' });
      }
    }).catch(() => {
      // ignore
    });
  }, [isLoggedIn]);

  useEffect(() => {
    getSystemInfo();
    loadSettings();
    loadSubscriptions();
  }, [getSystemInfo, loadSettings, loadSubscriptions]);

  useDidShow(() => {
    getSystemInfo();
    loadSettings();
    loadSubscriptions();
  });

  const onSave = () => {
    Taro.showLoading({ title: '保存中...', mask: true });

    Taro.setStorageSync('reminderSettings', reminderSettings);

    if (isLoggedIn) {
      notificationsApi.saveSettings({
        reminderTime: reminderSettings.reminderTime,
        expiryWarningDays: reminderSettings.expiryWarningDays,
      }).then((res: any) => {
        Taro.hideLoading();
        Taro.showToast({ title: res.code === 0 ? '保存成功' : '保存失败', icon: res.code === 0 ? 'success' : 'none' });
      }).catch(() => {
        Taro.hideLoading();
        Taro.showToast({ title: '保存失败', icon: 'none' });
      });
    } else {
      Taro.hideLoading();
      Taro.showToast({ title: '保存成功', icon: 'success' });
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
          setReminderSettings({
            pushEnabled: true,
            reminderTime: 15,
            expiryWarningDays: 30,
          });
          updateLabels(15, 30);
          Taro.showToast({ title: '已重置', icon: 'success' });
        }
      },
    });
  };

  const onClearHistory = () => {
    Taro.showModal({
      title: '清除通知历史',
      content: '确定要清除所有通知历史记录吗？',
      confirmText: '清除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          const storage = Taro.getStorageInfoSync();
          storage.keys.forEach((key) => {
            if (key.startsWith('expiry_notify_')) {
              Taro.removeStorageSync(key);
            }
          });
          Taro.showToast({ title: '已清除', icon: 'success' });
        }
      },
    });
  };

  const onSubscribeExpiry = () => {
    if (!isLoggedIn) {
      Taro.showToast({ title: '请先登录', icon: 'none' });
      return;
    }

    const templateId = templates.expiry || 'pYTIFUgvO40l0ZnQ3Miy6P5x_VpYUF5GY_NuuvkxeLE';

    Taro.requestSubscribeMessage({
      tmplIds: [templateId],
      success: (res: any) => {
        if (res[templateId] === 'accept') {
          notificationsApi.subscribe('expiry').then(() => {
            Taro.showToast({ title: '订阅成功', icon: 'success' });
            loadSubscriptions();
          }).catch(() => {
            Taro.showToast({ title: '订阅失败', icon: 'none' });
          });
        } else if (res[templateId] === 'reject') {
          Taro.showToast({ title: '您拒绝了订阅', icon: 'none' });
        }
      },
      fail: (err: any) => {
        if (err?.errCode === 20001) {
          Taro.showToast({ title: '模板ID未配置，请先在微信公众平台设置', icon: 'none', duration: 3000 });
        } else {
          Taro.showToast({ title: '请求订阅失败', icon: 'none' });
        }
      },
    });
  };

  const onSubscribeMedication = () => {
    if (!isLoggedIn) {
      Taro.showToast({ title: '请先登录', icon: 'none' });
      return;
    }

    const templateId = templates.medication || 'S07bmEbAECl0mAdvmz4RRFsUh8sDLvVOTtvLx7vyL7A';

    Taro.requestSubscribeMessage({
      tmplIds: [templateId],
      success: (res: any) => {
        if (res[templateId] === 'accept') {
          notificationsApi.subscribe('medication').then(() => {
            Taro.showToast({ title: '订阅成功', icon: 'success' });
            loadSubscriptions();
          }).catch(() => {
            Taro.showToast({ title: '订阅失败', icon: 'none' });
          });
        } else if (res[templateId] === 'reject') {
          Taro.showToast({ title: '您拒绝了订阅', icon: 'none' });
        }
      },
      fail: (err: any) => {
        if (err?.errCode === 20001) {
          Taro.showToast({ title: '模板ID未配置，请先在微信公众平台设置', icon: 'none', duration: 3000 });
        } else {
          Taro.showToast({ title: '请求订阅失败', icon: 'none' });
        }
      },
    });
  };

  const renderSheet = (
    show: boolean,
    title: string,
    options: { label: string; value: number }[],
    currentValue: number,
    onSelect: (value: number) => void,
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
    <View className="reminder-settings-container">
      <NavBar title="提醒设置" showBack />

      <View className="content" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 24rpx)` }}>
        {/* 基础设置 */}
        <View className="section">
          <View className="section-title">
            <Text>基础设置</Text>
          </View>
          <View className="cell-group">
            <View className="cell">
              <Text className="cell-title">开启提醒</Text>
              <Switch
                checked={reminderSettings.pushEnabled}
                color="#27AE60"
                onChange={(e) =>
                  setReminderSettings((s) => ({ ...s, pushEnabled: e.detail.value }))
                }
              />
            </View>
          </View>
        </View>

        {/* 用药提醒 */}
        <View className="section">
          <View className="section-title">
            <Text>用药提醒</Text>
          </View>
          <View className="cell-group">
            <View
              className="cell cell-link"
              onClick={() => setShowReminderTimeSheet(true)}
            >
              <Text className="cell-title">提醒时间</Text>
              <View className="cell-value-wrap">
                <Text className="cell-value">{reminderTimeLabel}</Text>
                <Text className="cell-arrow">&gt;</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 效期预警 */}
        <View className="section">
          <View className="section-title">
            <Text>效期预警</Text>
          </View>
          <View className="cell-group">
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
          </View>
        </View>

        {/* 微信订阅消息 */}
        {isLoggedIn && (
          <View className="section">
            <View className="section-title">
              <Text>微信订阅消息</Text>
            </View>
            <View className="cell-group">
              <View className="cell cell-link" onClick={onSubscribeExpiry}>
                <Text className="cell-title">药品过期提醒</Text>
                <View className="cell-value-wrap">
                  <Text className={`subscription-tag ${expirySubscribed ? 'subscribed' : ''}`}>
                    {expirySubscribed ? '已订阅' : '未订阅'}
                  </Text>
                  <Text className="cell-arrow">&gt;</Text>
                </View>
              </View>
              <View className="cell cell-link" onClick={onSubscribeMedication}>
                <Text className="cell-title">用药提醒</Text>
                <View className="cell-value-wrap">
                  <Text className={`subscription-tag ${medicationSubscribed ? 'subscribed' : ''}`}>
                    {medicationSubscribed ? '已订阅' : '未订阅'}
                  </Text>
                  <Text className="cell-arrow">&gt;</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* 其他 */}
        <View className="section">
          <View className="section-title">
            <Text>其他</Text>
          </View>
          <View className="cell-group">
            <View className="cell cell-link" onClick={onClearHistory}>
              <Text className="cell-title">清除通知历史</Text>
              <View className="cell-value-wrap">
                <Text className="delete-icon">&#128465;</Text>
                <Text className="cell-arrow">&gt;</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 操作按钮 */}
        <View className="actions">
          <View className="btn btn-default" onClick={onReset}>
            <Text>恢复默认</Text>
          </View>
          <View className="btn btn-primary" onClick={onSave}>
            <Text>保存设置</Text>
          </View>
        </View>
      </View>

      {/* 提醒时间选择器 */}
      {renderSheet(
        showReminderTimeSheet,
        '选择提醒时间',
        REMINDER_TIMES,
        reminderSettings.reminderTime,
        (value) => {
          setReminderSettings((s) => ({ ...s, reminderTime: value }));
          updateLabels(value, reminderSettings.expiryWarningDays);
          setShowReminderTimeSheet(false);
        },
        () => setShowReminderTimeSheet(false),
      )}

      {/* 预警天数选择器 */}
      {renderSheet(
        showExpiryWarningSheet,
        '选择预警天数',
        EXPIRY_WARNING_DAYS,
        reminderSettings.expiryWarningDays,
        (value) => {
          setReminderSettings((s) => ({ ...s, expiryWarningDays: value }));
          updateLabels(reminderSettings.reminderTime, value);
          setShowExpiryWarningSheet(false);
        },
        () => setShowExpiryWarningSheet(false),
      )}
    </View>
  );
}
