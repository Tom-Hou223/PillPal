import { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { planApi, recordsApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { formatDate } from '../../utils/date';
import type { Plan, Record } from '../../types/api';
import './plan-detail.scss';

export default function PlanDetail() {
  const router = useRouter();
  const { id, memberId } = router.params;

  const isGuestMode = useUserStore((s) => s.isGuestMode);
  const currentFamily = useUserStore((s) => s.currentFamily);
  const isAdmin = currentFamily?.role === 'admin';

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [records, setRecords] = useState<Record[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'completed' | 'missed'>('all');

  // Load plan detail
  const loadPlanDetail = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await planApi.getList();
      if (res.code === 0) {
        const plans = res.data as Plan[];
        const found = plans.find((p) => String(p.id) === String(id));
        if (found) {
          setPlan(found);
        }
      }
    } catch {
      Taro.showToast({ title: '加载失败', icon: 'none' });
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Load records
  const loadRecords = useCallback(async () => {
    if (!id) return;
    try {
      const res = await recordsApi.getList();
      if (res.code === 0) {
        const allRecords = res.data as Record[];
        const filtered = allRecords.filter((r) => String(r.planId) === String(id));
        // Sort by date descending, then time
        filtered.sort((a, b) => {
          if (a.date !== b.date) return (b.date || '').localeCompare(a.date || '');
          return (b.time || '').localeCompare(a.time || '');
        });
        setRecords(filtered);
      }
    } catch {
      // ignore
    }
  }, [id]);

  useEffect(() => {
    loadPlanDetail();
    loadRecords();
  }, [loadPlanDetail, loadRecords]);

  // Action handlers
  const onComplete = async (recordId: number) => {
    try {
      await recordsApi.complete(recordId);
      Taro.showToast({ title: '已标记完成', icon: 'success' });
      loadRecords();
    } catch {
      Taro.showToast({ title: '操作失败', icon: 'none' });
    }
  };

  const onMiss = async (recordId: number) => {
    try {
      await recordsApi.miss(recordId);
      Taro.showToast({ title: '已标记错过', icon: 'none' });
      loadRecords();
    } catch {
      Taro.showToast({ title: '操作失败', icon: 'none' });
    }
  };

  const onEdit = () => {
    if (!plan) return;
    Taro.navigateTo({
      url: `/pages/plan-create/plan-create?id=${plan.id}`,
    });
  };

  const onDelete = () => {
    if (!plan) return;

    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能删除计划',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) Taro.navigateTo({ url: '/pages/login/login' });
        },
      });
      return;
    }

    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }

    Taro.showModal({
      title: '确认删除',
      content: `确定要删除"${plan.medicineName}"的计划吗？`,
      confirmText: '删除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: async (res) => {
        if (res.confirm) {
          try {
            await planApi.delete(plan.id);
            Taro.showToast({ title: '删除成功', icon: 'success' });
            setTimeout(() => Taro.navigateBack(), 1500);
          } catch {
            Taro.showToast({ title: '删除失败', icon: 'none' });
          }
        }
      },
    });
  };

  // Filter records by tab
  const filteredRecords =
    activeTab === 'all'
      ? records
      : records.filter((r) => r.status === activeTab);

  // Compute stats
  const totalRecords = records.length;
  const completedCount = records.filter((r) => r.status === 'completed').length;
  const missedCount = records.filter((r) => r.status === 'missed').length;
  const pendingCount = records.filter((r) => r.status === 'pending').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#27ae60';
      case 'missed':
        return '#e74c3c';
      default:
        return '#f39c12';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'missed':
        return '已错过';
      default:
        return '待用药';
    }
  };

  const getPlanStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return '进行中';
      case 'completed':
        return '已完成';
      case 'paused':
        return '已暂停';
      default:
        return status;
    }
  };

  const getPlanStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#27ae60';
      case 'completed':
        return '#999999';
      case 'paused':
        return '#f39c12';
      default:
        return '#666666';
    }
  };

  return (
    <View className="plan-detail-container">
      {/* Header */}
      <View className="detail-header">
        <View className="header-back" onClick={() => Taro.navigateBack()}>
          <Text className="back-arrow">&lt;</Text>
        </View>
        <Text className="header-title">计划详情</Text>
        {isAdmin && plan && (
          <View className="header-actions">
            <Text className="header-action-text" onClick={onEdit}>
              编辑
            </Text>
            <Text className="header-action-delete" onClick={onDelete}>
              删除
            </Text>
          </View>
        )}
        {!isAdmin && <View className="header-placeholder" />}
      </View>

      {/* Plan info card */}
      {plan && (
        <View className="plan-info-card">
          <View className="plan-info-header">
            <View className="plan-medicine-name">
              <View className="medicine-icon">
                <Text className="icon-pill" />
              </View>
              <View className="medicine-text">
                <Text className="plan-name">{plan.medicineName}</Text>
                <View
                  className="plan-status-badge"
                  style={{ backgroundColor: getPlanStatusColor(plan.status) }}
                >
                  <Text className="plan-status-text">
                    {getPlanStatusLabel(plan.status)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="plan-info-grid">
            <View className="plan-info-item">
              <Text className="info-label">成员</Text>
              <Text className="info-value">{plan.memberName}</Text>
            </View>
            <View className="plan-info-item">
              <Text className="info-label">频率</Text>
              <Text className="info-value">{plan.frequency || '-'}</Text>
            </View>
            <View className="plan-info-item">
              <Text className="info-label">开始日期</Text>
              <Text className="info-value">{plan.startDate || '-'}</Text>
            </View>
            <View className="plan-info-item">
              <Text className="info-label">结束日期</Text>
              <Text className="info-value">{plan.endDate || '未设置'}</Text>
            </View>
          </View>

          {plan.timeSlots && plan.timeSlots.length > 0 && (
            <View className="plan-time-slots">
              <Text className="info-label">用药时间</Text>
              <View className="time-slot-tags">
                {plan.timeSlots.map((slot, index) => (
                  <View className="time-slot-tag" key={index}>
                    <Text className="time-slot-tag-text">{slot}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      )}

      {/* Statistics bar */}
      {plan && (
        <View className="stats-bar">
          <View className="stat-item">
            <Text className="stat-number">{pendingCount}</Text>
            <Text className="stat-label">待用药</Text>
          </View>
          <View className="stat-divider" />
          <View className="stat-item">
            <Text className="stat-number stat--success">{completedCount}</Text>
            <Text className="stat-label">已完成</Text>
          </View>
          <View className="stat-divider" />
          <View className="stat-item">
            <Text className="stat-number stat--danger">{missedCount}</Text>
            <Text className="stat-label">已错过</Text>
          </View>
        </View>
      )}

      {/* Tab filter */}
      <View className="records-tabs">
        {(['all', 'pending', 'completed', 'missed'] as const).map((tab) => (
          <View
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <Text className="tab-label">
              {tab === 'all' ? '全部' : getStatusLabel(tab as 'pending' | 'completed' | 'missed')}
            </Text>
            <Text className="tab-count">
              {tab === 'all' ? totalRecords : records.filter((r) => r.status === tab).length}
            </Text>
          </View>
        ))}
      </View>

      {/* Records list */}
      <View className="records-list">
        {filteredRecords.length === 0 ? (
          <View className="empty-state">
            <Text className="empty-text">暂无记录</Text>
          </View>
        ) : (
          filteredRecords.map((record) => (
            <View className="record-item" key={record.id}>
              <View className="record-left">
                <View
                  className="record-status-dot"
                  style={{ backgroundColor: getStatusColor(record.status) }}
                />
                <View className="record-info">
                  <Text className="record-time">{record.time || '-'}</Text>
                  <Text className="record-date">{record.date || '-'}</Text>
                </View>
              </View>
              <View className="record-right">
                <View
                  className="record-status-tag"
                  style={{
                    backgroundColor:
                      record.status === 'completed'
                        ? '#e8f5e9'
                        : record.status === 'missed'
                          ? '#fce4ec'
                          : '#fff3e0',
                    color: getStatusColor(record.status),
                  }}
                >
                  <Text className="record-status-text">{getStatusLabel(record.status)}</Text>
                </View>
                {record.status === 'pending' && (
                  <View className="record-actions">
                    <Button className="record-btn record-btn--success" onClick={() => onComplete(record.id)}>
                      完成
                    </Button>
                    <Button className="record-btn record-btn--danger" onClick={() => onMiss(record.id)}>
                      错过
                    </Button>
                  </View>
                )}
              </View>
            </View>
          ))
        )}
      </View>

      {/* Loading */}
      {loading && (
        <View className="loading-overlay">
          <Text className="loading-text">加载中...</Text>
        </View>
      )}
    </View>
  );
}
