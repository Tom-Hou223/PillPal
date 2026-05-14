import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { useUserStore } from '../../stores/user.store';
import { medicineApi } from '../../services/api';
import { UserManager } from '../../services/api';
import type { Medicine, ApiResponse } from '../../types/api';
import './expiry-warning.scss';

interface MedicineWithDays extends Medicine {
  expiryDate: string;
  daysToExpiry: number;
}

export default function ExpiryWarning() {
  const { isLoggedIn, isGuestMode, isSeniorMode } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'warning' | 'expired'>('all');

  const [warningList, setWarningList] = useState<MedicineWithDays[]>([]);
  const [expiredList, setExpiredList] = useState<MedicineWithDays[]>([]);

  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineWithDays | null>(null);

  const getSystemInfo = useCallback(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const loadWarningData = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = (await medicineApi.getList()) as unknown as ApiResponse<Medicine[]>;
      const medicines = res.data || [];
      const today = new Date();

      const warnList: MedicineWithDays[] = [];
      const expList: MedicineWithDays[] = [];

      medicines.forEach((medicine: any) => {
        const expiryDate = new Date(medicine.createdAt || today);
        expiryDate.setDate(expiryDate.getDate() + (medicine.daysToExpiry || 365));

        const daysToExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        const medicineWithDays: MedicineWithDays = {
          ...medicine,
          expiryDate: expiryDate.toISOString().split('T')[0],
          daysToExpiry,
        };

        if (daysToExpiry <= 0) {
          expList.push(medicineWithDays);
        } else if (daysToExpiry <= 30) {
          warnList.push(medicineWithDays);
        }
      });

      warnList.sort((a, b) => a.daysToExpiry - b.daysToExpiry);
      expList.sort((a, b) => a.daysToExpiry - b.daysToExpiry);

      setWarningList(warnList);
      setExpiredList(expList);
    } catch {
      // 使用空数据
      setWarningList([]);
      setExpiredList([]);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    getSystemInfo();
    loadWarningData();
  }, [getSystemInfo]);

  useDidShow(() => {
    getSystemInfo();
    loadWarningData();
  });

  usePullDownRefresh(() => {
    loadWarningData();
    Taro.stopPullDownRefresh();
  });

  const onMedicineClick = (medicine: MedicineWithDays) => {
    setSelectedMedicine(medicine);
    setShowDetailDialog(true);
  };

  const onEditMedicine = () => {
    if (!selectedMedicine) return;
    Taro.navigateTo({
      url: `/pages/medicine-detail/medicine-detail?id=${selectedMedicine.id}`,
    });
    setShowDetailDialog(false);
    setSelectedMedicine(null);
  };

  const onDeleteMedicine = () => {
    if (!selectedMedicine) return;

    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能删除药品',
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
      title: '确认删除',
      content: `确定要删除"${selectedMedicine.name}"吗？`,
      confirmText: '删除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: async (res) => {
        if (res.confirm) {
          try {
            await medicineApi.delete(selectedMedicine.id);
            Taro.showToast({ title: '删除成功', icon: 'success' });
            setShowDetailDialog(false);
            setSelectedMedicine(null);
            loadWarningData();
          } catch {
            Taro.showToast({ title: '删除失败', icon: 'none' });
          }
        }
      },
    });
  };

  const onRefresh = () => {
    loadWarningData();
  };

  const getFilteredList = (): { warning: MedicineWithDays[]; expired: MedicineWithDays[] } => {
    return {
      warning: filterType === 'all' || filterType === 'warning' ? warningList : [],
      expired: filterType === 'all' || filterType === 'expired' ? expiredList : [],
    };
  };

  const filtered = getFilteredList();
  const isEmpty = warningList.length === 0 && expiredList.length === 0 && !loading;

  const tabList: { name: string; title: string }[] = [
    { name: 'all', title: '全部' },
    { name: 'warning', title: '临期预警' },
    { name: 'expired', title: '已过期' },
  ];

  const renderMedicineItem = (item: MedicineWithDays, type: 'warning' | 'expired') => (
    <View
      key={item.id}
      className={`medicine-item ${type}`}
      onClick={() => onMedicineClick(item)}
    >
      <View className="medicine-header">
        <Text className="medicine-name">{item.name}</Text>
        <Text className={`medicine-tag tag-${type}`}>
          {type === 'warning'
            ? `${item.daysToExpiry}天后过期`
            : `已过期${Math.abs(item.daysToExpiry)}天`}
        </Text>
      </View>
      <View className="medicine-info">
        <Text className="info-text">规格：{item.specification || '-'}</Text>
        <Text className="info-text">库存：{item.stock}{item.unit || ''}</Text>
      </View>
      <View className="medicine-footer">
        <Text className="expiry-text">过期日期：{item.expiryDate}</Text>
        <Text className="arrow-icon">&gt;</Text>
      </View>
    </View>
  );

  return (
    <View className="expiry-warning-container">
      <NavBar title="过期预警" showBack />

      {/* Filter Bar */}
      <View className="filter-bar" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx)` }}>
        <View className="custom-tabs">
          {tabList.map((tab) => (
            <View
              key={tab.name}
              className={`custom-tab-item ${filterType === tab.name ? 'active' : ''}`}
              onClick={() => setFilterType(tab.name as any)}
            >
              <Text className={`custom-tab-text ${filterType === tab.name ? 'active' : ''}`}>
                {tab.title}
              </Text>
              {filterType === tab.name && <View className="tab-underline" />}
            </View>
          ))}
        </View>
      </View>

      <View className="content">
        {(filterType === 'all' || filterType === 'warning') && warningList.length > 0 && (
          <View className="warning-section">
            <View className="section-title">
              <View>
                <Text className="title-text">临期预警（{warningList.length}）</Text>
                <Text className="title-desc">30天内即将过期</Text>
              </View>
            </View>
            <View className="medicine-list">
              {warningList.map((item) => renderMedicineItem(item, 'warning'))}
            </View>
          </View>
        )}

        {(filterType === 'all' || filterType === 'expired') && expiredList.length > 0 && (
          <View className="expired-section">
            <View className="section-title">
              <View>
                <Text className="title-text">已过期（{expiredList.length}）</Text>
                <Text className="title-desc">请及时处理</Text>
              </View>
            </View>
            <View className="medicine-list">
              {expiredList.map((item) => renderMedicineItem(item, 'expired'))}
            </View>
          </View>
        )}

        {isEmpty && (
          <View className="empty-state">
            <Text className="empty-icon">&#128269;</Text>
            <Text className="empty-text">暂无预警药品</Text>
          </View>
        )}
      </View>

      {/* 详情弹窗 */}
      {showDetailDialog && selectedMedicine && (
        <View className="dialog-overlay" onClick={() => { setShowDetailDialog(false); setSelectedMedicine(null); }}>
          <View className="detail-dialog" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-header">
              <Text className="dialog-title">药品详情</Text>
              <View className="dialog-close" onClick={() => { setShowDetailDialog(false); setSelectedMedicine(null); }}>
                <Text>&times;</Text>
              </View>
            </View>

            <View className="dialog-body">
              <View className="detail-item">
                <Text className="label">药品名称</Text>
                <Text className="value">{selectedMedicine.name}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">生产厂家</Text>
                <Text className="value">{selectedMedicine.manufacturer || '-'}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">规格</Text>
                <Text className="value">{selectedMedicine.specification || '-'}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">分类</Text>
                <Text className="value">{selectedMedicine.category || '-'}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">库存</Text>
                <Text className="value">{selectedMedicine.stock}{selectedMedicine.unit || ''}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">过期日期</Text>
                <Text className="value expiry">{selectedMedicine.expiryDate}</Text>
              </View>
              <View className="detail-item">
                <Text className="label">状态</Text>
                <Text className={`status-tag ${selectedMedicine.daysToExpiry <= 0 ? 'expired' : 'warning'}`}>
                  {selectedMedicine.daysToExpiry <= 0 ? '已过期' : '临期'}
                </Text>
              </View>
            </View>

            <View className="dialog-footer">
              <View className="dialog-btn btn-cancel" onClick={() => { setShowDetailDialog(false); setSelectedMedicine(null); }}>
                <Text>取消</Text>
              </View>
              <View className="dialog-btn btn-edit" onClick={onEditMedicine}>
                <Text>编辑</Text>
              </View>
              <View className="dialog-btn btn-delete" onClick={onDeleteMedicine}>
                <Text>删除</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
