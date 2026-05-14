import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { planApi } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { formatDate } from '../../utils/date';
import type { Plan } from '../../types/api';

export default function ReminderList() {
  const { isGuestMode } = useUserStore();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isGuestMode) loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      setLoading(true);
      const res = await planApi.getList();
      if (res.code === 0) {
        setPlans((res.data || []) as Plan[]);
      }
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  const activePlans = plans.filter((p: Plan) => p.status === 'active');
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  return (
    <View className='container' style={{ paddingTop: '88rpx' }}>
      <View className='header'>
        <Text className='title'>用药提醒列表</Text>
        <Text className='subtitle'>共 {activePlans.length} 个活跃计划</Text>
      </View>

      <ScrollView scrollY className='plan-list' refresherTriggered={loading} onRefresherRefresh={loadPlans}>
        {activePlans.map((plan: Plan) => {
          const timeSlots = (plan.timeSlots as string[]) || [];
          const upcoming = timeSlots.filter((t: string) => t > currentTime);
          return (
            <View key={String(plan.id)} className='plan-card card'>
              <View className='plan-header'>
                <Text className='medicine-name'>{plan.medicineName}</Text>
                <View className={`status-badge ${plan.status}`}>
                  <Text>{plan.status === 'active' ? '进行中' : plan.status}</Text>
                </View>
              </View>
              <View className='plan-info'>
                <Text className='member'>👤 {plan.memberName}</Text>
                <Text className='frequency'>📋 {plan.frequency || '按需'}</Text>
              </View>
              <View className='time-slots'>
                {timeSlots.map((t: string) => (
                  <View key={t} className={`time-tag ${t < currentTime ? 'past' : 'upcoming'}`}>
                    <Text>{t}</Text>
                  </View>
                ))}
              </View>
              {upcoming.length > 0 && (
                <Text className='next-reminder'>下次提醒: {upcoming[0]}</Text>
              )}
              {plan.startDate && (
                <Text className='date-range'>{formatDate(new Date(plan.startDate))} ~ {plan.endDate ? formatDate(new Date(plan.endDate)) : '无截止'}</Text>
              )}
            </View>
          );
        })}
        {activePlans.length === 0 && !loading && (
          <View className='empty'>暂无活跃的用药计划</View>
        )}
      </ScrollView>
    </View>
  );
}
