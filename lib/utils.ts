import { IRate } from '@models/Rate';
import { ChartData } from 'chart.js';
import { getWeek } from '@lib/date';
import { Categories } from '@models/Category';
import { ITableContents } from '@models/TableContent';
import { Number, SortStand } from '@lib/constant';
import { Room } from '@models/Agora';

export const sortRates = (rates: IRate[]) => {
  return rates.sort(sortCallback);
};

const sortCallback = (a: IRate, b: IRate) => {
  const [yearA, monthA, dayA] = a.startedAt.split('-').map(v => +v);
  const [yearB, monthB, dayB] = b.startedAt.split('-').map(v => +v);
  if (yearA !== yearB) {
    return yearA - yearB;
  }
  if (monthA !== monthB) {
    return monthA - monthB;
  }
  return dayA - dayB;
};

export const getChartData = (currentRate: IRate) => {
  const chartData: ChartData = { datasets: [], labels: [] };
  chartData.labels!.push(getWeek(currentRate.startedAt));
  currentRate.statistic.forEach(v => {
    chartData.datasets.push({
      label: v.candidate.name,
      data: [v.rating],
      backgroundColor: v.candidate.party.colorCode + 'BF',
      borderColor: v.candidate.party.colorCode,
      barPercentage: 0.7,
      categoryPercentage: Number.one,
      borderWidth: Number.two,
    });
  });
  return chartData;
};

export const getLineChartData = (rates: IRate[]) => {
  const chartData: ChartData = { datasets: [], labels: [] };
  rates.forEach(rate => chartData.labels!.push(getWeek(rate.startedAt)));

  rates.forEach(rate => {
    rate.statistic.forEach(statistic => {
      const { candidateId, name, party } = statistic.candidate;
      if (!chartData.datasets[candidateId - 1]) {
        chartData.datasets.push({
          label: name,
          data: [],
          borderColor: `${party.colorCode}`,
          backgroundColor: `${party.colorCode}`,
          tension: Number.zero,
        });
      }
      chartData.datasets[candidateId - Number.one].data.push(statistic.rating);
    });
  });

  return chartData;
};

export const getToc = (categories: Categories) =>
  categories.reduce((toc, { categoryId, name }) => {
    toc.push({
      id: categoryId,
      name: name,
    });
    return toc;
  }, [] as ITableContents[]);

export const getURL = () =>
  process.env.NODE_ENV === 'development' && typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API : '/api';

export const sortRooms = (rooms: Room[], stand: SortStand) => {
  if (stand === SortStand.many) {
    return rooms.sort((a, b) => b.talkCount - a.talkCount);
  }
  if (stand === SortStand.created) {
    // @ts-ignore
    return rooms.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
  }
  // @ts-ignore
  return rooms.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
};

export const setSupportCandidate = (value: number) => {
  sessionStorage.setItem(`${window.location.pathname}:candidate`, value.toString());
};

export const hasSupportCandidate = () => {
  return !!sessionStorage.getItem(`${window.location.pathname}:candidate`);
};
export const getSupportCandidate = () => {
  return sessionStorage.getItem(`${window.location.pathname}:candidate`) || -Number.zero;
};

export const resetTextArea = (elem: HTMLTextAreaElement) => {
  elem.value = '';
  elem.style.height = '42px';
};
