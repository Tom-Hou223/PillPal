import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { medicineApi, planApi, recordsApi } from '../../services/api';
import type { Medicine, Plan, Record, ApiResponse } from '../../types/api';
import './export.scss';

type ExportType = 'medicine' | 'plan' | 'record';

export default function Export() {
  const [loading, setLoading] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [exportType, setExportType] = useState<ExportType>('medicine');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  useEffect(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  // 辅助函数
  const getMedicineStatusText = (status: string): string => {
    switch (status) {
      case 'normal': return '正常';
      case 'warning': return '临期';
      case 'expired': return '过期';
      default: return '未知';
    }
  };

  const getRecordStatusText = (status: string): string => {
    switch (status) {
      case 'completed': return '已完成';
      case 'missed': return '漏服';
      case 'pending': return '待服用';
      default: return '未知';
    }
  };

  const generateMedicineCSV = (medicines: Medicine[]): string => {
    let csv = '药品名称,生产厂家,规格,用量,库存,单位,过期日期,类别,状态,备注\n';
    medicines.forEach((m: any) => {
      const row = [
        m.name || '',
        m.manufacturer || '',
        m.specification || '',
        m.dosage || '',
        m.stock || 0,
        m.unit || '',
        m.expiryDate || '',
        m.category || '',
        getMedicineStatusText(m.status),
        m.note || '',
      ];
      csv += row.map((item) => `"${item}"`).join(',') + '\n';
    });
    return csv;
  };

  const generatePlanCSV = (plans: Plan[]): string => {
    let csv = '药品名称,家庭成员,频率,开始日期,结束日期,状态,备注\n';
    plans.forEach((p: any) => {
      const row = [
        p.medicineName || '',
        p.memberName || '',
        p.frequency || '',
        p.startDate || '',
        p.endDate || '',
        p.status === 'active' ? '进行中' : '已结束',
        p.note || '',
      ];
      csv += row.map((item) => `"${item}"`).join(',') + '\n';
    });
    return csv;
  };

  const generateRecordCSV = (records: Record[]): string => {
    let csv = '药品名称,家庭成员,时间,日期,状态,备注\n';
    records.forEach((r: any) => {
      const row = [
        r.medicineName || '',
        r.memberName || '',
        r.time || '',
        r.date || '',
        getRecordStatusText(r.status),
        r.supplement || '',
      ];
      csv += row.map((item) => `"${item}"`).join(',') + '\n';
    });
    return csv;
  };

  const showResultModal = (fileName: string, csvData: string) => {
    Taro.showModal({
      title: '导出成功',
      content: `文件 ${fileName} 已生成，共 ${csvData.split('\n').length - 2} 条记录`,
      showCancel: false,
    });
  };

  const onExport = async () => {
    setLoading(true);

    try {
      switch (exportType) {
        case 'medicine': {
          const res = (await medicineApi.getList()) as unknown as ApiResponse<Medicine[]>;
          if (res.code === 0) {
            const csvData = generateMedicineCSV(res.data);
            Taro.setStorageSync('exportData_medicine', csvData);
            showResultModal('药品数据.csv', csvData);
          } else {
            throw new Error('获取药品数据失败');
          }
          break;
        }
        case 'plan': {
          const res = (await planApi.getList()) as unknown as ApiResponse<Plan[]>;
          if (res.code === 0) {
            const csvData = generatePlanCSV(res.data);
            Taro.setStorageSync('exportData_plan', csvData);
            showResultModal('用药计划.csv', csvData);
          } else {
            throw new Error('获取用药计划数据失败');
          }
          break;
        }
        case 'record': {
          if (!dateRange.start || !dateRange.end) {
            Taro.showToast({ title: '请选择日期范围', icon: 'none' });
            setLoading(false);
            return;
          }
          const res = (await recordsApi.getList()) as unknown as ApiResponse<Record[]>;
          if (res.code === 0) {
            const csvData = generateRecordCSV(res.data);
            Taro.setStorageSync('exportData_record', csvData);
            showResultModal(`用药记录_${dateRange.start}_${dateRange.end}.csv`, csvData);
          } else {
            throw new Error('获取用药记录数据失败');
          }
          break;
        }
      }
      Taro.showToast({ title: '导出成功', icon: 'success' });
    } catch (error) {
      console.error('导出失败:', error);
      Taro.showToast({ title: '导出失败', icon: 'none' });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (val: string) => {
    // 将日期选择器返回的值格式化
    return val;
  };

  const exportTypes = [
    { name: 'medicine' as ExportType, title: '药品数据' },
    { name: 'plan' as ExportType, title: '用药计划' },
    { name: 'record' as ExportType, title: '用药记录' },
  ];

  return (
    <View className="export-container">
      <NavBar title="数据导出" showBack />

      <View className="content" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 24rpx)` }}>
        {/* 导出类型选择 */}
        <View className="section">
          <View className="section-title">
            <Text>导出类型</Text>
          </View>
          <View className="custom-tabs">
            {exportTypes.map((item) => (
              <View
                key={item.name}
                className={`custom-tab-item ${exportType === item.name ? 'active' : ''}`}
                onClick={() => setExportType(item.name)}
              >
                <Text className={`custom-tab-text ${exportType === item.name ? 'active' : ''}`}>
                  {item.title}
                </Text>
                {exportType === item.name && <View className="tab-underline" />}
              </View>
            ))}
          </View>
        </View>

        {/* 日期范围（仅记录导出显示） */}
        {exportType === 'record' && (
          <View className="section">
            <View className="section-title">
              <Text>日期范围</Text>
            </View>
            <View className="date-range">
              <View className="date-item" onClick={() => setShowStartPicker(true)}>
                <Text className="date-label">开始日期</Text>
                <View className="date-picker-value">
                  <Text className={`date-text ${dateRange.start ? '' : 'placeholder'}`}>
                    {dateRange.start || '请选择开始日期'}
                  </Text>
                </View>
              </View>
              <View className="date-item" onClick={() => setShowEndPicker(true)}>
                <Text className="date-label">结束日期</Text>
                <View className="date-picker-value">
                  <Text className={`date-text ${dateRange.end ? '' : 'placeholder'}`}>
                    {dateRange.end || '请选择结束日期'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* 导出信息 */}
        <View className="section">
          <View className="info-card">
            <Text className="info-title">导出说明</Text>
            <View className="info-list">
              <View className="info-item">
                <Text className="info-dot">&#8226;</Text>
                <Text className="info-text">数据将以 CSV 格式导出</Text>
              </View>
              <View className="info-item">
                <Text className="info-dot">&#8226;</Text>
                <Text className="info-text">可在 Excel 或其他表格软件中打开</Text>
              </View>
              <View className="info-item">
                <Text className="info-dot">&#8226;</Text>
                <Text className="info-text">导出数据保存在本地存储中</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 导出按钮 */}
        <View className="actions">
          <View className={`btn btn-primary ${loading ? 'disabled' : ''}`} onClick={loading ? undefined : onExport}>
            {loading ? (
              <View className="btn-loading">
                <View className="mini-spinner" />
                <Text className="btn-text">导出中...</Text>
              </View>
            ) : (
              <Text className="btn-text">开始导出</Text>
            )}
          </View>
        </View>

        {/* 日期选择器弹窗 */}
        {showStartPicker && (
          <View className="sheet-overlay" onClick={() => setShowStartPicker(false)}>
            <View className="date-picker-container" onClick={(e) => e.stopPropagation()}>
              <View className="picker-header">
                <Text className="picker-cancel" onClick={() => setShowStartPicker(false)}>取消</Text>
                <Text className="picker-title">选择开始日期</Text>
                <Text className="picker-confirm" onClick={() => setShowStartPicker(false)}>确定</Text>
              </View>
              <View className="picker-body">
                {/* @ts-ignore */}
                <picker
                  mode="date"
                  value={dateRange.start}
                  onChange={(e) => {
                    setDateRange((r) => ({ ...r, start: e.detail.value }));
                  }}
                >
                  <View className="picker-input-area">
                    <Text>{dateRange.start || '请选择日期'}</Text>
                  </View>
                </picker>
              </View>
            </View>
          </View>
        )}

        {showEndPicker && (
          <View className="sheet-overlay" onClick={() => setShowEndPicker(false)}>
            <View className="date-picker-container" onClick={(e) => e.stopPropagation()}>
              <View className="picker-header">
                <Text className="picker-cancel" onClick={() => setShowEndPicker(false)}>取消</Text>
                <Text className="picker-title">选择结束日期</Text>
                <Text className="picker-confirm" onClick={() => setShowEndPicker(false)}>确定</Text>
              </View>
              <View className="picker-body">
                {/* @ts-ignore */}
                <picker
                  mode="date"
                  value={dateRange.end}
                  onChange={(e) => {
                    setDateRange((r) => ({ ...r, end: e.detail.value }));
                  }}
                >
                  <View className="picker-input-area">
                    <Text>{dateRange.end || '请选择日期'}</Text>
                  </View>
                </picker>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
