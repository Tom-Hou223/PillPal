import Taro from '@tarojs/taro';
import { medicineApi, planApi } from '../services/api';

class NotificationManager {
  private static instance: NotificationManager;
  private checkInterval: any = null;

  static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  /**
   * 初始化通知管理器
   */
  init() {
    this.startLocalCheck();
  }

  /**
   * 启动本地检查（小程序内弹窗提醒）
   */
  startLocalCheck() {
    // 每分钟检查一次
    this.checkInterval = setInterval(() => {
      this.checkLocalNotifications();
    }, 60000);

    // 立即检查一次
    this.checkLocalNotifications();
  }

  /**
   * 停止本地检查
   */
  stopLocalCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }

  /**
   * 检查本地通知（小程序内弹窗）
   */
  async checkLocalNotifications() {
    try {
      const settings = Taro.getStorageSync('reminderSettings') || {};
      const pushEnabled = settings.pushEnabled !== false;
      
      if (!pushEnabled) {
        return;
      }

      const reminderTime = parseInt(settings.reminderTime || 15);
      const warningDays = parseInt(settings.expiryWarningDays || 30);

      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      // 检查用药提醒
      try {
        const plansRes = await planApi.getList();
        if (plansRes.code === 0) {
          const plans = Array.isArray(plansRes.data) ? plansRes.data : [];
          for (const plan of plans) {
            if (plan.status !== 'active') continue;

            const timeSlots = plan.timeSlots || [];
            for (const slot of timeSlots) {
              // 检查时间格式
              if (!slot.includes(':')) continue;

              const [slotHour, slotMinute] = slot.split(':').map(Number);
              if (isNaN(slotHour) || isNaN(slotMinute)) continue;

              const slotTime = slotHour * 60 + slotMinute;
              const timeDiff = slotTime - currentTime;

              // 场景1：提前提醒（在用药时间前 reminderTime 分钟内）
              if (timeDiff >= 0 && timeDiff <= reminderTime) {
                const notifyKey = `medication_notify_${plan.id}_${slot}_${currentDate.toISOString().split('T')[0]}`;
                const hasNotified = Taro.getStorageSync(notifyKey);

                if (!hasNotified) {
                  this.showLocalNotification({
                    title: '用药提醒',
                    content: `${plan.memberName} 需要在 ${slot} 服用 ${plan.medicineName}`
                  });
                  Taro.setStorageSync(notifyKey, true);
                }
              }

              // 场景2：过了用药时间但未超过10分钟，每5分钟提醒一次（0分钟和5分钟）
              if (timeDiff < 0 && timeDiff >= -10) { // 已过0-10分钟
                const minutesPassed = Math.abs(timeDiff);
                
                // 只在刚好过了0分钟（刚好到时间）、5分钟、10分钟时提醒
                if (minutesPassed === 0 || minutesPassed === 5 || minutesPassed === 10) {
                  const notifyKey = `medication_remind_${plan.id}_${slot}_${currentDate.toISOString().split('T')[0]}_${minutesPassed}`;
                  const hasNotified = Taro.getStorageSync(notifyKey);

                  if (!hasNotified) {
                    let message = '';
                    if (minutesPassed === 0) {
                      message = `${plan.memberName} 现在到了 ${slot} 服用 ${plan.medicineName} 的时间了`;
                    } else if (minutesPassed === 5) {
                      message = `${plan.memberName} 已经过了5分钟了，请记得服用 ${plan.medicineName}`;
                    } else if (minutesPassed === 10) {
                      message = `${plan.memberName} 已经过了10分钟了，最后提醒您服用 ${plan.medicineName}`;
                    }
                    
                    this.showLocalNotification({
                      title: '用药提醒',
                      content: message
                    });
                    Taro.setStorageSync(notifyKey, true);
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('检查用药提醒失败:', error);
      }

      // 检查药品过期（每天8点检查）
      if (currentHour === 8 && currentMinute >= 0 && currentMinute < 5) {
        try {
          const medicinesRes = await medicineApi.getList();
          if (medicinesRes.code === 0) {
            const medicines = Array.isArray(medicinesRes.data) ? medicinesRes.data : [];
            for (const medicine of medicines) {
              if (medicine.daysToExpiry !== null && medicine.daysToExpiry !== undefined &&
                  medicine.daysToExpiry <= warningDays && medicine.daysToExpiry >= 0) {
                // 每天只提醒一次
                const lastNotifyDate = Taro.getStorageSync(`expiry_notify_${medicine.id}`);
                const today = currentDate.toISOString().split('T')[0];

                if (lastNotifyDate !== today) {
                  this.showLocalNotification({
                    title: '药品过期提醒',
                    content: `${medicine.name} 将在 ${medicine.daysToExpiry} 天后过期`
                  });
                  Taro.setStorageSync(`expiry_notify_${medicine.id}`, today);
                }
              }
            }
          }
        } catch (error) {
          console.error('检查药品过期提醒失败:', error);
        }
      }
    } catch (error) {
      console.error('检查本地通知失败:', error);
    }
  }

  /**
   * 显示本地通知（小程序内弹窗）
   */
  showLocalNotification({ title, content }: { title: string; content: string }) {
    Taro.showModal({
      title: title,
      content: content,
      showCancel: false,
      confirmText: '知道了'
    });
  }
}

export default NotificationManager;
