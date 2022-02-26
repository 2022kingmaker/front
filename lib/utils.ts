import { IRate } from '@models/Rate';
import { ChartData } from 'chart.js';
import { getWeek } from '@lib/date';
import { Categories } from '@models/Category';
import { ITableContents } from '@models/TableContent';

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
      categoryPercentage: 1,
      borderWidth: 2,
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
          tension: 0,
        });
      }
      chartData.datasets[candidateId - 1].data.push(statistic.rating);
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
