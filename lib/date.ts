import { differenceInMinutes } from 'date-fns';
import { MinTo, Number } from '@lib/constant';

export const getThisWeekRange = (date: string | Date | null | undefined) => {
  if (!date) {
    return { startDate: null, endDate: null };
  }
  if (typeof date === 'string') {
    const [yyyy, mm, dd] = date.split('-').map(v => +v);
    const startDate = new Date(yyyy, mm - 1, dd - new Date(date).getDay());
    const endDate = new Date(yyyy, mm - 1, 7 + dd - new Date(date).getDay());

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

export const getWeek = (date: string | Date | null | undefined) => {
  if (!date) {
    return '';
  }

  let year;
  let month;
  let day;

  if (typeof date === 'string') {
    const [yyyy, mm, dd] = date.split('-').map(v => +v);
    const newDate = new Date(yyyy, mm - Number.one, dd);
    year = newDate.getFullYear();
    month = newDate.getMonth();
    day = newDate.getDate();
  } else {
    year = date.getMonth();
    month = date.getMonth();
    day = date.getDate();
  }

  const between: any = {};

  for (let i = 0; i < 7; i++) {
    const beWeek = week(new Date(year, month, i + day - new Date(date).getDay()));

    if (between[beWeek] !== undefined) {
      between[beWeek] = between[beWeek] + Number.one;
    } else {
      between[beWeek] = Number.zero;
    }
  }
  const values = Object.values(between) as number[];

  if (values[0] < values[1]) {
    return Object.keys(between)[1];
  }
  return Object.keys(between)[0];
};

const week = (date: Date) => {
  const month = date.getMonth();
  const day = date.getDate();
  return `${month + 1}월 ${Math.ceil(day / 7)}주 차`;
};

export const getPast = (targetDate: Date) => {
  const pastInMin = differenceInMinutes(new Date(), new Date(targetDate));

  if (pastInMin >= MinTo.Month * 30) {
    return Math.floor(pastInMin / (MinTo.Month * 30)) + '개월 전';
  }
  if (pastInMin >= MinTo.Month) {
    return Math.floor(pastInMin / MinTo.Month) + '일 전';
  }
  if (pastInMin >= MinTo.Hour) {
    return Math.floor(pastInMin / MinTo.Hour) + '시간 전';
  }
  if (pastInMin >= Number.one) {
    return pastInMin + '분 전';
  }
  return '방금';
};
