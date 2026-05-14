import { useState, useCallback, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, Input } from '@tarojs/components';
import Taro, { useDidShow, useLoad, usePullDownRefresh } from '@tarojs/taro';
import { useUserStore } from '../../stores/user.store';
import { UserManager, FamilyManager } from '../../services/api';
import { planApi, medicineApi, familiesApi, familyApi } from '../../services/api';
import { formatDate, safeName } from '../../utils/date';
import type { Plan, Medicine } from '../../types/api';
import CustomTabBar from '../../custom-tab-bar';
import './plan.scss';

interface Member {
  id: string | number;
  name: string;
  role: string;
}

interface FormData {
  medicineId: string;
  medicineName: string;
  memberId: string;
  memberName: string;
  startDate: string;
  endDate: string;
  timeSlots: string[];
  frequency: string;
  notes: string;
}

const FREQUENCY_OPTIONS = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' },
];

function formatDateStr(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDatetime(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

function parseDatetimeString(str: string): number {
  if (!str) return 0;
  const parts = str.split(' ');
  if (parts.length === 2) {
    return new Date(`${parts[0]}T${parts[1]}:00`).getTime();
  }
  return new Date(`${str}T00:00:00`).getTime();
}

export default function PlanPage() {
  const { isSeniorMode, isGuestMode } = useUserStore();
  const isAdmin = FamilyManager.isAdmin();

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filterType, setFilterType] = useState('all');

  const [familyMembers, setFamilyMembers] = useState<Member[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedMemberName, setSelectedMemberName] = useState('');
  const [selectedMemberRole, setSelectedMemberRole] = useState('');

  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState<FormData>({
    medicineId: '',
    medicineName: '',
    memberId: '',
    memberName: '',
    startDate: '',
    endDate: '',
    timeSlots: [],
    frequency: 'daily',
    notes: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerType, setDatePickerType] = useState<'start' | 'end'>('start');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showMedicinePicker, setShowMedicinePicker] = useState(false);
  const [showMemberPicker, setShowMemberPicker] = useState(false);
  const [frequencyIndex, setFrequencyIndex] = useState(0);

  const [startDatetimeValue, setStartDatetimeValue] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState('08:00');

  const loadMembers = useCallback(async () => {
    const familyId = FamilyManager.getCurrentFamilyId();
    if (!familyId) { setFamilyMembers([]); return; }
    try {
      const res: any = await familiesApi.getMembers(familyId);
      const members: any[] = res.data || [];
      const formatted = members.map((m: any) => {
        const nickname = m.nickname || m.user?.nickname;
        const phone = m.phone || m.user?.phone;
        const name = safeName(nickname || (phone ? phone.slice(-4) + '用户' : m.relationship));
        return {
          id: m.userId, name, role: m.role || 'member',
        };
      });
      setFamilyMembers(formatted);
    } catch {
      try {
        const res2: any = await familyApi.getList();
        const list: any[] = res2.data || [];
        const formatted = list.map((m: any) => ({
          id: m.id || m.userId, name: safeName(m.name || m.nickname), role: m.role || 'member',
        }));
        setFamilyMembers(formatted);
      } catch { setFamilyMembers([]); }
    }
  }, []);

  const loadPlans = useCallback(async (filterTypeOverride?: string | null) => {
    if (loading) return;
    setLoading(true);
    try {
      const res: any = await planApi.getList();
      let list: Plan[] = res.data || [];
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      list = list.map((plan) => {
        const p = { ...plan };
        p.startDate = formatDateStr(plan.startDate);
        p.endDate = formatDateStr(plan.endDate);
        if (p.endDate) {
          const endDate = new Date(p.endDate);
          endDate.setHours(0, 0, 0, 0);
          if (endDate < today && p.status === 'active') p.status = 'ended';
        }
        return p;
      });
      if (isAdmin && selectedMemberName) list = list.filter((p) => p.memberName === selectedMemberName);
      else if (!isAdmin) {
        const userInfo = UserManager.getUser();
        const currentUserName = userInfo?.nickname || '';
        if (currentUserName) list = list.filter((p) => p.memberName === currentUserName);
      }
      const ft = filterTypeOverride !== null ? filterTypeOverride : filterType;
      if (ft === 'active') list = list.filter((p) => p.status === 'active');
      else if (ft === 'ended') list = list.filter((p) => p.status === 'ended' || p.status === 'completed');
      setPlans(list);
      if (filterTypeOverride !== null) setFilterType(filterTypeOverride);
      setLoading(false);
    } catch {
      setLoading(false);
      Taro.showToast({ title: '加载失败', icon: 'none' });
    }
  }, [loading, isAdmin, selectedMemberName, filterType]);

  const loadMedicines = useCallback(async () => {
    try { const res: any = await medicineApi.getList(); setMedicines(res.data || []); } catch { /* silent */ }
  }, []);

  const selectDefaultMember = useCallback(() => {
    const currentUserId = (UserManager.getUser() as any)?.id;
    let member: Member | undefined;
    if (currentUserId) member = familyMembers.find((m) => String(m.id) === String(currentUserId));
    if (!member && familyMembers.length > 0) member = familyMembers[0];
    if (member) {
      setSelectedMemberId(String(member.id));
      setSelectedMemberName(member.name);
      setSelectedMemberRole(member.role || '');
      Taro.setStorageSync('selectedMemberId', member.id);
      Taro.setStorageSync('selectedMemberName', member.name);
      Taro.setStorageSync('selectedMemberRole', member.role || '');
      loadPlans();
    }
  }, [familyMembers, loadPlans]);

  const handleMemberChange = useCallback((memberId: string, memberName: string) => {
    let memberRole = '';
    if (memberId) { const m = familyMembers.find((x) => String(x.id) === String(memberId)); memberRole = m?.role || ''; }
    Taro.setStorageSync('selectedMemberId', memberId || '');
    Taro.setStorageSync('selectedMemberName', memberName);
    Taro.setStorageSync('selectedMemberRole', memberRole);
    setSelectedMemberId(memberId || null);
    setSelectedMemberName(memberName);
    setSelectedMemberRole(memberRole);
    loadPlans(null);
  }, [familyMembers, loadPlans]);

  const handleFilterChange = useCallback((type: string) => { setFilterType(type); loadPlans(type); }, [loadPlans]);

  const handleAddPlan = useCallback(() => {
    if (isGuestMode) {
      Taro.showModal({ title: '登录提示', content: '需要登录才能添加用药计划', confirmText: '去登录', success: (r) => { if (r.confirm) Taro.navigateTo({ url: '/pages/login/login' }); } });
      return;
    }
    if (!isAdmin) { Taro.showToast({ title: '仅管理员可操作', icon: 'none' }); return; }
    setEditingPlan(null);
    setFormData({ medicineId: '', medicineName: '', memberId: '', memberName: '', startDate: '', endDate: '', timeSlots: [], frequency: 'daily', notes: '' });
    setFrequencyIndex(0);
    setShowAddDialog(true);
  }, [isGuestMode, isAdmin]);

  const handleEditPlan = useCallback((plan: Plan) => {
    if (isGuestMode) {
      Taro.showModal({ title: '登录提示', content: '需要登录才能编辑用药计划', confirmText: '去登录', success: (r) => { if (r.confirm) Taro.navigateTo({ url: '/pages/login/login' }); } });
      return;
    }
    if (!isAdmin) { Taro.showToast({ title: '仅管理员可操作', icon: 'none' }); return; }
    setEditingPlan(plan);
    setFormData({
      medicineId: (plan as any).medicineId || '', medicineName: plan.medicineName || '',
      memberId: (plan as any).memberId || '', memberName: plan.memberName || '',
      startDate: formatDateStr(plan.startDate || ''), endDate: formatDateStr(plan.endDate || ''),
      timeSlots: Array.isArray(plan.timeSlots) ? [...plan.timeSlots] : [],
      frequency: (plan as any).frequency || 'daily', notes: (plan as any).notes || '',
    });
    setFrequencyIndex(FREQUENCY_OPTIONS.findIndex((o) => o.value === ((plan as any).frequency || 'daily')));
    setShowAddDialog(true);
  }, [isGuestMode, isAdmin]);

  const handleDeletePlan = useCallback((plan: Plan) => {
    if (isGuestMode) {
      Taro.showModal({ title: '登录提示', content: '需要登录才能删除用药计划', confirmText: '去登录', success: (r) => { if (r.confirm) Taro.navigateTo({ url: '/pages/login/login' }); } });
      return;
    }
    if (!isAdmin) { Taro.showToast({ title: '仅管理员可操作', icon: 'none' }); return; }
    Taro.showModal({
      title: '确认删除', content: '确定要删除该用药计划吗？', confirmText: '删除', confirmColor: '#e74c3c', cancelText: '取消',
      success: async (modalRes) => {
        if (modalRes.confirm) {
          try { await planApi.delete(plan.id); Taro.showToast({ title: '删除成功', icon: 'success' }); loadPlans(); }
          catch { Taro.showToast({ title: '删除失败', icon: 'none' }); }
        }
      },
    });
  }, [isGuestMode, isAdmin, loadPlans]);

  const handleCloseDialog = useCallback(() => {
    setShowAddDialog(false); setEditingPlan(null); setShowDatePicker(false); setShowTimePicker(false); setShowMedicinePicker(false); setShowMemberPicker(false);
    setFormData({ medicineId: '', medicineName: '', memberId: '', memberName: '', startDate: '', endDate: '', timeSlots: [], frequency: 'daily', notes: '' });
    setFrequencyIndex(0);
  }, []);

  // Form handlers
  const handleMedicineSelect = useCallback(() => {
    if (medicines.length === 0) { Taro.showToast({ title: '药品库为空', icon: 'none' }); return; }
    if (medicines.length <= 6) {
      Taro.showActionSheet({
        itemList: medicines.map((m) => m.name),
        success: (r) => {
          const selected = medicines[r.tapIndex];
          setFormData((prev) => ({ ...prev, medicineId: String(selected.id), medicineName: selected.name }));
        },
      });
    } else {
      setShowMedicinePicker(true);
    }
  }, [medicines]);

  const handleMemberSelectForm = useCallback(async () => {
    const familyId = FamilyManager.getCurrentFamilyId();
    const loadFormMembers = async (): Promise<Member[]> => {
      try { const res: any = await familiesApi.getMembers(familyId); return (res.data || []).map((m: any) => {
        const nickname = m.nickname || m.user?.nickname;
        const phone = m.phone || m.user?.phone;
        const name = safeName(nickname || (phone ? phone.slice(-4) + '用户' : m.relationship));
        return { id: m.userId, name, role: m.role || 'member' };
      }); }
      catch {
        try { const res2: any = await familyApi.getList(); return (res2.data || []).map((m: any) => ({ id: m.id || m.userId, name: safeName(m.name || m.nickname), role: m.role || 'member' })); }
        catch { return []; }
      }
    };
    const members = await loadFormMembers();
    if (!members || members.length === 0) { Taro.showToast({ title: '暂无成员数据', icon: 'none' }); return; }
    if (members.length <= 6) {
      Taro.showActionSheet({
        itemList: members.map((m) => m.name),
        success: (r) => {
          const selected = members[r.tapIndex];
          setFormData((prev) => ({ ...prev, memberId: String(selected.id), memberName: selected.name }));
        },
      });
    } else {
      setFormData((prev) => ({ ...prev, _pickerMembers: members }));
      setShowMemberPicker(true);
    }
  }, []);

  const handleStartDateSelect = useCallback(() => {
    setDatePickerType('start');
    setShowDatePicker(true);
    const existing = formData.startDate;
    if (existing) { const p = parseDatetimeString(existing); setStartDatetimeValue(p > 0 ? p : Date.now()); }
    else setStartDatetimeValue(Date.now());
  }, [formData.startDate]);

  const handleEndDateSelect = useCallback(() => {
    setDatePickerType('end');
    setShowDatePicker(true);
    const existing = formData.endDate;
    if (existing) { const p = parseDatetimeString(existing); setStartDatetimeValue(p > 0 ? p : Date.now()); }
    else setStartDatetimeValue(Date.now());
  }, [formData.endDate]);

  const handleDateConfirm = useCallback(() => {
    const selectedStr = formatDatetime(startDatetimeValue);
    if (datePickerType === 'start') {
      if (startDatetimeValue < Date.now() - 60000) { Taro.showToast({ title: '开始时间不能早于当前时间', icon: 'none' }); return; }
      setFormData((prev) => ({ ...prev, startDate: selectedStr }));
    } else {
      setFormData((prev) => ({ ...prev, endDate: selectedStr }));
    }
    setShowDatePicker(false);
  }, [datePickerType, startDatetimeValue]);

  const handleFrequencyTap = useCallback(() => {
    Taro.showActionSheet({
      itemList: FREQUENCY_OPTIONS.map((o) => o.label),
      success: (r) => { setFrequencyIndex(r.tapIndex); setFormData((prev) => ({ ...prev, frequency: FREQUENCY_OPTIONS[r.tapIndex].value })); },
    });
  }, []);

  const handleTimeSelect = useCallback(() => {
    setShowTimePicker(true);
    const now = new Date();
    setCurrentTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`);
  }, []);

  const handleTimeConfirm = useCallback((timeStr: string) => {
    const slots = [...formData.timeSlots];
    if (!slots.includes(timeStr)) { slots.push(timeStr); slots.sort(); setFormData((prev) => ({ ...prev, timeSlots: slots })); }
    else Taro.showToast({ title: '该时间已添加', icon: 'none' });
    setShowTimePicker(false);
  }, [formData.timeSlots]);

  const handleRemoveTimeSlot = useCallback((index: number) => {
    const slots = [...formData.timeSlots]; slots.splice(index, 1); setFormData((prev) => ({ ...prev, timeSlots: slots }));
  }, [formData.timeSlots]);

  const handleSubmit = useCallback(async () => {
    const { medicineName, memberName, startDate, timeSlots, frequency, notes, medicineId } = formData;
    if (!medicineName || !medicineName.trim()) { Taro.showToast({ title: '请选择药品', icon: 'none' }); return; }
    if (!memberName || !memberName.trim()) { Taro.showToast({ title: '请选择成员', icon: 'none' }); return; }
    if (!startDate || !startDate.trim()) { Taro.showToast({ title: '请选择开始日期', icon: 'none' }); return; }
    if (!timeSlots || timeSlots.length === 0) { Taro.showToast({ title: '请选择服药时间', icon: 'none' }); return; }
    Taro.showLoading({ title: '保存中...', mask: true });
    const planData: any = {
      medicineName: medicineName.trim(), memberName: memberName.trim(),
      startDate, endDate: formData.endDate || null, timeSlots, frequency,
    };
    try {
      if (editingPlan) await planApi.update(editingPlan.id, planData);
      else await planApi.create(planData);
      Taro.hideLoading(); Taro.showToast({ title: '保存成功', icon: 'success' });
      handleCloseDialog(); loadPlans();
    } catch { Taro.hideLoading(); Taro.showToast({ title: '保存失败', icon: 'none' }); }
  }, [formData, editingPlan, handleCloseDialog, loadPlans]);

  const frequencyLabel = useMemo(() => {
    const opt = FREQUENCY_OPTIONS[frequencyIndex]; return opt ? opt.label : '每日';
  }, [frequencyIndex]);

  // Lifecycle
  useLoad(() => {
    Taro.getSystemInfo().then((res) => setStatusBarHeight(res.statusBarHeight || 0)).catch(() => {});
    loadMembers().then(() => {
      const storedId = Taro.getStorageSync('selectedMemberId');
      const storedName = Taro.getStorageSync('selectedMemberName') || '';
      const storedRole = Taro.getStorageSync('selectedMemberRole') || '';
      if (storedName) { setSelectedMemberId(storedId || null); setSelectedMemberName(storedName); setSelectedMemberRole(storedRole); }
    });
    loadPlans(); loadMedicines();
  });

  useDidShow(() => {
    const storedId = Taro.getStorageSync('selectedMemberId');
    const storedName = Taro.getStorageSync('selectedMemberName') || '';
    setSelectedMemberId(storedId || null); setSelectedMemberName(storedName);
    setSelectedMemberRole(Taro.getStorageSync('selectedMemberRole') || '');
    loadMembers().then(() => { if (!storedName && !storedId && isAdmin && familyMembers.length > 0) selectDefaultMember(); });
    loadPlans(); loadMedicines();
  });

  useEffect(() => {
    if (familyMembers.length > 0 && !selectedMemberName && !selectedMemberId && isAdmin) selectDefaultMember();
  }, [familyMembers, selectedMemberName, selectedMemberId, isAdmin, selectDefaultMember]);

  usePullDownRefresh(() => { loadPlans(); Taro.stopPullDownRefresh(); });

  const TAB_LIST = [{ key: 'all', label: '全部' }, { key: 'active', label: '进行中' }, { key: 'ended', label: '已结束' }];
  const freqLabel = (freq?: string) => {
    if (freq === 'daily') return '每日'; if (freq === 'weekly') return '每周'; if (freq === 'monthly') return '每月'; return freq || '未设置';
  };

  return (
    <View className={`plan-container ${isSeniorMode ? 'senior-mode' : ''}`} style={{ paddingTop: `${statusBarHeight + 88}px` }}>
      <View className="nav-bar" style={{ paddingTop: `${statusBarHeight}px` }}>
        <View className="nav-bar-content">
          <View style={{ width: '60px' }} />
          <Text className="nav-bar-title">用药计划</Text>
          <View style={{ width: '60px' }} />
        </View>
      </View>

      {isAdmin && (
        <View className="plan-member-selector">
          <ScrollView scrollX className="member-scroll">
            <View className="member-list">
              {familyMembers.map((m) => (
                <View key={String(m.id)} className={`member-tag ${String(m.id) === String(selectedMemberId) ? 'member-tag-active' : ''}`} onClick={() => handleMemberChange(String(m.id), m.name)}>
                  <Text className="member-tag-text">{m.name}</Text>
                  {m.role === 'admin' && <Text className="member-tag-role">管理员</Text>}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}

      <View className="filter-tabs">
        {TAB_LIST.map((tab) => (
          <View key={tab.key} className={`filter-tab ${filterType === tab.key ? 'filter-tab-active' : ''}`} onClick={() => handleFilterChange(tab.key)}>
            <Text className={`filter-tab-text ${filterType === tab.key ? 'filter-tab-text-active' : ''}`}>{tab.label}</Text>
          </View>
        ))}
      </View>

      <View className="plan-list">
        {plans.map((plan) => (
          <View key={plan.id} className={`plan-item ${plan.status === 'ended' ? 'plan-item-ended' : ''}`}>
            <View className="plan-header">
              <Text className={`plan-name ${plan.status === 'ended' ? 'plan-name-ended' : ''}`} onClick={() => isAdmin && handleEditPlan(plan)}>{plan.medicineName}</Text>
              <View className="plan-header-right">
                <View className={`tag ${plan.status === 'active' ? 'tag-success' : 'tag-default'}`}><Text>{plan.status === 'active' ? '进行中' : '已结束'}</Text></View>
                {isAdmin && <Text className="plan-delete-icon" onClick={() => handleDeletePlan(plan)}>🗑</Text>}
              </View>
            </View>
            <View className="plan-info" onClick={() => isAdmin && handleEditPlan(plan)}>
              <Text className={`info-text ${plan.status === 'ended' ? 'info-text-ended' : ''}`}>成员：{plan.memberName}</Text>
              <Text className={`info-text ${plan.status === 'ended' ? 'info-text-ended' : ''}`}>频率：{freqLabel((plan as any).frequency)}</Text>
              <Text className={`info-text ${plan.status === 'ended' ? 'info-text-ended' : ''}`}>服药时间：{plan.timeSlots && plan.timeSlots.length > 0 ? plan.timeSlots.join(', ') : '未设置'}</Text>
              <Text className={`info-text ${plan.status === 'ended' ? 'info-text-ended' : ''}`}>开始时间：{plan.startDate || '未设置'}</Text>
              <Text className={`info-text ${plan.status === 'ended' ? 'info-text-ended' : ''}`}>结束时间：{plan.endDate || '无'}</Text>
            </View>
          </View>
        ))}
        {plans.length === 0 && !loading && <View className="empty-state"><Text className="empty-state-text">暂无用药计划</Text></View>}
      </View>

      <View className="add-button"><View className="add-btn" onClick={handleAddPlan}><Text className="add-btn-text">+ 添加计划</Text></View></View>

      {/* Add/Edit Dialog */}
      {showAddDialog && (
        <View className="dialog-overlay" onClick={handleCloseDialog}>
          <View className="dialog-container" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-header"><Text className="dialog-title">{editingPlan ? '编辑用药计划' : '添加用药计划'}</Text><Text className="dialog-close" onClick={handleCloseDialog}>✕</Text></View>
            <ScrollView scrollY className="dialog-content">
              <View className="form-item" onClick={handleMedicineSelect}>
                <View className="form-label"><Text>药品</Text><Text className="required-mark">*</Text></View>
                <View className="form-value"><Text className={`form-value-text ${formData.medicineName ? 'has-value' : ''}`}>{formData.medicineName || '选择药品'}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              <View className="form-item" onClick={handleMemberSelectForm}>
                <View className="form-label"><Text>成员</Text><Text className="required-mark">*</Text></View>
                <View className="form-value"><Text className={`form-value-text ${formData.memberName ? 'has-value' : ''}`}>{formData.memberName || '选择成员'}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              <View className="form-item" onClick={handleStartDateSelect}>
                <View className="form-label"><Text>开始时间</Text><Text className="required-mark">*</Text></View>
                <View className="form-value"><Text className={`form-value-text ${formData.startDate ? 'has-value' : ''}`}>{formData.startDate || '选择开始时间'}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              <View className="form-item" onClick={handleEndDateSelect}>
                <View className="form-label"><Text>结束日期</Text></View>
                <View className="form-value"><Text className={`form-value-text ${formData.endDate ? 'has-value' : ''}`}>{formData.endDate || '选择结束日期（可选）'}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              <View className="form-item" onClick={handleFrequencyTap}>
                <View className="form-label"><Text>用药频率</Text><Text className="required-mark">*</Text></View>
                <View className="form-value"><Text className="form-value-text has-value">{frequencyLabel}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              <View className="form-item" onClick={handleTimeSelect}>
                <View className="form-label"><Text>用药时间</Text><Text className="required-mark">*</Text></View>
                <View className="form-value"><Text className={`form-value-text ${formData.timeSlots.length > 0 ? 'has-value' : ''}`}>{formData.timeSlots.length > 0 ? `已选择 ${formData.timeSlots.length} 个时间` : '选择时间'}</Text><Text className="form-arrow">▶</Text></View>
              </View>
              {formData.timeSlots.length > 0 && (
                <View className="time-slots-list">
                  {formData.timeSlots.map((slot, idx) => (
                    <View key={idx} className="time-slot-item"><Text className="time-slot-text">{slot}</Text><Text className="time-slot-remove" onClick={() => handleRemoveTimeSlot(idx)}>✕</Text></View>
                  ))}
                </View>
              )}
              <View className="form-item form-item-input">
                <View className="form-label"><Text>备注</Text></View>
                <View className="form-value">
                  <Input className="form-input" value={formData.notes} placeholder="添加备注（可选）" onInput={(e) => setFormData((prev) => ({ ...prev, notes: (e.detail as any).value || '' }))} />
                </View>
              </View>
            </ScrollView>
            <View className="dialog-footer">
              <View className="dialog-btn dialog-btn-cancel" onClick={handleCloseDialog}><Text>取消</Text></View>
              <View className="dialog-btn dialog-btn-confirm" onClick={handleSubmit}><Text>保存</Text></View>
            </View>
          </View>
        </View>
      )}

      {/* Date Picker */}
      {showDatePicker && (
        <View className="picker-overlay" onClick={() => setShowDatePicker(false)}>
          <View className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <View className="picker-header">
              <Text className="picker-cancel" onClick={() => setShowDatePicker(false)}>取消</Text>
              <Text className="picker-title">{datePickerType === 'start' ? '选择开始时间' : '选择结束时间'}</Text>
              <Text className="picker-confirm" onClick={handleDateConfirm}>确定</Text>
            </View>
            <View className="datetime-picker-body">
              <View className="datetime-form-item">
                <Text className="datetime-label">日期</Text>
                <Input className="datetime-input" type="text" value={formatDatetime(startDatetimeValue)} placeholder="YYYY-MM-DD HH:mm" onInput={(e) => { const v = (e.detail as any).value || e.detail; const p = new Date(v).getTime(); if (p > 0) setStartDatetimeValue(p); }} />
              </View>
              <View className="simple-date-grid">
                {['年', '月', '日', '时', '分'].map((label, li) => {
                  const d = new Date(startDatetimeValue);
                  let options: { val: number; label: string }[] = [];
                  let currentVal = 0;
                  if (li === 0) { const y = d.getFullYear(); currentVal = y; options = Array.from({ length: 11 }, (_, i) => ({ val: new Date().getFullYear() - 1 + i, label: String(new Date().getFullYear() - 1 + i) })); }
                  else if (li === 1) { const m = d.getMonth() + 1; currentVal = m; options = Array.from({ length: 12 }, (_, i) => ({ val: i + 1, label: `${i + 1}月` })); }
                  else if (li === 2) { const day = d.getDate(); currentVal = day; options = Array.from({ length: 31 }, (_, i) => ({ val: i + 1, label: String(i + 1) })); }
                  else if (li === 3) { const h = d.getHours(); currentVal = h; options = Array.from({ length: 24 }, (_, i) => ({ val: i, label: String(i).padStart(2, '0') })); }
                  else { const min = d.getMinutes(); currentVal = min; options = Array.from({ length: 12 }, (_, i) => ({ val: i * 5, label: String(i * 5).padStart(2, '0') })); }
                  return (
                    <View key={label} className="simple-date-row">
                      <Text>{label}:</Text>
                      <ScrollView scrollX className="simple-date-scroll">
                        <View className="simple-date-options">
                          {options.map((o) => (
                            <View key={o.val} className={`simple-date-option ${currentVal === o.val ? 'active' : ''}`} onClick={() => {
                              const nd = new Date(startDatetimeValue);
                              if (li === 0) nd.setFullYear(o.val);
                              else if (li === 1) nd.setMonth(o.val - 1);
                              else if (li === 2) nd.setDate(o.val);
                              else if (li === 3) nd.setHours(o.val);
                              else nd.setMinutes(o.val);
                              setStartDatetimeValue(nd.getTime());
                            }}><Text>{o.label}</Text></View>
                          ))}
                        </View>
                      </ScrollView>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Time Picker */}
      {showTimePicker && (
        <View className="picker-overlay" onClick={() => setShowTimePicker(false)}>
          <View className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <View className="picker-header">
              <Text className="picker-cancel" onClick={() => setShowTimePicker(false)}>取消</Text>
              <Text className="picker-title">选择时间</Text>
              <Text className="picker-confirm" onClick={() => handleTimeConfirm(currentTime)}>确定</Text>
            </View>
            <ScrollView scrollY className="time-picker-body">
              {(() => { const h: string[] = []; for (let hh = 0; hh < 24; hh++) for (let mm = 0; mm < 60; mm += 30) h.push(`${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`); return h; })().map((h) => (
                <View key={h} className={`time-option ${h === currentTime ? 'time-option-active' : ''}`} onClick={() => setCurrentTime(h)}><Text>{h}</Text></View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

      {/* Medicine Picker */}
      {showMedicinePicker && (
        <View className="dialog-overlay" onClick={() => setShowMedicinePicker(false)}>
          <View className="medicine-picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="popup-header"><Text className="popup-title">选择药品</Text><Text className="popup-close" onClick={() => setShowMedicinePicker(false)}>✕</Text></View>
            <ScrollView className="popup-list" scrollY>
              {medicines.map((med) => (
                <View key={med.id} className="member-item" onClick={() => { setFormData((prev) => ({ ...prev, medicineId: String(med.id), medicineName: med.name })); setShowMedicinePicker(false); }}>
                  <View className="member-item-left"><Text className="med-icon">💊</Text><Text className="member-item-name">{med.name}</Text></View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

      {/* Member Picker */}
      {showMemberPicker && (
        <View className="dialog-overlay" onClick={() => setShowMemberPicker(false)}>
          <View className="medicine-picker-popup" onClick={(e) => e.stopPropagation()}>
            <View className="popup-header"><Text className="popup-title">选择成员</Text><Text className="popup-close" onClick={() => setShowMemberPicker(false)}>✕</Text></View>
            <ScrollView className="popup-list" scrollY>
              {(formData as any)._pickerMembers?.map((m: any) => (
                <View key={m.id} className="member-item" onClick={() => { setFormData((prev) => ({ ...prev, memberId: String(m.id), memberName: m.name, _pickerMembers: undefined })); setShowMemberPicker(false); }}>
                  <View className="member-item-left"><Text className="med-icon">👤</Text><Text className="member-item-name">{m.name}</Text></View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
      <CustomTabBar />
    </View>
  );
}
