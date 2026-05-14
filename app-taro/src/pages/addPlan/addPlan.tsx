import { useState, useEffect, useCallback } from 'react';
import { View, Text, Input, Button, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { planApi, medicineApi, familyApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { formatDate } from '../../utils/date';
import { FamilyMemberRow } from '../../types/api';
import MemberSelector from '../../components/member-selector/index';
import type { MemberItem } from '../../components/member-selector/index';
import './addPlan.scss';

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

export default function AddPlan() {
  const isGuestMode = useUserStore((s) => s.isGuestMode);
  const currentFamily = useUserStore((s) => s.currentFamily);
  const isAdmin = currentFamily?.role === 'admin';

  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<string[]>([]);
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timePickerIndex, setTimePickerIndex] = useState(0);

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

  const FREQUENCIES = ['每日1次', '每日2次', '每日3次', '每2天1次', '每周1次', '按需服用'];

  // Load data
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [medRes, memRes] = await Promise.all([medicineApi.getList(), familyApi.getList()]);
      if (medRes.code === 0) {
        const medList = medRes.data as any[];
        setMedicines(medList.map((m) => m.name));
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

  // Check permission
  const checkPermission = (): boolean => {
    if (isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能添加计划',
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

  // Medicine change
  const onMedicineChange = (e: any) => {
    const index = e.detail.value;
    const name = medicines[index];
    if (name !== undefined) {
      setFormData((prev) => ({ ...prev, medicineName: name }));
    }
  };

  // Member change
  const onMemberChange = (data: { memberId: number; memberName: string }) => {
    setFormData((prev) => ({
      ...prev,
      memberId: data.memberId,
      memberName: data.memberName,
    }));
  };

  // Frequency change
  const onFrequencyChange = (e: any) => {
    const index = e.detail.value;
    const freq = FREQUENCIES[index];
    if (freq) {
      setFormData((prev) => ({ ...prev, frequency: freq }));
    }
  };

  // Date pickers
  const onStartDateChange = (e: any) => {
    setFormData((prev) => ({ ...prev, startDate: e.detail.value }));
  };

  const onEndDateChange = (e: any) => {
    setFormData((prev) => ({ ...prev, endDate: e.detail.value }));
  };

  // Time slot
  const onTimeSlotAdd = () => {
    setFormData((prev) => ({
      ...prev,
      timeSlots: [...prev.timeSlots, '12:00'],
    }));
  };

  const onTimeSlotRemove = (index: number) => {
    if (formData.timeSlots.length <= 1) {
      Taro.showToast({ title: '至少保留一个用药时间', icon: 'none' });
      return;
    }
    const newSlots = formData.timeSlots.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, timeSlots: newSlots }));
  };

  const onTimeSlotChange = (index: number, value: string) => {
    const newSlots = [...formData.timeSlots];
    newSlots[index] = value;
    setFormData((prev) => ({ ...prev, timeSlots: newSlots }));
  };

  // Note input
  const onNoteInput = (e: any) => {
    setFormData((prev) => ({ ...prev, note: e.detail.value }));
  };

  // Submit
  const onSubmit = async () => {
    if (!formData.medicineName.trim()) {
      Taro.showToast({ title: '请选择药品', icon: 'none' });
      return;
    }
    if (!formData.memberName) {
      Taro.showToast({ title: '请选择成员', icon: 'none' });
      return;
    }
    if (!formData.startDate) {
      Taro.showToast({ title: '请选择开始日期', icon: 'none' });
      return;
    }
    if (!checkPermission()) return;

    Taro.showLoading({ title: '保存中...', mask: true });

    try {
      await planApi.create({
        medicineName: formData.medicineName.trim(),
        memberName: formData.memberName,
        memberId: formData.memberId,
        startDate: formData.startDate,
        endDate: formData.endDate || undefined,
        timeSlots: formData.timeSlots,
        frequency: formData.frequency,
        note: formData.note.trim(),
      });
      Taro.hideLoading();
      Taro.showToast({ title: '创建成功', icon: 'success' });
      setTimeout(() => Taro.navigateBack(), 1500);
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '创建失败', icon: 'none' });
    }
  };

  return (
    <View className="add-plan-container">
      {/* Header */}
      <View className="add-plan-header">
        <View className="header-back" onClick={() => Taro.navigateBack()}>
          <Text className="back-arrow">&lt;</Text>
        </View>
        <Text className="header-title">添加计划</Text>
        <View className="header-placeholder" />
      </View>

      {/* Form */}
      <View className="add-plan-form">
        {/* Medicine Name */}
        <View className="form-item">
          <Text className="form-label">
            药品名称 <Text className="required">*</Text>
          </Text>
          <Picker mode="selector" range={medicines} onChange={onMedicineChange}>
            <View className="form-picker">
              <Text className={`picker-value ${formData.medicineName ? '' : 'placeholder'}`}>
                {formData.medicineName || '请选择药品'}
              </Text>
              <Text className="picker-arrow">&gt;</Text>
            </View>
          </Picker>
        </View>

        {/* Member */}
        <View className="form-item">
          <Text className="form-label">
            成员 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className={`picker-value ${formData.memberName ? '' : 'placeholder'}`}>
              {formData.memberName || '请选择成员'}
            </Text>
          </View>
        </View>
        {isAdmin && members.length > 0 && (
          <View className="member-selector-wrap">
            <MemberSelector
              members={members}
              selectedId={formData.memberId}
              isAdmin={isAdmin}
              onChange={onMemberChange}
            />
          </View>
        )}

        {/* Start Date */}
        <View className="form-item" onClick={() => setShowStartDatePicker(true)}>
          <Text className="form-label">
            开始日期 <Text className="required">*</Text>
          </Text>
          <View className="form-picker">
            <Text className="picker-value">{formData.startDate || '请选择开始日期'}</Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* End Date */}
        <View className="form-item" onClick={() => setShowEndDatePicker(true)}>
          <Text className="form-label">结束日期</Text>
          <View className="form-picker">
            <Text className={`picker-value ${formData.endDate ? '' : 'placeholder'}`}>
              {formData.endDate || '请选择结束日期'}
            </Text>
            <Text className="picker-arrow">&gt;</Text>
          </View>
        </View>

        {/* Frequency */}
        <View className="form-item">
          <Text className="form-label">
            频率 <Text className="required">*</Text>
          </Text>
          <Picker mode="selector" range={FREQUENCIES} onChange={onFrequencyChange}>
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
            <View className="add-slot-btn" onClick={onTimeSlotAdd}>
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
                <View className="timeslot-remove" onClick={() => onTimeSlotRemove(index)}>
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
      <View className="add-plan-actions">
        <Button className="action-btn action-btn--cancel" onClick={() => Taro.navigateBack()}>
          取消
        </Button>
        <Button className="action-btn action-btn--submit" onClick={onSubmit}>
          保存
        </Button>
      </View>

      {/* Start Date Picker */}
      {showStartDatePicker && (
        <View className="picker-overlay" onClick={() => setShowStartDatePicker(false)}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="date-header">
              <Text className="date-cancel" onClick={() => setShowStartDatePicker(false)}>
                取消
              </Text>
              <Text className="date-title">选择开始日期</Text>
              <Text
                className="date-confirm"
                onClick={() => setShowStartDatePicker(false)}
              >
                确认
              </Text>
            </View>
            <Picker
              mode="date"
              value={formData.startDate}
              onChange={onStartDateChange}
            >
              <View className="date-display">
                <Text>{formData.startDate || '请选择日期'}</Text>
              </View>
            </Picker>
          </View>
        </View>
      )}

      {/* End Date Picker */}
      {showEndDatePicker && (
        <View className="picker-overlay" onClick={() => setShowEndDatePicker(false)}>
          <View className="picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="date-header">
              <Text className="date-cancel" onClick={() => setShowEndDatePicker(false)}>
                取消
              </Text>
              <Text className="date-title">选择结束日期</Text>
              <Text className="date-confirm" onClick={() => setShowEndDatePicker(false)}>
                确认
              </Text>
            </View>
            <Picker mode="date" value={formData.endDate} onChange={onEndDateChange}>
              <View className="date-display">
                <Text>{formData.endDate || '请选择日期（可选）'}</Text>
              </View>
            </Picker>
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
