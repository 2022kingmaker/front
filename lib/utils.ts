import { IRate } from '@models/Rate';
import { ChartData } from 'chart.js';
import { getWeek } from '@lib/date';

export const sortRates = (rates: IRate[]) => {
  return rates.sort(sortCallback);
};

export const getChartData = (currentRate: IRate) => {
  const chartData: ChartData = { datasets: [], labels: [] };
  chartData.labels!.push(getWeek(currentRate.startedAt));
  currentRate.statistic.forEach(v => {
    chartData.datasets.push({
      label: v.candidate.name,
      data: [v.rating],
      backgroundColor: v.candidate.party.colorCode,
      borderColor: v.candidate.party.colorCode,
      barPercentage: 0.7,
      categoryPercentage: 1,
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
          tension: 0.3,
        });
      }
      chartData.datasets[candidateId - 1].data.push(statistic.rating);
    });
  });

  return chartData;
};

const sortCallback = (a: IRate, b: IRate) => {
  const [_A, monthA, dayA] = a.startedAt.split('-').map(v => +v);
  const [_B, monthB, dayB] = b.startedAt.split('-').map(v => +v);

  if (monthA !== monthB) {
    return monthA - monthB;
  }
  return dayA - dayB;
};
