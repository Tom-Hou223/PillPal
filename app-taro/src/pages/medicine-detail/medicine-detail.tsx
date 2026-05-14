import { useState, useEffect, useCallback } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { medicineApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { formatDate } from '../../utils/date';
import type { Medicine } from '../../types/api';
import './medicine-detail.scss';

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
  { label: '止痛药', value: '止痛药' },
  { label: '男科用药', value: '男科用药' },
  { label: '医疗器械', value: '医疗器械' },
  { label: '其他', value: '其他' },
];

const UNITS = ['盒', '瓶', '袋', '片', '支', '粒', '包', '板'];

export default function MedicineDetail() {
  const router = useRouter();
  const { id, scan, name, manufacturer, specification, category, dosage, expiryDate, barcode } =
    router.params;

  const isLoggedIn = useUserStore((s) => s.isLoggedIn);
  const isGuestMode = useUserStore((s) => s.isGuestMode);
  const currentFamily = useUserStore((s) => s.currentFamily);
  const isAdmin = currentFamily?.role === 'admin';

  const [loading, setLoading] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showUnitPicker, setShowUnitPicker] = useState(false);

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

  // Load medicine if editing
  const loadMedicine = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await medicineApi.getList();
      if (res.code === 0) {
        const medicines = res.data as Medicine[];
        const found = medicines.find((m) => String(m.id) === String(id));
        if (found) {
          setEditingMedicine(found);
          setFormData({
            name: found.name || '',
            manufacturer: found.manufacturer || '',
            specification: found.specification || '',
            barcode: (found as any).barcode || '',
            category: found.category || '抗生素',
            stock: found.stock || 1,
            unit: found.unit || '盒',
            expiryDate: found.expiryDate || '',
            dosage: found.dosage || '',
          });
        }
      }
    } catch (err) {
      Taro.showToast({ title: '加载失败', icon: 'none' });
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Handle scan params
  const handleScanParams = useCallback(() => {
    if (scan === 'true') {
      setFormData({
        name: decodeURIComponent(name || ''),
        manufacturer: decodeURIComponent(manufacturer || ''),
        specification: decodeURIComponent(specification || ''),
        barcode: decodeURIComponent(barcode || ''),
        category: decodeURIComponent(category || '抗生素'),
        dosage: decodeURIComponent(dosage || ''),
        expiryDate: decodeURIComponent(expiryDate || ''),
        stock: 1,
        unit: '盒',
      });
    }
  }, [scan, name, manufacturer, specification, barcode, category, dosage, expiryDate]);

  useEffect(() => {
    if (id) {
      loadMedicine();
    } else if (scan) {
      handleScanParams();
    }
  }, [id, scan, loadMedicine, handleScanParams]);

  // Permission check
  const checkPermission = (): boolean => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能操作',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return false;
    }
    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return false;
    }
    return true;
  };

  // Date picker
  const onExpiryDateSelect = () => {
    setShowDatePicker(true);
  };

  const onDateConfirm = () => {
    setShowDatePicker(false);
  };

  const onDateCancel = () => {
    setShowDatePicker(false);
  };

  const onDateInput = (e: any) => {
    setFormData((prev) => ({ ...prev, expiryDate: e.detail.value }));
  };

  // Category picker
  const onCategorySelect = () => {
    setShowCategoryPicker(true);
  };

  const onCategoryChoose = (cat: string) => {
    setFormData((prev) => ({ ...prev, category: cat }));
    setShowCategoryPicker(false);
  };

  // Unit picker
  const onUnitSelect = () => {
    setShowUnitPicker(true);
  };

  const onUnitChoose = (unit: string) => {
    setFormData((prev) => ({ ...prev, unit }));
    setShowUnitPicker(false);
  };

  // Form input handlers
  const onNameInput = (e: any) => {
    setFormData((prev) => ({ ...prev, name: e.detail.value }));
  };

  const onManufacturerInput = (e: any) => {
    setFormData((prev) => ({ ...prev, manufacturer: e.detail.value }));
  };

  const onSpecificationInput = (e: any) => {
    setFormData((prev) => ({ ...prev, specification: e.detail.value }));
  };

  const onStockInput = (e: any) => {
    const val = parseInt(e.detail.value) || 0;
    setFormData((prev) => ({ ...prev, stock: val }));
  };

  const onDosageInput = (e: any) => {
    setFormData((prev) => ({ ...prev, dosage: e.detail.value }));
  };

  const onBarcodeInput = (e: any) => {
    setFormData((prev) => ({ ...prev, barcode: e.detail.value }));
  };

  // Submit
  const onSubmit = async () => {
    const { name: medName, expiryDate: expDate } = formData;
    if (!medName || !medName.trim() || !expDate) {
      Taro.showToast({ title: '请输入药品名称和过期日期', icon: 'none' });
      return;
    }

    if (!checkPermission()) return;

    Taro.showLoading({ title: '保存中...', mask: true });

    const medicineData = {
      name: (medName || '').trim(),
      manufacturer: (formData.manufacturer || '').trim(),
      specification: (formData.specification || '').trim(),
      barcode: (formData.barcode || '').trim(),
      category: formData.category || '其他',
      stock: parseInt(String(formData.stock)) || 0,
      unit: formData.unit || '盒',
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
      setTimeout(() => {
        Taro.navigateBack();
      }, 1500);
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '保存失败', icon: 'none' });
    }
  };

  // Delete
  const onDelete = () => {
    if (!editingMedicine || !checkPermission()) return;

    Taro.showModal({
      title: '确认删除',
      content: `确定要删除"${editingMedicine.name}"吗？`,
      confirmText: '删除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: async (res) => {
        if (res.confirm) {
          try {
            await medicineApi.delete(editingMedicine.id);
            Taro.showToast({ title: '删除成功', icon: 'success' });
            setTimeout(() => {
              Taro.navigateBack();
            }, 1500);
          } catch {
            Taro.showToast({ title: '删除失败', icon: 'none' });
          }
        }
      },
    });
  };

  return (
    <View className="medicine-detail-container">
      {/* Header */}
      <View className="detail-header">
        <View className="header-back" onClick={() => Taro.navigateBack()}>
          <Text className="back-arrow">&lt;</Text>
        </View>
        <Text className="header-title">
          {editingMedicine ? '编辑药品' : '添加药品'}
        </Text>
        {!editingMedicine ? (
          <View />
        ) : (
          <View className="header-delete" onClick={onDelete}>
            <Text className="delete-text">删除</Text>
          </View>
        )}
      </View>

      {/* Form */}
      <View className="detail-form">
        {/* Name */}
        <View className="form-item">
          <Text className="form-label">
            药品名称 <Text className="required">*</Text>
          </Text>
          <Input
            className="form-input"
            placeholder="请输入药品名称"
            value={formData.name}
            onInput={onNameInput}
          />
        </View>

        {/* Manufacturer */}
        <View className="form-item">
          <Text className="form-label">生产厂家</Text>
          <Input
            className="form-input"
            placeholder="请输入生产厂家"
            value={formData.manufacturer}
            onInput={onManufacturerInput}
          />
        </View>

        {/* Specification */}
        <View className="form-item">
          <Text className="form-label">规格</Text>
          <Input
            className="form-input"
            placeholder="请输入规格"
            value={formData.specification}
            onInput={onSpecificationInput}
          />
        </View>

        {/* Category */}
        <View className="form-item" onClick={onCategorySelect}>
          <Text className="form-label">
            分类 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className={`picker-value ${formData.category ? '' : 'placeholder'}`}>
              {formData.category || '请选择分类'}
            </Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* Stock */}
        <View className="form-item">
          <Text className="form-label">
            库存 <Text className="required">*</Text>
          </Text>
          <Input
            className="form-input form-input--number"
            type="number"
            placeholder="请输入库存数量"
            value={String(formData.stock)}
            onInput={onStockInput}
          />
        </View>

        {/* Unit */}
        <View className="form-item" onClick={onUnitSelect}>
          <Text className="form-label">
            单位 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className={`picker-value ${formData.unit ? '' : 'placeholder'}`}>
              {formData.unit || '请选择单位'}
            </Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* Expiry Date */}
        <View className="form-item" onClick={onExpiryDateSelect}>
          <Text className="form-label">
            过期日期 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className={`picker-value ${formData.expiryDate ? '' : 'placeholder'}`}>
              {formData.expiryDate || '选择过期日期'}
            </Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* Dosage */}
        <View className="form-item">
          <Text className="form-label">用法用量</Text>
          <Input
            className="form-input"
            placeholder="请输入用法用量"
            value={formData.dosage}
            onInput={onDosageInput}
          />
        </View>

        {/* Barcode */}
        <View className="form-item">
          <Text className="form-label">条形码</Text>
          <Input
            className="form-input"
            placeholder="条形码"
            value={formData.barcode}
            onInput={onBarcodeInput}
            disabled
          />
        </View>
      </View>

      {/* Actions */}
      <View className="detail-actions">
        <Button className="action-btn action-btn--cancel" onClick={() => Taro.navigateBack()}>
          取消
        </Button>
        <Button className="action-btn action-btn--submit" onClick={onSubmit}>
          保存
        </Button>
      </View>

      {/* Category Picker Popup */}
      {showCategoryPicker && (
        <View className="picker-overlay" onClick={() => setShowCategoryPicker(false)}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="picker-popup-header">
              <Text className="picker-popup-title">选择分类</Text>
              <Text className="picker-popup-close" onClick={() => setShowCategoryPicker(false)}>
                ✕
              </Text>
            </View>
            <View className="picker-popup-list">
              {CATEGORIES.map((cat) => (
                <View
                  key={cat.value}
                  className={`picker-option ${formData.category === cat.value ? 'active' : ''}`}
                  onClick={() => onCategoryChoose(cat.value)}
                >
                  <Text className="picker-option-text">{cat.label}</Text>
                  {formData.category === cat.value && (
                    <Text className="picker-option-check">✓</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* Unit Picker Popup */}
      {showUnitPicker && (
        <View className="picker-overlay" onClick={() => setShowUnitPicker(false)}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="picker-popup-header">
              <Text className="picker-popup-title">选择单位</Text>
              <Text className="picker-popup-close" onClick={() => setShowUnitPicker(false)}>
                ✕
              </Text>
            </View>
            <View className="picker-popup-list">
              {UNITS.map((unit) => (
                <View
                  key={unit}
                  className={`picker-option ${formData.unit === unit ? 'active' : ''}`}
                  onClick={() => onUnitChoose(unit)}
                >
                  <Text className="picker-option-text">{unit}</Text>
                  {formData.unit === unit && <Text className="picker-option-check">✓</Text>}
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* Date Picker Popup */}
      {showDatePicker && (
        <View className="picker-overlay" onClick={onDateCancel}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="date-picker-header">
              <Text className="date-picker-cancel" onClick={onDateCancel}>
                取消
              </Text>
              <Text className="date-picker-title">选择过期日期</Text>
              <Text className="date-picker-confirm" onClick={onDateConfirm}>
                确认
              </Text>
            </View>
            <View className="date-picker-body">
              <Input
                className="date-input"
                type="text"
                placeholder="请输入日期（如 2026-12-31）"
                value={formData.expiryDate}
                onInput={onDateInput}
              />
              <Text className="date-hint">格式：YYYY-MM-DD</Text>
            </View>
          </View>
        </View>
      )}

      {/* Loading */}
      {loading && (
        <View className="loading-overlay">
          <Text className="loading-text">加载中...</Text>
        </View>
      )}
    </View>
  );
}
