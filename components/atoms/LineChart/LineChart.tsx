import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';
import { IRate } from '@models/Rate';
import { getLineChartData } from '@lib/utils';
import { getWeek } from '@lib/date';
import React, { useState } from 'react';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

const LineChartBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 400px;
`;

export const H2 = styled.h2`
  padding: 12px;
  width: 300px;
  font-weight: 650;
  font-size: 32px;
  border-bottom: 3px solid #3d7b80;
  margin-bottom: 30px;
`;

interface LineChartProps {
  sortedRates: IRate[];
}

const LineChart = ({ sortedRates }: LineChartProps) => {
  const [range, setRange] = useState({
    from: 0,
    to: sortedRates.length - 1,
  });
  const { to, from } = range;
  const chartData = getLineChartData(sortedRates.slice(from, to + 1));

  const selectRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;
    if (target.name === 'to-week') {
      setRange({ ...range, to: +target.value });
      return;
    }
    setRange({ ...range, from: +target.value });
  };

  return (
    <LineChartBlock>
      <H2>기간별 지지율</H2>
      <select name="from-week" id="rate" value={from} onChange={selectRange}>
        {sortedRates.map((rate, index) => (
          <option key={rate.researchId} value={index}>
            {getWeek(rate.startedAt)}
          </option>
        ))}
      </select>
      <select name="to-week" id="rate" value={to} onChange={selectRange}>
        {sortedRates.map((rate, index) => (
          <option key={rate.researchId} value={index}>
            {getWeek(rate.startedAt)}
          </option>
        ))}
      </select>
      <Line
        // @ts-ignore
        data={chartData}
        options={{
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
              axis: 'y',
              display: true,
              position: 'left',
              title: {
                display: true,
                align: 'end',
                color: '#808080',
                text: '지지율: 퍼센트',
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                padding: 10,
              },
            },
            tooltip: {
              padding: 10,
              bodySpacing: 5,
              usePointStyle: true,
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </LineChartBlock>
  );
};

export default LineChart;
