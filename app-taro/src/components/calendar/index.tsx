import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import { Picker } from '@tarojs/components';
import './index.scss';

interface CalendarDay {
  day: number | string;
  dateStr: string;
  isToday: boolean;
  isSelected: boolean;
  status: string;
}

interface CalendarProps {
  value?: string; // YYYY-MM-DD
  dayStatusMap?: Record<string, 'done' | 'pending' | 'missed'>;
  onSelect?: (value: string) => void;
  onMonthChange?: (year: number, month: number) => void;
}

const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日'];

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function Calendar(props: CalendarProps) {
  const { value = '', dayStatusMap = {}, onSelect, onMonthChange } = props;

  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(value || formatDate(today));
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  // 年份列表
  const currentYearVal = today.getFullYear();
  const yearList: number[] = [];
  for (let i = currentYearVal - 5; i <= currentYearVal + 5; i++) {
    yearList.push(i);
  }
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const generateCalendar = useCallback(() => {
    const todayStr = formatDate(today);
    const days: CalendarDay[] = [];

    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const firstDayWeek = firstDay.getDay();

    // 计算空白数量: 星期一(1)=0, 星期二(2)=1, ..., 星期日(0)=6
    const emptyDaysCount = firstDayWeek === 0 ? 6 : firstDayWeek - 1;

    for (let i = 0; i < emptyDaysCount; i++) {
      days.push({ day: '', dateStr: '', isToday: false, isSelected: false, status: 'none' });
    }

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth - 1, i);
      const dateStr = formatDate(date);
      const status = dayStatusMap[dateStr] || '';

      days.push({
        day: i,
        dateStr,
        isToday: dateStr === todayStr,
        isSelected: dateStr === selectedDate,
        status,
      });
    }

    setCalendarDays(days);
  }, [currentYear, currentMonth, selectedDate, dayStatusMap]);

  useEffect(() => {
    generateCalendar();
  }, [generateCalendar]);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
    }
  }, [value]);

  const onBackToToday = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const dateStr = formatDate(now);

    setCurrentYear(year);
    setCurrentMonth(month);
    setSelectedDate(dateStr);
    onSelect?.(dateStr);
  };

  const onDayClick = (dateStr: string) => {
    if (!dateStr) return;
    setSelectedDate(dateStr);
    onSelect?.(dateStr);
  };

  const yearIndex = yearList.indexOf(currentYear);
  const monthIndex = currentMonth - 1;

  const onYearChange = (e: any) => {
    const idx = parseInt(e.detail.value, 10);
    const year = yearList[idx];
    setCurrentYear(year);
    onMonthChange?.(year, currentMonth);
  };

  const onMonthChangeHandler = (e: any) => {
    const idx = parseInt(e.detail.value, 10);
    const month = monthList[idx];
    setCurrentMonth(month);
    onMonthChange?.(currentYear, month);
  };

  const getDayClass = (day: CalendarDay): string => {
    const classes: string[] = ['calendar-day'];
    if (!day.day) return classes.join(' ');

    if (day.isToday) classes.push('calendar-day-today');
    if (day.isSelected) classes.push('calendar-day-selected');

    // 同时是 today 且选中时，today 样式优先
    if (day.isToday && day.isSelected) {
      classes.splice(classes.indexOf('calendar-day-selected'), 1);
    }

    if (day.status === 'done') classes.push('calendar-day-done');
    if (day.status === 'pending') classes.push('calendar-day-pending');
    if (day.status === 'missed') classes.push('calendar-day-missed');

    return classes.join(' ');
  };

  return (
    <View className="calendar-container">
      {/* 日历头部 */}
      <View className="calendar-header">
        <View className="calendar-header-content">
          {/* 年份选择器 */}
          <View className="year-picker-container">
            <Text className="picker-label">年</Text>
            {/* @ts-ignore */}
            <Picker mode="selector" range={yearList} value={yearIndex} onChange={onYearChange}>
              <View className="picker-input">
                <Text>{currentYear}</Text>
              </View>
            </Picker>
          </View>
          {/* 月份选择器 */}
          <View className="month-picker-container">
            <Text className="picker-label">月</Text>
            {/* @ts-ignore */}
            <Picker mode="selector" range={monthList} value={monthIndex} onChange={onMonthChangeHandler}>
              <View className="picker-input">
                <Text>{currentMonth}</Text>
              </View>
            </Picker>
          </View>
          {/* 回到今天 */}
          <View className="back-to-today" onClick={onBackToToday}>
            <Text className="calendar-icon">&#128197;</Text>
            <Text className="back-to-today-text">今日</Text>
          </View>
        </View>
      </View>

      {/* 星期标识 */}
      <View className="calendar-weekdays">
        {WEEKDAYS.map((weekday, index) => (
          <View key={index} className="weekday-item">
            <Text className="weekday-text">{weekday}</Text>
          </View>
        ))}
      </View>

      {/* 日期网格 */}
      <View className="calendar-grid">
        {calendarDays.map((day, index) => (
          <View
            key={index}
            className={getDayClass(day)}
            onClick={() => onDayClick(day.dateStr)}
          >
            {day.day && <Text className="day-text">{day.day}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}
