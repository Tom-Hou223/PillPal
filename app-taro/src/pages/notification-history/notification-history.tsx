import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import './notification-history.scss';

interface NotificationItem {
  id: number;
  type: 'reminder' | 'expiry' | 'system';
  title: string;
  content: string;
  time: string;
  read: boolean;
}

// 模拟通知数据
const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    type: 'reminder',
    title: '用药提醒',
    content: '阿莫西林胶囊 需要服用了',
    time: '2026-05-14 08:00',
    read: true,
  },
  {
    id: 2,
    type: 'expiry',
    title: '过期预警',
    content: '感冒灵颗粒 将在7天后过期',
    time: '2026-05-13 10:30',
    read: false,
  },
  {
    id: 3,
    type: 'system',
    title: '系统通知',
    content: '药品库已更新，请查看最新药品信息',
    time: '2026-05-12 14:00',
    read: true,
  },
  {
    id: 4,
    type: 'reminder',
    title: '用药提醒',
    content: '布洛芬缓释胶囊 请在饭后服用',
    time: '2026-05-12 08:00',
    read: true,
  },
  {
    id: 5,
    type: 'expiry',
    title: '过期预警',
    content: '板蓝根颗粒 已在3天前过期',
    time: '2026-05-11 09:00',
    read: false,
  },
];

export default function NotificationHistory() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getSystemInfo = useCallback(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const loadNotifications = useCallback(() => {
    setLoading(true);

    // 从本地存储加载通知历史
    try {
      const saved = Taro.getStorageSync('notificationHistory');
      if (saved && Array.isArray(saved)) {
        setNotifications(saved);
      } else {
        setNotifications(MOCK_NOTIFICATIONS);
      }
    } catch {
      setNotifications(MOCK_NOTIFICATIONS);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getSystemInfo();
    loadNotifications();
  }, [getSystemInfo, loadNotifications]);

  useDidShow(() => {
    getSystemInfo();
    loadNotifications();
  });

  usePullDownRefresh(() => {
    loadNotifications();
    Taro.stopPullDownRefresh();
  });

  const onClearAll = () => {
    Taro.showModal({
      title: '清除通知',
      content: '确定要清除所有通知记录吗？',
      confirmText: '清除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          setNotifications([]);
          Taro.removeStorageSync('notificationHistory');
          Taro.showToast({ title: '已清除', icon: 'success' });
        }
      },
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reminder': return '&#128276;';
      case 'expiry': return '&#9888;';
      case 'system': return '&#8505;';
      default: return '&#128276;';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'reminder': return '#27AE60';
      case 'expiry': return '#F39C12';
      case 'system': return '#3498DB';
      default: return '#999';
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <View className="notification-history-container">
      <NavBar title="通知历史" showBack />

      <View className="content" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 24rpx)` }}>
        {/* 头部统计 */}
        <View className="notification-header">
          <View className="header-info">
            <Text className="header-title">通知记录</Text>
            <Text className="header-count">共 {notifications.length} 条</Text>
            {unreadCount > 0 && (
              <Text className="header-unread">（{unreadCount} 条未读）</Text>
            )}
          </View>
          {notifications.length > 0 && (
            <View className="clear-btn" onClick={onClearAll}>
              <Text className="clear-btn-text">清除全部</Text>
            </View>
          )}
        </View>

        {/* 通知列表 */}
        <View className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((item) => (
              <View key={item.id} className={`notification-item ${!item.read ? 'unread' : ''}`}>
                <View className="notification-icon" style={{ color: getTypeColor(item.type) }}>
                  {/* eslint-disable-next-line */}
                  <Text>{getTypeIcon(item.type)}</Text>
                </View>
                <View className="notification-body">
                  <View className="notification-top">
                    <Text className="notification-title">{item.title}</Text>
                    {!item.read && <View className="unread-dot" />}
                  </View>
                  <Text className="notification-content">{item.content}</Text>
                  <Text className="notification-time">{item.time}</Text>
                </View>
                <View className="notification-type" style={{ background: getTypeColor(item.type) + '15' }}>
                  <Text style={{ color: getTypeColor(item.type) }}>
                    {item.type === 'reminder' ? '提醒' : item.type === 'expiry' ? '预警' : '系统'}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <View className="empty-state">
              <Text className="empty-icon">&#128277;</Text>
              <Text className="empty-text">暂无通知记录</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
