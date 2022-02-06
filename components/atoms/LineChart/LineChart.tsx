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
import { getThisWeekRange, getWeek } from '@lib/date';
import React, { useState } from 'react';
import { MultiCalendar } from '@molecules/index';
import { disabledDays } from '@molecules/Calendar/MultiCalendar/MultiCalendar';
import { DayModifiers, RangeModifier } from 'react-day-picker/types/Modifiers';
import { flexBox } from '@styles/mixin';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

const LineChartBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin-top: 25px;
`;

export const H2 = styled.h2`
  padding: 12px;
  width: 300px;
  font-weight: 650;
  font-size: 32px;
  border-bottom: 3px solid #3d7b80;
`;
const CalendarContainer = styled.div<{ isCalendarOpen: boolean }>`
  position: relative;

  div:nth-child(2) {
    ${({ isCalendarOpen }) => (isCalendarOpen ? `display: block` : `display: none`)};
  }
`;
const RangeInput = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  div {
    display: none;
  }
`;

interface LineChartProps {
  sortedRates: IRate[];
  labels: string[];
}

const LineChart = ({ sortedRates, labels }: LineChartProps) => {
  const [selectedWeek, setSelectedWeek] = useState<RangeModifier>({
    from: null,
    to: null,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const start = labels.findIndex(label => label === getWeek(selectedWeek.from));
  const end = labels.findIndex(label => label === getWeek(selectedWeek.to));
  const chartData = getLineChartData(sortedRates.slice(~start ? start : 0, ~end ? end + 1 : sortedRates.length));
  const disabledDays = sortedRates.map(rate => getThisWeekRange(rate.startedAt)) as disabledDays[];

  return (
    <LineChartBlock>
      <H2>기간별 지지율</H2>
      {/*<MultiCalendar disabledDays={disabledDays} selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />*/}
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
