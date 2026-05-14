/**
 * 日期工具函数 - 统一处理日期相关操作
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getCurrentDateString(): string {
  return formatDate(new Date());
}

export function getMonthFirstDate(year: number, month: number): Date {
  return new Date(year, month - 1, 1);
}

export function getMonthLastDate(year: number, month: number): Date {
  const lastDay = new Date(year, month, 0).getDate();
  return new Date(year, month - 1, lastDay);
}

export function getPickerDateRange(currentYear: number) {
  return {
    minDate: new Date(currentYear - 5, 0, 1),
    maxDate: new Date(currentYear + 5, 11, 31),
  };
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function safeName(value: any, fallback = '未设置昵称'): string {
  if (value === null || value === undefined || value === 'null' || value === 'undefined') return fallback;
  const str = String(value).trim();
  return str || fallback;
}

// 计算距离过期天数
export function computeDaysToExpiry(expiryDate: string | null): {
  daysToExpiry: number | null;
  status: 'normal' | 'expiring' | 'expired';
} {
  if (!expiryDate) return { daysToExpiry: null, status: 'normal' };
  const days = Math.ceil(
    (new Date(expiryDate).getTime() - Date.now()) / (1000 * 3600 * 24),
  );
  if (days <= 0) return { daysToExpiry: days, status: 'expired' };
  if (days <= 30) return { daysToExpiry: days, status: 'expiring' };
  return { daysToExpiry: days, status: 'normal' };
}
