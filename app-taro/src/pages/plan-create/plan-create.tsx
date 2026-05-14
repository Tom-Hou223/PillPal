import { useState, useEffect, useCallback } from 'react';
import { View, Text, Input, Button, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { planApi, medicineApi, familyApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { formatDate } from '../../utils/date';
import { FamilyMemberRow } from '../../types/api';
import MemberSelector from '../../components/member-selector/index';
import type { MemberItem } from '../../components/member-selector/index';
import './plan-create.scss';

interface FormData {
  medicineName: string;
  memberName: string;
  memberId: number | null;
  startDate: string;
  endDate: string;
  timeSlots: string[];
  frequency: string;
  note: string;
}

const FREQUENCIES = [
  { label: '每日1次', value: '每日1次' },
  { label: '每日2次', value: '每日2次' },
  { label: '每日3次', value: '每日3次' },
  { label: '每2天1次', value: '每2天1次' },
  { label: '每周1次', value: '每周1次' },
  { label: '按需服用', value: '按需服用' },
];

export default function PlanCreate() {
  const isGuestMode = useUserStore((s) => s.isGuestMode);
  const currentFamily = useUserStore((s) => s.currentFamily);
  const isAdmin = currentFamily?.role === 'admin';

  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<{ name: string }[]>([]);
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerType, setDatePickerType] = useState<'start' | 'end'>('start');

  const [formData, setFormData] = useState<FormData>({
    medicineName: '',
    memberName: '',
    memberId: null,
    startDate: formatDate(new Date()),
    endDate: '',
    timeSlots: ['08:00'],
    frequency: '每日1次',
    note: '',
  });

  // Load data
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [medRes, memRes] = await Promise.all([medicineApi.getList(), familyApi.getList()]);
      if (medRes.code === 0) {
        const medList = medRes.data as any[];
        setMedicines(medList.map((m) => ({ name: m.name })));
      }
      if (memRes.code === 0) {
        const memList = memRes.data as FamilyMemberRow[];
        setMembers(
          memList.map((m) => ({
            id: m.id,
            name: m.name,
            role: m.relationship || 'member',
          }))
        );
      }
    } catch {
      // Use empty data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Permission
  const checkPermission = (): boolean => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能创建计划',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) Taro.navigateTo({ url: '/pages/login/login' });
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

  // Medicine picker
  const onMedicineChange = (e: any) => {
    const index = e.detail.value;
    const med = medicines[index];
    if (med) {
      setFormData((prev) => ({ ...prev, medicineName: med.name }));
    }
  };

  // Frequency picker
  const onFrequencyChange = (e: any) => {
    const index = e.detail.value;
    const freq = FREQUENCIES[index];
    if (freq) {
      setFormData((prev) => ({ ...prev, frequency: freq.value }));
    }
  };

  // Member selector callback
  const onMemberChange = (data: { memberId: number; memberName: string }) => {
    setFormData((prev) => ({
      ...prev,
      memberId: data.memberId,
      memberName: data.memberName,
    }));
  };

  // Date picker
  const onDateSelect = (type: 'start' | 'end') => {
    setDatePickerType(type);
    setShowDatePicker(true);
  };

  const onDateChange = (e: any) => {
    const val = e.detail.value;
    if (datePickerType === 'start') {
      setFormData((prev) => ({ ...prev, startDate: val }));
    } else {
      setFormData((prev) => ({ ...prev, endDate: val }));
    }
  };

  const onDateConfirm = () => {
    setShowDatePicker(false);
  };

  // Time slots management
  const addTimeSlot = () => {
    setFormData((prev) => ({
      ...prev,
      timeSlots: [...prev.timeSlots, '12:00'],
    }));
  };

  const onTimeSlotChange = (index: number, value: string) => {
    const newSlots = [...formData.timeSlots];
    newSlots[index] = value;
    setFormData((prev) => ({ ...prev, timeSlots: newSlots }));
  };

  const removeTimeSlot = (index: number) => {
    if (formData.timeSlots.length <= 1) {
      Taro.showToast({ title: '至少保留一个用药时间', icon: 'none' });
      return;
    }
    const newSlots = formData.timeSlots.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, timeSlots: newSlots }));
  };

  // Note input
  const onNoteInput = (e: any) => {
    setFormData((prev) => ({ ...prev, note: e.detail.value }));
  };

  // Submit
  const onSubmit = async () => {
    const { medicineName, memberName, startDate, timeSlots } = formData;

    if (!medicineName.trim()) {
      Taro.showToast({ title: '请选择药品', icon: 'none' });
      return;
    }
    if (!memberName) {
      Taro.showToast({ title: '请选择成员', icon: 'none' });
      return;
    }
    if (!startDate) {
      Taro.showToast({ title: '请选择开始日期', icon: 'none' });
      return;
    }
    if (timeSlots.length === 0) {
      Taro.showToast({ title: '请设置用药时间', icon: 'none' });
      return;
    }

    if (!checkPermission()) return;

    Taro.showLoading({ title: '保存中...', mask: true });

    const planData = {
      medicineName: medicineName.trim(),
      memberName,
      memberId: formData.memberId,
      startDate: formData.startDate,
      endDate: formData.endDate || undefined,
      timeSlots: formData.timeSlots,
      frequency: formData.frequency,
      note: formData.note.trim(),
    };

    try {
      await planApi.create(planData);
      Taro.hideLoading();
      Taro.showToast({ title: '创建成功', icon: 'success' });
      setTimeout(() => {
        Taro.navigateBack();
      }, 1500);
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '创建失败', icon: 'none' });
    }
  };

  // Get picker range values
  const medicineRange = medicines.map((m) => m.name);
  const frequencyRange = FREQUENCIES.map((f) => f.label);

  return (
    <View className="plan-create-container">
      {/* Header */}
      <View className="plan-header">
        <View className="header-back" onClick={() => Taro.navigateBack()}>
          <Text className="back-arrow">&lt;</Text>
        </View>
        <Text className="header-title">创建用药计划</Text>
        <View className="header-placeholder" />
      </View>

      {/* Form */}
      <View className="plan-form">
        {/* Medicine */}
        <View className="form-group">
          <View className="form-item">
            <Text className="form-label">
              药品名称 <Text className="required">*</Text>
            </Text>
            <Picker
              mode="selector"
              range={medicineRange}
              onChange={onMedicineChange}
            >
              <View className="form-picker">
                <Text
                  className={`picker-value ${formData.medicineName ? '' : 'placeholder'}`}
                >
                  {formData.medicineName || '请选择药品'}
                </Text>
                <Text className="picker-arrow">&gt;</Text>
              </View>
            </Picker>
          </View>
        </View>

        {/* Member */}
        <View className="form-group">
          <View className="form-item">
            <Text className="form-label">
              成员 <Text className="required">*</Text>
            </Text>
            <View className="form-picker">
              <Text
                className={`picker-value ${formData.memberName ? '' : 'placeholder'}`}
              >
                {formData.memberName || '请选择成员'}
              </Text>
            </View>
          </View>
          {isAdmin && members.length > 0 && (
            <View className="member-selector-area">
              <MemberSelector
                members={members}
                selectedId={formData.memberId}
                isAdmin={isAdmin}
                onChange={onMemberChange}
              />
            </View>
          )}
        </View>

        {/* Start Date */}
        <View className="form-item" onClick={() => onDateSelect('start')}>
          <Text className="form-label">
            开始日期 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className="picker-value">{formData.startDate || '请选择开始日期'}</Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* End Date */}
        <View className="form-item" onClick={() => onDateSelect('end')}>
          <Text className="form-label">结束日期</Text>
          <View className="form-picker">
            <Text
              className={`picker-value ${formData.endDate ? '' : 'placeholder'}`}
            >
              {formData.endDate || '请选择结束日期（可选）'}
            </Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* Frequency */}
        <View className="form-item">
          <Text className="form-label">
            频率 <Text className="required">*</Text>
          </Text>
          <Picker
            mode="selector"
            range={frequencyRange}
            onChange={onFrequencyChange}
          >
            <View className="form-picker">
              <Text className="picker-value">{formData.frequency}</Text>
              <Text className="picker-arrow">&gt;</Text>
            </View>
          </Picker>
        </View>

        {/* Time Slots */}
        <View className="form-item form-item--column">
          <View className="form-item-row">
            <Text className="form-label">
              用药时间 <Text className="required">*</Text>
            </Text>
            <View className="add-slot-btn" onClick={addTimeSlot}>
              <Text className="add-slot-text">+ 添加</Text>
            </View>
          </View>
          <View className="timeslot-list">
            {formData.timeSlots.map((slot, index) => (
              <View className="timeslot-item" key={index}>
                <Picker
                  mode="time"
                  value={slot}
                  onChange={(e) => onTimeSlotChange(index, e.detail.value)}
                >
                  <View className="timeslot-picker">
                    <Text className="timeslot-value">{slot}</Text>
                  </View>
                </Picker>
                <View className="timeslot-remove" onClick={() => removeTimeSlot(index)}>
                  <Text className="timeslot-remove-text">-</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Note */}
        <View className="form-item">
          <Text className="form-label">备注</Text>
          <Input
            className="form-input"
            placeholder="请输入备注"
            value={formData.note}
            onInput={onNoteInput}
          />
        </View>
      </View>

      {/* Actions */}
      <View className="plan-actions">
        <Button className="action-btn action-btn--cancel" onClick={() => Taro.navigateBack()}>
          取消
        </Button>
        <Button className="action-btn action-btn--submit" onClick={onSubmit}>
          创建计划
        </Button>
      </View>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <View className="picker-overlay" onClick={() => setShowDatePicker(false)}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="date-picker-header">
              <Text className="date-picker-cancel" onClick={() => setShowDatePicker(false)}>
                取消
              </Text>
              <Text className="date-picker-title">
                {datePickerType === 'start' ? '选择开始日期' : '选择结束日期'}
              </Text>
              <Text className="date-picker-confirm" onClick={onDateConfirm}>
                确认
              </Text>
            </View>
            <View className="date-picker-body">
              <Picker mode="date" value={formData[datePickerType === 'start' ? 'startDate' : 'endDate']} onChange={onDateChange}>
                <View className="date-picker-value">
                  <Text>
                    {formData[datePickerType === 'start' ? 'startDate' : 'endDate'] ||
                      '请选择日期'}
                  </Text>
                </View>
              </Picker>
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
