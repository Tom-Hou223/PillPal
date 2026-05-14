import { useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Input, Image } from '@tarojs/components';
import Taro, { useDidShow, useLoad, usePullDownRefresh } from '@tarojs/taro';
import { useUserStore } from '../../stores/user.store';
import { FamilyManager } from '../../services/api';
import { medicineApi } from '../../services/api';
import { formatDate, getDaysInMonth, getFirstDayOfWeek } from '../../utils/date';
import type { Medicine } from '../../types/api';
import { setTraceCodeImage } from '../../utils/traceImage';
import CustomTabBar from '../../custom-tab-bar';
import './medicine.scss';

interface FormData {
  name: string;
  manufacturer: string;
  specification: string;
  barcode: string;
  category: string;
  stock: number;
  unit: string;
  expiryDate: string;
  dosage: string;
}

const CATEGORIES = [
  { label: '抗生素', value: '抗生素' },
  { label: '解热镇痛', value: '解热镇痛' },
  { label: '感冒用药', value: '感冒用药' },
  { label: '维生素', value: '维生素' },
  { label: '止咳化痰', value: '止咳化痰' },
];

interface MedicineItem extends Medicine {
  statusColor?: string;
  statusText?: string;
}

export default function MedicinePage() {
  const isGuestMode = useUserStore(s => s.isGuestMode);
  const isAdmin = FamilyManager.isAdmin();

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<MedicineItem[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  // Dialog state
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Calendar for expiry date
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [calMonth, setCalMonth] = useState(new Date().getMonth() + 1);
  const [calSelected, setCalSelected] = useState('');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    manufacturer: '',
    specification: '',
    barcode: '',
    category: '抗生素',
    stock: 1,
    unit: '盒',
    expiryDate: '',
    dosage: '',
  });

  // Photo buffer
  const [photoBuffer, setPhotoBuffer] = useState<string[]>([]);
  const [showPhotoBufferModal, setShowPhotoBufferModal] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [lastPhotoTime, setLastPhotoTime] = useState(0);

  // ========== Data loading ==========
  const loadMedicines = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res: any = await medicineApi.getList();
      let list: MedicineItem[] = res.data || [];

      const keyword = searchKeyword.trim().toLowerCase();
      if (keyword) {
        list = list.filter(
          (med) =>
            (med.name || '').toLowerCase().includes(keyword) ||
            (med.manufacturer || '').toLowerCase().includes(keyword) ||
            (med.category || '').toLowerCase().includes(keyword)
        );
      }

      const currentDate = new Date();
      list = list.map((med) => {
        let statusColor = 'success';
        let statusText = '正常';

        try {
          if (med.expiryDate) {
            const expiryDate = new Date(med.expiryDate);
            const timeDiff = expiryDate.getTime() - currentDate.getTime();
            const daysToExpiry = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            if (daysToExpiry <= 0) {
              statusColor = 'danger';
              statusText = '过期';
            } else if (daysToExpiry <= 7) {
              statusColor = 'warning';
              statusText = '临期';
            } else if (daysToExpiry <= 90) {
              statusColor = 'default';
              statusText = '临期';
            }
          }
        } catch {
          statusColor = 'success';
          statusText = '正常';
        }

        return { ...med, statusColor, statusText };
      });

      setMedicines(list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Taro.showToast({ title: '加载失败', icon: 'none' });
    }
  }, [searchKeyword, loading]);

  // ========== Handlers ==========
  const handleSearchInput = useCallback(
    (value: string) => {
      setSearchKeyword(value);
    },
    []
  );

  const handleSearch = useCallback(() => {
    loadMedicines();
  }, [loadMedicines]);

  const handleAddMedicine = useCallback(() => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能添加药品',
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
    setEditingMedicine(null);
    setFormData({
      name: '',
      manufacturer: '',
      specification: '',
      barcode: '',
      category: '抗生素',
      stock: 1,
      unit: '盒',
      expiryDate: '',
      dosage: '',
    });
    setShowAddDialog(true);
  }, [isGuestMode, isAdmin]);

  const handleEditMedicine = useCallback(
    (medicine: Medicine) => {
      if (isGuestMode) {
        Taro.showModal({
          title: '登录提示',
          content: '需要登录才能编辑药品',
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
      setEditingMedicine(medicine);
      setFormData({
        name: (medicine as any).name || '',
        manufacturer: (medicine as any).manufacturer || '',
        specification: (medicine as any).specification || '',
        barcode: (medicine as any).barcode || '',
        category: (medicine as any).category || '抗生素',
        stock: (medicine as any).stock || 1,
        unit: (medicine as any).unit || '盒',
        expiryDate: (medicine as any).expiryDate || '',
        dosage: (medicine as any).dosage || '',
      });
      setShowAddDialog(true);
    },
    [isGuestMode, isAdmin]
  );

  const handleDeleteMedicine = useCallback(
    (medicine: Medicine) => {
      if (isGuestMode) {
        Taro.showModal({
          title: '登录提示',
          content: '需要登录才能删除药品',
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
        content: `确定要删除"${(medicine as any).name}"吗？`,
        confirmText: '删除',
        confirmColor: '#e74c3c',
        cancelText: '取消',
        success: async (res) => {
          if (res.confirm) {
            try {
              await medicineApi.delete(medicine.id);
              Taro.showToast({ title: '删除成功', icon: 'success' });
              loadMedicines();
            } catch {
              Taro.showToast({ title: '删除失败', icon: 'none' });
            }
          }
        },
      });
    },
    [isGuestMode, isAdmin, loadMedicines]
  );

  const handleCloseDialog = useCallback(() => {
    setShowAddDialog(false);
    setEditingMedicine(null);
    setShowDatePicker(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    const { name, expiryDate } = formData;

    if (!name || !name.trim()) {
      Taro.showToast({ title: '请输入药品名称', icon: 'none' });
      return;
    }
    if (!expiryDate) {
      Taro.showToast({ title: '请选择过期日期', icon: 'none' });
      return;
    }

    const stockNum = parseInt(String(formData.stock));
    if (isNaN(stockNum) || stockNum < 0) {
      Taro.showToast({ title: '请输入有效的库存数量', icon: 'none' });
      return;
    }
    if (!formData.unit || !formData.unit.trim()) {
      Taro.showToast({ title: '请输入药品单位', icon: 'none' });
      return;
    }

    Taro.showLoading({ title: '保存中...', mask: true });

    const medicineData = {
      name: (name || '').trim(),
      manufacturer: (formData.manufacturer || '').trim(),
      specification: (formData.specification || '').trim(),
      category: formData.category || '其他',
      stock: stockNum,
      unit: formData.unit.trim(),
      expiryDate: formData.expiryDate,
      dosage: (formData.dosage || '').trim(),
    };

    try {
      if (editingMedicine) {
        await medicineApi.update(editingMedicine.id, medicineData);
      } else {
        await medicineApi.add(medicineData);
      }
      Taro.hideLoading();
      Taro.showToast({ title: '保存成功', icon: 'success' });
      handleCloseDialog();
      loadMedicines();
    } catch {
      Taro.hideLoading();
    }
  }, [formData, editingMedicine, handleCloseDialog, loadMedicines]);

  // Category picker
  const handleCategorySelect = useCallback(() => {
    Taro.showActionSheet({
      itemList: CATEGORIES.map((c) => c.label),
      success: (res) => {
        setFormData((prev) => ({ ...prev, category: CATEGORIES[res.tapIndex].value }));
      },
    });
  }, []);

  // Expiry date selection
  const handleExpiryDateSelect = useCallback(() => {
    const now = new Date();
    setCalYear(now.getFullYear());
    setCalMonth(now.getMonth() + 1);
    setCalSelected(formData.expiryDate || '');
    setShowDatePicker(true);
  }, [formData.expiryDate]);

  const handleCalendarDaySelect = useCallback(
    (day: number) => {
      const dateStr = `${calYear}-${String(calMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      setCalSelected(dateStr);
    },
    [calYear, calMonth]
  );

  const handleCalendarConfirm = useCallback(() => {
    if (calSelected) {
      setFormData((prev) => ({ ...prev, expiryDate: calSelected }));
    }
    setShowDatePicker(false);
  }, [calSelected]);

  // Scan / photo — regular functions to avoid stale closure issues
  const handleScanCode = () => {
    Taro.showActionSheet({
      itemList: ['药品溯源', '拍照识别', '从相册选择'],
      success: (res) => {
        if (res.tapIndex === 0) { handleTraceSource(); }
        else if (res.tapIndex === 1) { takePhoto(); }
        else if (res.tapIndex === 2) { chooseImage(); }
      },
    });
  };

  const handleTraceSource = () => {
    Taro.showActionSheet({
      itemList: ['拍照溯源', '打开相册'],
      success: (res) => {
        const sourceType = res.tapIndex === 0 ? 'camera' : 'album';
        Taro.chooseImage({
          count: 1, sizeType: ['original', 'compressed'], sourceType: [sourceType],
          success: (chooseRes) => { recognizeTraceCode(chooseRes.tempFilePaths[0]); },
          fail: () => { Taro.showToast({ title: '选择图片失败', icon: 'none' }); },
        });
      },
    });
  };

  // 辅助函数：从 API 响应中提取真实数据（处理嵌套结构）
  const getActualTraceData = (res: any) => {
    if (res.code === 0 && res.data) {
      if (res.data.success && res.data.data) {
        return res.data.data;
      }
      return res.data;
    }
    return null;
  };

  const recognizeTraceCode = async (imagePath: string) => {
    Taro.showLoading({ title: '识别中...' });
    try {
      const res: any = await medicineApi.recognizeImage(imagePath);
      Taro.hideLoading();
      
      const actualData = getActualTraceData(res);
      if (actualData && actualData.traceCode) {
        // 保存图片到全局数据
        setTraceCodeImage(imagePath);
        Taro.navigateTo({
          url: `/pages/trace-confirm/trace-confirm?traceCode=${encodeURIComponent(actualData.traceCode)}`,
        });
      } else {
        Taro.showModal({
          title: '提示', content: '未识别到有效溯源码，请重新拍摄',
          confirmText: '重新拍摄', cancelText: '取消',
          success: (modalRes) => { if (modalRes.confirm) handleTraceSource(); },
        });
      }
    } catch {
      Taro.hideLoading();
      Taro.showModal({
        title: '提示', content: '识别失败，请重新拍摄',
        confirmText: '重新拍摄', cancelText: '取消',
        success: (modalRes) => { if (modalRes.confirm) handleTraceSource(); },
      });
    }
  };

  const takePhoto = () => {
    if (isRecognizing) { Taro.showToast({ title: '正在识别中...', icon: 'none' }); return; }
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    if (photoBuffer.length > 0) {
      if (lastPhotoTime > 0 && now - lastPhotoTime > fiveMinutes) {
        setPhotoBuffer([]); setLastPhotoTime(0);
        Taro.showToast({ title: '已超时，重新拍照', icon: 'none' });
      } else { setShowPhotoBufferModal(true); return; }
    }
    const remainingCount = 9 - photoBuffer.length;
    if (remainingCount <= 0) { Taro.showToast({ title: '最多9张照片', icon: 'none' }); return; }
    Taro.chooseImage({
      count: remainingCount, sizeType: ['original', 'compressed'], sourceType: ['camera'],
      success: (res) => {
        setPhotoBuffer([...photoBuffer, ...res.tempFilePaths]);
        setShowPhotoBufferModal(true); setLastPhotoTime(Date.now());
      },
      fail: () => { Taro.showToast({ title: '拍照失败', icon: 'none' }); },
    });
  };

  const chooseImage = () => {
    if (isRecognizing) { Taro.showToast({ title: '正在识别中...', icon: 'none' }); return; }
    Taro.chooseImage({
      count: 9, sizeType: ['original', 'compressed'], sourceType: ['album'],
      success: (res) => { recognizeMultiImage(res.tempFilePaths); },
      fail: () => { Taro.showToast({ title: '选择图片失败', icon: 'none' }); },
    });
  };

  const recognizeMultiImage = async (imagePaths: string[]) => {
    console.log('[识别] 开始识别，图片路径:', imagePaths);
    if (!imagePaths || imagePaths.length === 0) return;
    setIsRecognizing(true);
    Taro.showLoading({ title: '识别中...' });

    // 提取真实数据的辅助函数
    const getActualData = (res: any) => {
      // 处理响应格式: { code: 0, data: { success: true, data: {...} } }
      if (res.code === 0 && res.data) {
        if (res.data.success && res.data.data) {
          return res.data.data;
        }
        return res.data;
      }
      return null;
    };

    if (imagePaths.length === 1) {
      try {
        console.log('[识别] 调用 API');
        const res: any = await medicineApi.recognizeImage(imagePaths[0]);
        console.log('[识别] API 响应:', res);
        
        // 修复数据结构
        const actualData = getActualData(res);
        const fixedRes = { code: 0, data: actualData };
        
        Taro.hideLoading();
        setIsRecognizing(false);
        console.log('[识别] 修复后的响应:', fixedRes);
        showRecognitionResult(fixedRes);
      } catch (err) {
        console.error('[识别] 错误:', err);
        Taro.hideLoading();
        setIsRecognizing(false);
        showRecognitionResult({
          code: 0,
          data: { name: '', manufacturer: '', specification: '', category: '其他', dosage: '', expiryDate: '' }
        });
      }
      return;
    }

    // Multi image - sequential
    let mergedResult: any = {
      name: '',
      manufacturer: '',
      specification: '',
      category: '其他',
      dosage: '',
      expiryDate: '',
    };

    for (let i = 0; i < imagePaths.length; i++) {
      Taro.showLoading({ title: `识别中... ${i + 1}/${imagePaths.length}` });
      try {
        const res: any = await medicineApi.recognizeImage(imagePaths[i]);
        console.log(`[识别] 图片 ${i+1} 响应:`, res);
        
        const actualData = getActualData(res);
        if (actualData) {
          if (!mergedResult.name && actualData.name) mergedResult.name = actualData.name;
          if (!mergedResult.manufacturer && actualData.manufacturer) mergedResult.manufacturer = actualData.manufacturer;
          if (!mergedResult.specification && actualData.specification) mergedResult.specification = actualData.specification;
          if (mergedResult.category === '其他' && actualData.category !== '其他') mergedResult.category = actualData.category;
          if (!mergedResult.dosage && actualData.dosage) mergedResult.dosage = actualData.dosage;
          if (!mergedResult.expiryDate && actualData.expiryDate) mergedResult.expiryDate = actualData.expiryDate;
        }
      } catch (err) {
        console.error(`[识别] 图片 ${i+1} 错误:`, err);
      }
    }
    console.log('[识别] 合并后的结果:', mergedResult);
    Taro.hideLoading();
    setIsRecognizing(false);
    showRecognitionResult({ code: 0, data: mergedResult });
  };

  const showRecognitionResult = (result: any) => {
    const data = result?.code === 0 ? result.data : null;
    if (!data) {
      Taro.showModal({
        title: '识别失败',
        content: '未能识别药品信息，请手动输入',
        confirmText: '手动输入',
        cancelText: '重新识别',
        success: (res) => {
          if (res.confirm) handleAddMedicine();
          else handleScanCode();
        },
      });
      return;
    }

    const hasAnyData = data.name || data.manufacturer || data.specification || data.dosage || data.expiryDate;

    setEditingMedicine(null);
    setFormData({
      name: data.name || '',
      manufacturer: data.manufacturer || '',
      specification: data.specification || '',
      barcode: data.barcode || '',
      category: data.category && data.category !== '其他' ? data.category : '抗生素',
      stock: 1,
      unit: '盒',
      expiryDate: data.expiryDate || '',
      dosage: data.dosage || '',
    });

    if (hasAnyData) {
      Taro.showToast({ title: '识别成功，请核对信息', icon: 'success', duration: 2000 });
    }
    setShowAddDialog(true);
    setPhotoBuffer([]);
    setShowPhotoBufferModal(false);
  };

  // Photo buffer handlers
  const handleContinueAddPhoto = () => {
    const remaining = 9 - photoBuffer.length;
    if (remaining <= 0) { Taro.showToast({ title: '最多9张照片', icon: 'none' }); return; }
    Taro.chooseImage({
      count: remaining, sizeType: ['original', 'compressed'], sourceType: ['camera'],
      success: (res) => { setPhotoBuffer([...photoBuffer, ...res.tempFilePaths]); setLastPhotoTime(Date.now()); },
      fail: () => { Taro.showToast({ title: '拍照失败', icon: 'none' }); },
    });
  };

  const handleRemovePhoto = (index: number) => {
    const newBuffer = [...photoBuffer];
    newBuffer.splice(index, 1);
    setPhotoBuffer(newBuffer);
    if (newBuffer.length === 0) setShowPhotoBufferModal(false);
  };

  const handleClearPhotoBuffer = () => {
    Taro.showModal({
      title: '确认清空', content: '确定要清空所有已拍照片吗？',
      confirmText: '清空', confirmColor: '#e74c3c', cancelText: '取消',
      success: (res) => {
        if (res.confirm) { setPhotoBuffer([]); setShowPhotoBufferModal(false); setLastPhotoTime(0); Taro.showToast({ title: '已清空', icon: 'success' }); }
      },
    });
  };

  const handleRecognizeBufferPhotos = () => {
    if (photoBuffer.length === 0) { Taro.showToast({ title: '没有照片', icon: 'none' }); return; }
    setShowPhotoBufferModal(false);
    recognizeMultiImage(photoBuffer);
  };

  // ========== Lifecycle ==========
  useLoad((options: any) => {
    Taro.getSystemInfo()
      .then((res) => setStatusBarHeight(res.statusBarHeight || 0))
      .catch(() => {});
    loadMedicines();

    // Handle scan params from navigation (e.g. from scan-result page)
    if (options && (options.scan === 'true' || options.name || options.manufacturer)) {
      setEditingMedicine(null);
      setFormData({
        name: options.name || '',
        manufacturer: options.manufacturer || '',
        specification: options.specification || '',
        barcode: options.barcode || '',
        category: options.category && options.category !== '其他' ? options.category : '抗生素',
        stock: options.stock ? parseInt(String(options.stock)) : 1,
        unit: options.unit || '盒',
        expiryDate: options.expiryDate || '',
        dosage: options.dosage || '',
      });
      if (options.name) {
        Taro.showToast({ title: '已填充扫描结果', icon: 'success', duration: 1500 });
      }
      setShowAddDialog(true);
    }
  });

  useDidShow(() => {
    loadMedicines();
  });

  usePullDownRefresh(() => {
    loadMedicines();
    Taro.stopPullDownRefresh();
  });

  // ========== Render helpers ==========
  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfWeek(calYear, calMonth);
    const cells: React.ReactNode[] = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<View key={`e-${i}`} className="cal-grid-day cal-grid-empty" />);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${calYear}-${String(calMonth).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const selected = dateStr === calSelected;
      cells.push(
        <View
          key={d}
          className={`cal-grid-day ${selected ? 'cal-grid-selected' : ''}`}
          onClick={() => handleCalendarDaySelect(d)}
        >
          <Text>{d}</Text>
        </View>
      );
    }
    return cells;
  };

  const renderNavBar = () => (
    <View className="nav-bar" style={{ paddingTop: `${statusBarHeight}px` }}>
      <View className="nav-bar-content">
        <View className="nav-placeholder" />
        <Text className="nav-bar-title">药品库</Text>
        <View className="nav-placeholder" />
      </View>
    </View>
  );

  const renderStatusBadge = (item: MedicineItem) => {
    const isExpired = item.statusText === '过期';
    const isExpiring = item.statusText === '临期';
    let className = 'med-tag ';
    if (isExpired) className += 'med-tag-danger';
    else if (isExpiring && item.statusColor === 'warning') className += 'med-tag-warning';
    else if (isExpiring) className += 'med-tag-default';
    else className += 'med-tag-normal';

    return (
      <View className={className}>
        <Text>{item.statusText}</Text>
      </View>
    );
  };

  return (
    <View className="medicine-container" style={{ paddingTop: `${statusBarHeight + 88}px` }}>
      {renderNavBar()}

      <View className="search-bar">
        <View className="search-row">
          <View className="search-input-wrap">
            <Input
              className="search-input"
              value={searchKeyword}
              placeholder="搜索药品名称"
              onInput={(e) => handleSearchInput(e.detail.value)}
            />
            <View className="search-icon-wrap" onClick={handleSearch}>
              <Text className="search-icon">🔍</Text>
            </View>
          </View>
          <View className="scan-button" onClick={handleScanCode}>
            <Text className="scan-icon-sml">📷</Text>
            <Text className="scan-text">拍照</Text>
          </View>
        </View>
      </View>

      <View className="medicine-list">
        {medicines.map((item) => (
          <View key={item.id} className="medicine-item">
            <View
              className="medicine-info"
              onClick={() => isAdmin && handleEditMedicine(item)}
            >
              <View className="medicine-header">
                <Text className="med-pill-icon">💊</Text>
                <View className="medicine-details">
                  <Text className="medicine-name">药品名：{item.name}</Text>
                  <Text className="medicine-dosage">用法：{item.dosage || '无'}</Text>
                  <View className="medicine-spec-stock">
                    <Text className="spec-text">规格：{item.specification}</Text>
                    <Text className="stock-text">库存：{item.stock}{item.unit || '盒'}</Text>
                  </View>
                </View>
                <View className="medicine-status-badge">{renderStatusBadge(item)}</View>
              </View>
              <View className="medicine-category">
                <Text className="category-text">{item.category}</Text>
              </View>
            </View>
            <View className="medicine-footer">
              <Text className="manufacturer-text">厂家：{item.manufacturer || '未知厂家'}</Text>
              {isAdmin && (
                <View className="medicine-actions">
                  <View className="action-icon" onClick={() => handleEditMedicine(item)}>
                    <Text className="action-icon-text edit-icon">✏️</Text>
                  </View>
                  <View className="action-icon" onClick={() => handleDeleteMedicine(item)}>
                    <Text className="action-icon-text delete-icon">🗑</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        ))}

        {medicines.length === 0 && !loading && (
          <View className="empty-state">
            <Text className="empty-state-text">暂无药品</Text>
          </View>
        )}
      </View>

      <View className="add-button">
        <View className="add-btn" onClick={handleAddMedicine}>
          <Text className="add-btn-text">+ 添加药品</Text>
        </View>
      </View>

      {/* Add/Edit Dialog */}
      {showAddDialog && (
        <View className="dialog-overlay" onClick={handleCloseDialog}>
          <View className="dialog-container" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-header">
              <Text className="dialog-title">{editingMedicine ? '编辑药品' : '添加药品'}</Text>
              <Text className="dialog-close" onClick={handleCloseDialog}>✕</Text>
            </View>

            <ScrollView className="dialog-content" scrollY>
              {/* Name */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>药品名称</Text>
                  <Text className="required-mark">*</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    value={formData.name}
                    placeholder="请输入药品名称"
                    onInput={(e) => setFormData((prev) => ({ ...prev, name: e.detail.value }))}
                  />
                </View>
              </View>

              {/* Manufacturer */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>生产厂家</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    value={formData.manufacturer}
                    placeholder="请输入生产厂家"
                    onInput={(e) => setFormData((prev) => ({ ...prev, manufacturer: e.detail.value }))}
                  />
                </View>
              </View>

              {/* Specification */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>规格</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    value={formData.specification}
                    placeholder="请输入规格"
                    onInput={(e) => setFormData((prev) => ({ ...prev, specification: e.detail.value }))}
                  />
                </View>
              </View>

              {/* Category */}
              <View className="form-item" onClick={handleCategorySelect}>
                <View className="form-label">
                  <Text>分类</Text>
                  <Text className="required-mark">*</Text>
                </View>
                <View className="form-value">
                  <Text className="form-value-text has-value">{formData.category}</Text>
                  <Text className="form-arrow">›</Text>
                </View>
              </View>

              {/* Stock */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>库存</Text>
                  <Text className="required-mark">*</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    type="number"
                    value={String(formData.stock)}
                    placeholder="请输入库存数量"
                    onInput={(e) => setFormData((prev) => ({ ...prev, stock: Number(e.detail.value) || 0 }))}
                  />
                </View>
              </View>

              {/* Unit */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>单位</Text>
                  <Text className="required-mark">*</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    value={formData.unit}
                    placeholder="请输入单位（如：盒、瓶）"
                    onInput={(e) => setFormData((prev) => ({ ...prev, unit: e.detail.value }))}
                  />
                </View>
              </View>

              {/* Expiry Date */}
              <View className="form-item" onClick={handleExpiryDateSelect}>
                <View className="form-label">
                  <Text>过期日期</Text>
                  <Text className="required-mark">*</Text>
                </View>
                <View className="form-value">
                  <Text className={`form-value-text ${formData.expiryDate ? 'has-value' : ''}`}>{formData.expiryDate || '选择过期日期'}</Text>
                  <Text className="form-arrow">›</Text>
                </View>
              </View>

              {/* Dosage */}
              <View className="form-item form-item-input">
                <View className="form-label">
                  <Text>用法用量</Text>
                </View>
                <View className="form-value">
                  <Input
                    className="form-input"
                    value={formData.dosage}
                    placeholder="请输入用法用量"
                    onInput={(e) => setFormData((prev) => ({ ...prev, dosage: e.detail.value }))}
                  />
                </View>
              </View>
            </ScrollView>

            <View className="dialog-footer">
              <View className="dialog-btn dialog-btn-cancel" onClick={handleCloseDialog}>
                <Text>取消</Text>
              </View>
              <View className="dialog-btn dialog-btn-confirm" onClick={handleSubmit}>
                <Text>保存</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Date picker */}
      {showDatePicker && (
        <View className="calendar-overlay" onClick={() => setShowDatePicker(false)}>
          <View className="calendar-dialog" onClick={(e) => e.stopPropagation()}>
            <View className="date-picker-header">
              <Text className="date-picker-cancel" onClick={() => setShowDatePicker(false)}>取消</Text>
              <Text className="date-picker-title">选择过期日期</Text>
              <Text className="date-picker-confirm" onClick={handleCalendarConfirm}>确认</Text>
            </View>
            <View className="calendar-grid-wrap">
              <View className="cal-month-nav">
                <View
                  onClick={() => {
                    if (calMonth === 1) { setCalMonth(12); setCalYear((y) => y - 1); }
                    else setCalMonth((m) => m - 1);
                  }}
                >
                  <Text className="cal-nav-arrow">◀</Text>
                </View>
                <Text className="cal-month-label">{calYear}年{calMonth}月</Text>
                <View
                  onClick={() => {
                    if (calMonth === 12) { setCalMonth(1); setCalYear((y) => y + 1); }
                    else setCalMonth((m) => m + 1);
                  }}
                >
                  <Text className="cal-nav-arrow">▶</Text>
                </View>
              </View>
              <View className="cal-grid">
                {['日', '一', '二', '三', '四', '五', '六'].map((w) => (
                  <View key={w} className="cal-grid-week"><Text>{w}</Text></View>
                ))}
                {renderCalendarGrid()}
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Photo buffer modal */}
      {showPhotoBufferModal && (
        <View className="photo-buffer-overlay" onClick={() => setShowPhotoBufferModal(false)}>
          <View className="photo-buffer-modal" onClick={(e) => e.stopPropagation()}>
            <View className="photo-buffer-header">
              <Text className="photo-buffer-title">照片缓冲区 ({photoBuffer.length}/9)</Text>
              <Text className="photo-buffer-subtitle">已拍摄照片，可继续添加</Text>
            </View>
            <View className="photo-buffer-grid">
              {photoBuffer.map((path, idx) => (
                <View key={idx} className="photo-buffer-item">
                  <Image className="photo-buffer-image" src={path} mode="aspectFill" />
                  <View className="photo-buffer-remove" onClick={() => handleRemovePhoto(idx)}>
                    <Text className="photo-remove-text">✕</Text>
                  </View>
                </View>
              ))}
            </View>
            <View className="photo-buffer-actions">
              <View
                className={`pba-btn pba-btn-default ${photoBuffer.length >= 9 ? 'pba-btn-disabled' : ''}`}
                onClick={handleContinueAddPhoto}
              >
                <Text>继续添加</Text>
              </View>
              <View className="pba-btn pba-btn-danger" onClick={handleClearPhotoBuffer}>
                <Text>清空</Text>
              </View>
              <View className="pba-btn pba-btn-primary" onClick={handleRecognizeBufferPhotos}>
                <Text>开始识别</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {loading && (
        <View className="loading-overlay">
          <Text className="loading-text">加载中...</Text>
        </View>
      )}
      <CustomTabBar />
    </View>
  );
}
