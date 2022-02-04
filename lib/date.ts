import { koWeekString } from '@lib/constant';

export const getThisWeekRange = (date: string | Date | null | undefined) => {
  if (!date) {
    return { startDate: null, endDate: null };
  }
  if (typeof date === 'string') {
    const [yyyy, mm, dd] = date.split('-').map(v => +v);
    const startDate = new Date(yyyy, mm - 1, dd - new Date(date).getDay());
    const endDate = new Date(yyyy, mm - 1, 6 + dd - new Date(date).getDay());

    return { startDate, endDate };
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const startDate = new Date(year, month, day - date.getDay());
  const endDate = new Date(year, month, 6 + day - date.getDay());

  return { startDate, endDate };
};

export const getPlusDate = (date: Date | null | undefined, number: number) => {
  if (!date) {
    return;
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return new Date(year, month, day + number);
};

export const getWeek = (yyyy_mm_dd: string) => {
  const date = new Date(yyyy_mm_dd);
  const [yyyy, mm, dd] = yyyy_mm_dd.split('-');
  return `${+mm}월 ${koWeekString[Math.ceil(date.getDate() / 7)]}째 주`;
};
