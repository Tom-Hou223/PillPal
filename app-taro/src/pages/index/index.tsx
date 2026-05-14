import { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro, { useDidShow, useLoad, usePullDownRefresh } from '@tarojs/taro';
import { useUserStore } from '../../stores/user.store';
import { UserManager, FamilyManager } from '../../services/api';
import { planApi, medicineApi, recordsApi, familiesApi, familyApi } from '../../services/api';
import { formatDate, getDaysInMonth, getFirstDayOfWeek, safeName } from '../../utils/date';
import type { Plan, Medicine, Record as MedRecord } from '../../types/api';
import CustomTabBar from '../../custom-tab-bar';
import './index.scss';

interface Member {
  id: string | number;
  name: string;
  role: string;
}

interface DayStatusMap {
  [dateStr: string]: 'done' | 'pending' | 'missed';
}

interface TimeGroupedPlan {
  time: string;
  medicines: MedicineItem[];
  total: number;
  completed: number;
}

interface MedicineItem {
  id: string;
  planId: number;
  medicineName: string;
  memberName: string;
  timeSlot: string;
  dosage: string;
  status: string;
  supplement: string;
}

const MONTH_NAMES = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

function normalizeDateString(dateStr: string): string {
  if (!dateStr) return '';
  if (dateStr.indexOf('T') !== -1) {
    return formatDate(new Date(dateStr));
  }
  if (dateStr.length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  try {
    return formatDate(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

export default function IndexPage() {
  const { isSeniorMode, seniorTheme, isGuestMode, loadFromStorage } = useUserStore();
  const isAdmin = FamilyManager.isAdmin();
  const familyName = FamilyManager.getCurrentFamily()?.name || '';

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  // Date state
  const today = new Date();
  const todayStr = formatDate(today);
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  // Data
  const [dayStatusMap, setDayStatusMap] = useState<DayStatusMap>({});
  const [timeGroupedPlans, setTimeGroupedPlans] = useState<TimeGroupedPlan[]>([]);
  const [todayPlans, setTodayPlans] = useState<Plan[]>([]);
  const [todayRecords, setTodayRecords] = useState<MedRecord[]>([]);
  const [totalMedicinesCount, setTotalMedicinesCount] = useState(0);
  const [medicineStats, setMedicineStats] = useState({ total: 0, expiring: 0, expired: 0 });

  // Members
  const [familyMembers, setFamilyMembers] = useState<Member[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedMemberName, setSelectedMemberName] = useState('');
  const [selectedMemberRole, setSelectedMemberRole] = useState('');

  // Calendar display
  const [showPicker, setShowPicker] = useState(false);
  const [pickerYear, setPickerYear] = useState(today.getFullYear());
  const [pickerMonth, setPickerMonth] = useState(today.getMonth() + 1);

  // ========== Normalize date helper ==========
  const normDateStr = useCallback(normalizeDateString, []);

  // ========== Group plans by time ==========
  const groupPlansByTime = useCallback((plans: Plan[], records: MedRecord[]): TimeGroupedPlan[] => {
    const timeGroups: Record<string, TimeGroupedPlan> = {};
    const recordMap: Record<string, MedRecord> = {};
    records.forEach((record) => {
      const key = `${record.planId}_${record.time}`;
      recordMap[key] = record;
    });

    plans.forEach((plan) => {
      const timeSlots = plan.timeSlots || ['默认时间'];
      timeSlots.forEach((timeSlot) => {
        if (!timeGroups[timeSlot]) {
          timeGroups[timeSlot] = { time: timeSlot, medicines: [], total: 0, completed: 0 };
        }
        const recordKey = `${plan.id}_${timeSlot}`;
        const record = recordMap[recordKey];
        let status = 'pending';
        let supplement = '';
        if (record) {
          status = record.status;
          supplement = (record as any).supplement || '';
        }
        const uniqueId = `${plan.id}_${timeSlot}`;
        timeGroups[timeSlot].medicines.push({
          id: uniqueId,
          planId: plan.id,
          medicineName: plan.medicineName,
          memberName: plan.memberName,
          timeSlot,
          dosage: (plan as any).dosage || '1片',
          status,
          supplement,
        });
        timeGroups[timeSlot].total++;
        if (status === 'completed') {
          timeGroups[timeSlot].completed++;
        }
      });
    });

    return Object.values(timeGroups).sort((a, b) => a.time.localeCompare(b.time));
  }, []);

  // ========== Load month status ==========
  const loadMonthStatus = useCallback(
    async (year: number, month: number) => {
      const monthStr = String(month).padStart(2, '0');
      const lastDay = getDaysInMonth(year, month);
      const startDate = `${year}-${monthStr}-01`;
      const endDate = `${year}-${monthStr}-${String(lastDay).padStart(2, '0')}`;
      const todayDate = formatDate(new Date());

      try {
        const [plansRes, recordsRes]: [any, any] = await Promise.all([
          planApi.getList(),
          recordsApi.getList().catch(() => ({ data: [] as MedRecord[] })),
        ]);

        let allPlans: Plan[] = (plansRes.data || []).filter(
          (p: Plan) => p.status === 'active' || !p.status
        );

        // Filter by member
        if (isAdmin && selectedMemberName) {
          allPlans = allPlans.filter((p) => p.memberName === selectedMemberName);
        } else if (!isAdmin) {
          const userInfo = UserManager.getUser();
          const currentUserName = userInfo?.nickname || '';
          if (currentUserName) {
            allPlans = allPlans.filter((p) => p.memberName === currentUserName);
          }
        }

        const allRecords: MedRecord[] = recordsRes.data || [];
        const monthRecords = allRecords.filter((r) => {
          let rDate = r.date || '';
          if (rDate.includes('T')) {
            rDate = formatDate(new Date(rDate));
          }
          return rDate >= startDate && rDate <= endDate;
        });

        const newDayStatusMap: DayStatusMap = {};

        for (let d = 1; d <= lastDay; d++) {
          const dayStr = String(d).padStart(2, '0');
          const dateStr = `${year}-${monthStr}-${dayStr}`;
          const currentDateObj = new Date(dateStr);

          const dayPlans = allPlans.filter((plan) => {
            const planStartDate = plan.startDate ? normDateStr(plan.startDate) : null;
            const planEndDate = plan.endDate ? normDateStr(plan.endDate) : null;

            if (planStartDate) {
              const sd = new Date(planStartDate);
              if (currentDateObj < sd) return false;
            }
            if (planEndDate) {
              const ed = new Date(planEndDate);
              if (currentDateObj > ed) return false;
            }
            if (!planStartDate && !planEndDate) {
              const td = new Date(todayDate);
              if (currentDateObj < td) return false;
            }
            return true;
          });

          if (dayPlans.length === 0) continue;

          let totalExpectedCount = 0;
          dayPlans.forEach((plan) => {
            const slots = plan.timeSlots || ['默认时间'];
            totalExpectedCount += slots.length;
          });

          const dayRecords = monthRecords.filter((r) => {
            let rDate = r.date || '';
            if (rDate.includes('T')) rDate = formatDate(new Date(rDate));
            return rDate === dateStr;
          });

          const completedCount = dayRecords.filter((r) => r.status === 'completed').length;
          const missedCount = dayRecords.filter((r) => r.status === 'missed').length;

          let status: 'done' | 'pending' | 'missed' = 'none' as any;
          if (completedCount >= totalExpectedCount) {
            status = 'done';
          } else if (missedCount > 0) {
            status = 'missed';
          } else if (dateStr >= todayDate) {
            status = 'pending';
          } else {
            status = 'missed';
          }
          newDayStatusMap[dateStr] = status;
        }

        setDayStatusMap({ ...newDayStatusMap });
      } catch (error) {
        console.error('加载月度用药状态失败:', error);
        setDayStatusMap({});
      }
    },
    [isAdmin, selectedMemberName, normDateStr]
  );

  // ========== Load data for selected date ==========
  const loadData = useCallback(
    async (dateStr?: string) => {
      if (loading) return;
      setLoading(true);

      const targetDate = dateStr || selectedDate;

      try {
        const [plansRes, medicinesRes, recordsRes]: [any, any, any] = await Promise.all([
          planApi.getList(),
          medicineApi.getList(),
          recordsApi.getList(targetDate),
        ]);

        let allPlans: Plan[] = plansRes.data || [];

        if (isAdmin && selectedMemberName) {
          allPlans = allPlans.filter((p) => p.memberName === selectedMemberName);
        } else if (!isAdmin) {
          const userInfo = UserManager.getUser();
          const currentUserName = userInfo?.nickname || '';
          if (currentUserName) {
            allPlans = allPlans.filter((p) => p.memberName === currentUserName);
          }
        }

        const plansForDate = allPlans.filter((plan) => {
          if (plan.status !== 'active') return false;
          const planStartDate = plan.startDate ? normDateStr(plan.startDate) : null;
          const planEndDate = plan.endDate ? normDateStr(plan.endDate) : null;
          if (planStartDate && targetDate < planStartDate) return false;
          if (planEndDate && targetDate > planEndDate) return false;
          return true;
        });

        // Calculate medicine stats
        const medicines: Medicine[] = medicinesRes.data || [];
        const currentDate = new Date();
        let expiring = 0;
        let expired = 0;
        medicines.forEach((med) => {
          try {
            if (!med.expiryDate) return;
            const expiryDate = new Date(med.expiryDate);
            const timeDiff = expiryDate.getTime() - currentDate.getTime();
            const daysToExpiry = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            if (daysToExpiry <= 0) {
              expired++;
            } else if (daysToExpiry <= 90) {
              expiring++;
            }
          } catch {
            // ignore
          }
        });

        const total = medicines.length;
        const records: MedRecord[] = recordsRes.data || [];
        const groups = groupPlansByTime(plansForDate, records);
        const count = groups.reduce((sum, g) => sum + g.total, 0);

        setTodayPlans(plansForDate);
        setTimeGroupedPlans(groups);
        setTotalMedicinesCount(count);
        setMedicineStats({ total, expiring, expired });
        setTodayRecords(records);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setTodayPlans([]);
        setTimeGroupedPlans([]);
        setTotalMedicinesCount(0);
        setTodayRecords([]);

        if (error.message === '未登录') {
          loadMockData();
        } else if (error.message === '请先选择家庭') {
          Taro.showToast({ title: '请先选择家庭', icon: 'none' });
        } else {
          // Silently fallback to mock for guest mode
          loadMockData();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedDate, isAdmin, selectedMemberName, loading]
  );

  // ========== Load members ==========
  const loadMembers = useCallback(async () => {
    const familyId = FamilyManager.getCurrentFamilyId();
    if (!familyId) {
      setFamilyMembers([]);
      return;
    }
    try {
      const res: any = await familiesApi.getMembers(familyId);
      const members: any[] = res.data || [];
      const formatted = members.map((m: any) => {
        const nickname = m.nickname || m.user?.nickname;
        const phone = m.phone || m.user?.phone;
        const name = safeName(nickname || (phone ? phone.slice(-4) + '用户' : m.relationship));
        return {
          id: m.userId,
          name,
          role: m.role || 'member',
        };
      });
      // 去重处理
      const uniqueMembers = [];
      const seenIds = new Set();
      for (const member of formatted) {
        if (!seenIds.has(String(member.id))) {
          seenIds.add(String(member.id));
          uniqueMembers.push(member);
        }
      }
      setFamilyMembers(uniqueMembers);
    } catch {
      try {
        const res2: any = await familyApi.getList();
        const list: any[] = res2.data || [];
        const formatted = list.map((m: any) => ({
          id: m.id || m.userId,
          name: safeName(m.name || m.nickname),
          role: m.role || 'member',
        }));
        // 去重处理
        const uniqueMembers = [];
        const seenIds = new Set();
        for (const member of formatted) {
          if (!seenIds.has(String(member.id))) {
            seenIds.add(String(member.id));
            uniqueMembers.push(member);
          }
        }
        setFamilyMembers(uniqueMembers);
      } catch {
        setFamilyMembers([]);
      }
    }
  }, []);

  // ========== Select default member ==========
  const selectDefaultMember = useCallback(() => {
    const currentUserId = (UserManager.getUser() as any)?.id;
    let member: Member | undefined;
    if (currentUserId) {
      member = familyMembers.find((m) => String(m.id) === String(currentUserId));
    }
    if (!member && familyMembers.length > 0) {
      member = familyMembers[0];
    }
    if (member) {
      setSelectedMemberId(String(member.id));
      setSelectedMemberName(member.name);
      setSelectedMemberRole(member.role || '');
      Taro.setStorageSync('selectedMemberId', member.id);
      Taro.setStorageSync('selectedMemberName', member.name);
      Taro.setStorageSync('selectedMemberRole', member.role || '');
      const now = new Date();
      loadMonthStatus(now.getFullYear(), now.getMonth() + 1);
      loadData();
    }
  }, [familyMembers, loadMonthStatus, loadData]);

  // ========== Mock data for guest mode ==========
  const loadMockData = useCallback(() => {
    const savedMedicines: Medicine[] = Taro.getStorageSync('guest_medicines') || [];
    const savedPlans: any[] = Taro.getStorageSync('guest_plans') || [];
    const savedRecords: any[] = Taro.getStorageSync('guest_records') || [];

    const mockMedicines: Medicine[] =
      savedMedicines.length > 0
        ? savedMedicines
        : ([
            {
              id: 5001,
              name: '阿莫西林胶囊',
              manufacturer: '华北制药',
              specification: '0.25g*24粒',
              dosage: '每次2粒，每日3次，饭后服用',
              stock: 10,
              unit: '盒',
              expiryDate: '2026-06-30',
              category: '抗生素',
              status: 'normal',
              familyId: 0,
            },
            {
              id: 5002,
              name: '布洛芬缓释胶囊',
              manufacturer: '中美天津史克',
              specification: '0.3g*12粒',
              dosage: '每次1粒，每日2次，疼痛时服用',
              stock: 5,
              unit: '盒',
              expiryDate: '2026-04-30',
              category: '止痛药',
              status: 'normal',
              familyId: 0,
            },
          ] as any);

    const mockPlans: any[] =
      savedPlans.length > 0
        ? savedPlans
        : [
            {
              id: 6001,
              medicineId: 5001,
              medicineName: '阿莫西林胶囊',
              memberId: 4001,
              memberName: '我',
              frequency: '每日3次',
              timeSlots: ['08:00', '12:00', '18:00'],
              startDate: formatDate(new Date()),
              endDate: formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
              status: 'active',
            },
          ];

    const currentDate = new Date();
    let expiring = 0;
    let expired = 0;
    mockMedicines.forEach((med: any) => {
      try {
        if (!med.expiryDate) return;
        const expiryDate = new Date(med.expiryDate);
        const timeDiff = expiryDate.getTime() - currentDate.getTime();
        const daysToExpiry = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        if (daysToExpiry <= 0) expired++;
        else if (daysToExpiry <= 90) expiring++;
      } catch {
        // ignore
      }
    });

    const groups = groupPlansByTime(mockPlans, savedRecords);
    const count = groups.reduce((sum, g) => sum + g.total, 0);

    setTodayPlans(mockPlans);
    setTimeGroupedPlans(groups);
    setTotalMedicinesCount(count);
    setMedicineStats({ total: mockMedicines.length, expiring, expired });
    setTodayRecords(savedRecords);
    setLoading(false);
  }, [groupPlansByTime]);

  // ========== Update medicine status ==========
  const updateMedicineStatus = useCallback(
    (medicineId: string, status: string) => {
      setTimeGroupedPlans((prev) => {
        const updated = prev.map((group) => {
          const updatedMedicines = group.medicines.map((m) => {
            if (m.id === medicineId) return { ...m, status };
            return m;
          });
          const completed = updatedMedicines.filter((m) => m.status === 'completed').length;
          return { ...group, medicines: updatedMedicines, completed };
        });
        return updated;
      });

      // Save to local storage for guest mode
      if (isGuestMode) {
        const [planIdStr, timeSlot] = medicineId.split('_');
        setTodayRecords((prev) => {
          const existingIndex = prev.findIndex(
            (r) => String(r.planId) === planIdStr && r.time === timeSlot
          );
          if (existingIndex >= 0) {
            const updated = [...prev];
            updated[existingIndex] = {
              ...updated[existingIndex],
              status: status as any,
            };
            Taro.setStorageSync('guest_records', updated);
            return updated;
          } else {
            const newRecord: any = {
              id: Date.now(),
              planId: Number(planIdStr),
              medicineName: '',
              memberName: '',
              time: timeSlot,
              date: selectedDate,
              status,
              supplement: '',
            };
            const updated = [...prev, newRecord];
            Taro.setStorageSync('guest_records', updated);
            return updated;
          }
        });
      }
    },
    [isGuestMode, selectedDate]
  );

  // ========== Handlers ==========
  const handleConfirmMedicine = useCallback(
    async (medicine: MedicineItem) => {
      if (isGuestMode) {
        updateMedicineStatus(medicine.id, 'completed');
        Taro.showToast({ title: '已确认服药', icon: 'success' });
      } else {
        Taro.showLoading({ title: '处理中...', mask: true });
        try {
          await recordsApi.add({
            planId: medicine.planId,
            date: selectedDate,
            time: medicine.timeSlot,
            status: 'completed',
          });
          await new Promise((r) => setTimeout(r, 500));
          await loadData(selectedDate);
          const date = new Date(selectedDate);
          await loadMonthStatus(date.getFullYear(), date.getMonth() + 1);
          Taro.hideLoading();
          Taro.showToast({ title: '已确认服药', icon: 'success' });
        } catch {
          Taro.hideLoading();
          Taro.showToast({ title: '操作失败', icon: 'none' });
        }
      }
    },
    [isGuestMode, selectedDate, loadData, loadMonthStatus, updateMedicineStatus]
  );

  const handleSkipMedicine = useCallback(
    (medicine: MedicineItem) => {
      Taro.showModal({
        title: '跳过服药',
        content: '确定要跳过本次服药吗？',
        success: (res) => {
          if (res.confirm) {
            updateMedicineStatus(medicine.id, 'skipped');
            Taro.showToast({ title: '已跳过', icon: 'none' });
          }
        },
      });
    },
    [updateMedicineStatus]
  );

  const handleLaterMedicine = useCallback((_medicine: MedicineItem) => {
    Taro.showToast({ title: '稍后提醒', icon: 'none' });
  }, []);

  const handlePrevMonth = useCallback(() => {
    let year = currentYear;
    let month = currentMonth - 1;
    if (month === 0) {
      month = 12;
      year -= 1;
    }
    setCurrentYear(year);
    setCurrentMonth(month);
    setSelectedDate(`${year}-${String(month).padStart(2, '0')}-01`);
    loadMonthStatus(year, month);
    loadData(`${year}-${String(month).padStart(2, '0')}-01`);
  }, [currentYear, currentMonth, loadMonthStatus, loadData]);

  const handleNextMonth = useCallback(() => {
    let year = currentYear;
    let month = currentMonth + 1;
    if (month === 13) {
      month = 1;
      year += 1;
    }
    setCurrentYear(year);
    setCurrentMonth(month);
    setSelectedDate(`${year}-${String(month).padStart(2, '0')}-01`);
    loadMonthStatus(year, month);
    loadData(`${year}-${String(month).padStart(2, '0')}-01`);
  }, [currentYear, currentMonth, loadMonthStatus, loadData]);

  const handleBackToToday = useCallback(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const dateStr = formatDate(now);
    setSelectedDate(dateStr);
    setCurrentYear(year);
    setCurrentMonth(month);
    loadMonthStatus(year, month);
    loadData(dateStr);
  }, [loadMonthStatus, loadData]);

  const handleDaySelect = useCallback(
    (day: number) => {
      const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      setSelectedDate(dateStr);
      loadData(dateStr);
    },
    [currentYear, currentMonth, loadData]
  );

  const handleMonthPickerOpen = useCallback(() => {
    setPickerYear(currentYear);
    setPickerMonth(currentMonth);
    setShowPicker(true);
  }, [currentYear, currentMonth]);

  const handleMonthPickerConfirm = useCallback(() => {
    setShowPicker(false);
    setCurrentYear(pickerYear);
    setCurrentMonth(pickerMonth);
    const dateStr = `${pickerYear}-${String(pickerMonth).padStart(2, '0')}-01`;
    setSelectedDate(dateStr);
    loadMonthStatus(pickerYear, pickerMonth);
    loadData(dateStr);
  }, [pickerYear, pickerMonth, loadMonthStatus, loadData]);

  const handleMemberChange = useCallback(
    (memberId: string, memberName: string) => {
      let memberRole = '';
      if (memberId) {
        const member = familyMembers.find((m) => String(m.id) === String(memberId));
        memberRole = member?.role || '';
      }
      Taro.setStorageSync('selectedMemberId', memberId || '');
      Taro.setStorageSync('selectedMemberName', memberName);
      Taro.setStorageSync('selectedMemberRole', memberRole);
      setSelectedMemberId(memberId || null);
      setSelectedMemberName(memberName);
      setSelectedMemberRole(memberRole);
      const now = new Date();
      loadMonthStatus(now.getFullYear(), now.getMonth() + 1);
      loadData();
    },
    [familyMembers, loadMonthStatus, loadData]
  );

  const handleAddPlan = useCallback(() => {
    Taro.navigateTo({ url: `/pages/addPlan/addPlan?date=${selectedDate}` });
  }, [selectedDate]);

  // ========== Lifecycle ==========
  useLoad(() => {
    Taro.getSystemInfo()
      .then((res) => {
        setStatusBarHeight(res.statusBarHeight || 0);
      })
      .catch(() => {});

    loadFromStorage();
    loadMembers().then(() => {
      const storedMemberId = Taro.getStorageSync('selectedMemberId');
      const storedMemberName = Taro.getStorageSync('selectedMemberName') || '';
      const storedMemberRole = Taro.getStorageSync('selectedMemberRole') || '';

      if (storedMemberName) {
        setSelectedMemberId(storedMemberId || null);
        setSelectedMemberName(storedMemberName);
        setSelectedMemberRole(storedMemberRole);
      }
    });
    loadMonthStatus(currentYear, currentMonth);
    loadData();
  });

  useDidShow(() => {
    const storedMemberId = Taro.getStorageSync('selectedMemberId');
    const storedMemberName = Taro.getStorageSync('selectedMemberName') || '';
    const storedMemberRole = Taro.getStorageSync('selectedMemberRole') || '';
    setSelectedMemberId(storedMemberId || null);
    setSelectedMemberName(storedMemberName);
    setSelectedMemberRole(storedMemberRole);

    loadMembers().then(() => {
      // Check if we need default member selection
      if (!storedMemberName && !storedMemberId) {
        const members = familyMembers;
        // selectDefaultMember will be called via effect
      }
    });

    setDayStatusMap({});
    setTodayPlans([]);
    setTimeGroupedPlans([]);
    setTotalMedicinesCount(0);
    setTodayRecords([]);
    loadMonthStatus(currentYear, currentMonth);
    loadData();
  });

  // Select default member when members load and no selection exists
  useEffect(() => {
    if (
      familyMembers.length > 0 &&
      !selectedMemberName &&
      !selectedMemberId &&
      isAdmin
    ) {
      selectDefaultMember();
    }
  }, [familyMembers, selectedMemberName, selectedMemberId, isAdmin, selectDefaultMember]);

  usePullDownRefresh(() => {
    loadData();
    Taro.stopPullDownRefresh();
  });

  // ========== Render helpers ==========
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);
    const cells: React.ReactNode[] = [];

    // Empty cells before first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(<View key={`empty-${i}`} className="calendar-day calendar-day-empty" />);
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const dayStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = dayStr === todayStr;
      const isSelected = dayStr === selectedDate;
      const status = dayStatusMap[dayStr];

      let statusClass = '';
      if (status === 'done') statusClass = 'calendar-day-done';
      else if (status === 'pending') statusClass = 'calendar-day-pending';
      else if (status === 'missed') statusClass = 'calendar-day-missed';

      cells.push(
        <View
          key={d}
          className={`calendar-day ${isToday ? 'calendar-day-today' : ''} ${isSelected ? 'calendar-day-selected' : ''} ${statusClass}`}
          onClick={() => handleDaySelect(d)}
        >
          <Text className="calendar-day-text">{d}</Text>
        </View>
      );
    }

    return cells;
  };

  const renderMonthPicker = () => {
    if (!showPicker) return null;
    const years: number[] = [];
    for (let y = today.getFullYear() - 5; y <= today.getFullYear() + 5; y++) {
      years.push(y);
    }

    return (
      <View className="month-picker-overlay" onClick={() => setShowPicker(false)}>
        <View className="month-picker-modal" onClick={(e) => e.stopPropagation()}>
          <View className="picker-header">
            <Text className="picker-cancel" onClick={() => setShowPicker(false)}>取消</Text>
            <Text className="picker-title">选择年月</Text>
            <Text className="picker-confirm" onClick={handleMonthPickerConfirm}>确定</Text>
          </View>
          <View className="picker-body">
            <ScrollView className="picker-scroll" scrollY>
              {years.map((y) => (
                <View
                  key={y}
                  className={`picker-year-item ${y === pickerYear ? 'picker-active' : ''}`}
                  onClick={() => setPickerYear(y)}
                >
                  <Text>{y}年</Text>
                </View>
              ))}
            </ScrollView>
            <ScrollView className="picker-scroll" scrollY>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <View
                  key={m}
                  className={`picker-month-item ${m === pickerMonth ? 'picker-active' : ''}`}
                  onClick={() => setPickerMonth(m)}
                >
                  <Text>{m}月</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  };

  const renderStatusTag = useCallback((status: string) => {
    if (status === 'completed')
      return <Text className="tag tag-success">已完成</Text>;
    if (status === 'skipped')
      return <Text className="tag tag-default">已跳过</Text>;
    if (status === 'missed')
      return <Text className="tag tag-danger">漏服</Text>;
    return null;
  }, []);

  const renderNavBar = () => (
    <View className="nav-bar" style={{ paddingTop: `${statusBarHeight}px` }}>
      <View className="nav-bar-content">
        <Text className="nav-bar-title">首页</Text>
      </View>
    </View>
  );

  const renderMemberSelector = () => {
    if (!isAdmin) return null;
    return (
      <View className="member-selector">
        <ScrollView scrollX className="member-scroll">
          <View className="member-list">
            {familyMembers.map((m) => (
              <View
                key={String(m.id)}
                className={`member-tag ${String(m.id) === String(selectedMemberId) ? 'member-tag-active' : ''}`}
                onClick={() => handleMemberChange(String(m.id), m.name)}
              >
                <Text className="member-tag-text">{m.name}</Text>
                {m.role === 'admin' && <Text className="member-tag-role">管理员</Text>}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  // ========== Senior mode layout ==========
  if (isSeniorMode) {
    return (
      <View
        className={`index-senior-container ${seniorTheme === 'yellow' ? 'theme-yellow' : 'theme-white'}`}
        style={{ paddingTop: `${statusBarHeight + 88}px` }}
      >
        {renderNavBar()}
        {renderMemberSelector()}

        <View className="senior-stats">
          <View className="senior-stat-card">
            <Text className="stat-icon">📅</Text>
            <View className="stat-info">
              <Text className="stat-value">{timeGroupedPlans.length}</Text>
              <Text className="stat-label">今日用药</Text>
            </View>
          </View>
          <View className="senior-stat-card">
            <Text className="stat-icon">💊</Text>
            <View className="stat-info">
              <Text className="stat-value">{medicineStats.total}</Text>
              <Text className="stat-label">药品总数</Text>
            </View>
          </View>
        </View>

        <View className="senior-plans">
          <Text className="senior-section-title">今日用药</Text>
          <View className="senior-plan-list">
            {timeGroupedPlans.map((group) => (
              <View key={group.time} className="senior-time-group">
                <View className="senior-time-header">
                  <Text className="senior-time">{group.time}</Text>
                  <Text className="senior-progress">{group.completed}/{group.total}</Text>
                </View>
                <View className="senior-medicine-list">
                  {group.medicines.map((medicine) => (
                    <View
                      key={medicine.id}
                      className={`senior-medicine-card ${medicine.status === 'completed' ? 'completed' : ''}`}
                    >
                      <View className="medicine-main">
                        <Text className="medicine-name">{medicine.medicineName}</Text>
                        <Text className="medicine-dosage">{medicine.dosage}</Text>
                        <Text className="medicine-member">{medicine.memberName}</Text>
                      </View>
                      {medicine.status !== 'completed' ? (
                        <View className="medicine-action">
                          <View
                            className="senior-btn senior-btn-primary"
                            onClick={() => handleConfirmMedicine(medicine)}
                          >
                            <Text>确认服药</Text>
                          </View>
                        </View>
                      ) : (
                        <View className="medicine-status">
                          <Text className="status-text">✓ 已完成</Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            ))}
            {timeGroupedPlans.length === 0 && !loading && (
              <View className="senior-empty">
                <Text className="empty-text">今日暂无用药计划</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }

  // ========== Normal mode layout ==========
  return (
    <View className="index-container" style={{ paddingTop: `${statusBarHeight + 88 + 16}px` }}>
      {renderNavBar()}

      <View className="stats-section">
        {familyName && (
          <View className="stat-row">
            <View className="stat-card stat-card-half family-stat-card">
              <View className="stat-header">
                <Text className="stat-title">当前家庭</Text>
                <Text className="stat-icon-small">🏠</Text>
              </View>
              <View className="stat-body">
                <View className="family-info">
                  <Text className="family-name">{familyName}</Text>
                  <View className={`role-tag ${isAdmin ? 'role-admin' : 'role-member'}`}>
                    <Text>{isAdmin ? '管理员' : '成员'}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="stat-card stat-card-half">
              <View className="stat-header">
                <Text className="stat-title">药品统计</Text>
                <Text className="stat-icon-small">🏅</Text>
              </View>
              <View className="stat-body">
                <View className="stat-item">
                  <Text className="stat-number">{medicineStats.total}</Text>
                  <Text className="stat-label">总数</Text>
                </View>
                <View className="stat-item">
                  <Text className="stat-number stat-warning">{medicineStats.expiring}</Text>
                  <Text className="stat-label">临期</Text>
                </View>
                <View className="stat-item">
                  <Text className="stat-number stat-danger">{medicineStats.expired}</Text>
                  <Text className="stat-label">过期</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {renderMemberSelector()}
      </View>

      <View className="calendar-section">
        <View className="calendar-month-header">
          <View className="calendar-header-content">
            <View className="back-to-today" onClick={handleBackToToday}>
              <Text className="back-to-today-text">今天</Text>
            </View>
            <View className="calendar-month-title" onClick={handleMonthPickerOpen}>
              <View onClick={handlePrevMonth}>
                <Text className="month-nav-arrow">◀</Text>
              </View>
              <Text className="month-text">{currentYear}年 {currentMonth}月</Text>
              <View onClick={handleNextMonth}>
                <Text className="month-nav-arrow">▶</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="calendar-grid">
          {WEEKDAYS.map((w) => (
            <View key={w} className="calendar-weekday">
              <Text>{w}</Text>
            </View>
          ))}
          {renderCalendarDays()}
        </View>

        <View className="calendar-legend">
          <View className="legend-item">
            <View className="legend-color legend-done" />
            <Text className="legend-text">已完成</Text>
          </View>
          <View className="legend-item">
            <View className="legend-color legend-pending" />
            <Text className="legend-text">待服药</Text>
          </View>
          <View className="legend-item">
            <View className="legend-color legend-missed" />
            <Text className="legend-text">有漏服</Text>
          </View>
        </View>
      </View>

      <View className="plans-section">
        <View className="section-header">
          <Text className="section-title">今日用药计划</Text>
          <Text className="section-count">{totalMedicinesCount}</Text>
        </View>

        <View className="plans-list">
          {timeGroupedPlans.map((group) => (
            <View key={group.time} className="time-group">
              <View className="time-group-header">
                <View className="time-info">
                  <Text className="time-icon">🕐</Text>
                  <Text className="time-text">{group.time}</Text>
                </View>
                <View className="progress-info">
                  <Text className="progress-text">{group.completed}/{group.total}</Text>
                  <View className="progress-bar">
                    <View
                      className="progress-fill"
                      style={{
                        width: `${group.total > 0 ? (group.completed / group.total) * 100 : 0}%`,
                      }}
                    />
                  </View>
                </View>
              </View>

              <View className="medicine-list">
                {group.medicines.map((medicine) => (
                  <View
                    key={medicine.id}
                    className={`medicine-item ${
                      medicine.status === 'completed'
                        ? 'status-completed'
                        : medicine.status === 'skipped'
                        ? 'status-skipped'
                        : medicine.status === 'missed'
                        ? 'status-missed'
                        : ''
                    }`}
                  >
                    <View className="medicine-info">
                      <View className="medicine-header">
                        <Text className="medicine-icon">💊</Text>
                        <View className="medicine-details">
                          <Text className="medicine-name">{medicine.medicineName}</Text>
                          <Text className="medicine-dosage">{medicine.dosage || '1片'}</Text>
                          <Text className="medicine-time">{medicine.timeSlot}</Text>
                        </View>
                        <View className="medicine-status">{renderStatusTag(medicine.status)}</View>
                      </View>
                      <View className="medicine-member">
                        <Text className="member-text">成员：{medicine.memberName}</Text>
                      </View>
                    </View>

                    {medicine.status !== 'completed' &&
                      medicine.status !== 'skipped' &&
                      medicine.status !== 'missed' && (
                        <View className="medicine-actions">
                          <View
                            className="action-btn action-btn-primary"
                            onClick={() => handleConfirmMedicine(medicine)}
                          >
                            <Text>确认</Text>
                          </View>
                          <View
                            className="action-btn action-btn-default"
                            onClick={() => handleSkipMedicine(medicine)}
                          >
                            <Text>跳过</Text>
                          </View>
                          <View
                            className="action-btn action-btn-default"
                            onClick={() => handleLaterMedicine(medicine)}
                          >
                            <Text>稍后</Text>
                          </View>
                        </View>
                      )}

                    {medicine.status === 'completed' && medicine.supplement && (
                      <View className="supplement-record">
                        <Text className="supplement-text">{medicine.supplement}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}

          {todayPlans.length === 0 && !loading && (
            <View className="empty-state">
              <Text className="empty-state-text">今日暂无用药计划</Text>
            </View>
          )}
        </View>
      </View>

      {loading && (
        <View className="loading-overlay">
          <Text className="loading-text">加载中...</Text>
        </View>
      )}

      {renderMonthPicker()}
      <CustomTabBar />
    </View>
  );
}
