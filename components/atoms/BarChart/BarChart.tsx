import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import React, { useState } from 'react';
import { IRate } from '@models/Rate';
import { getChartData } from '@lib/utils';
import { H2 } from '@atoms/LineChart/LineChart';
import { Calendar } from '@molecules/index';
import { getThisWeekRange, getWeek } from '@lib/date';
import { disabledDays } from '@molecules/Calendar/MultiCalendar/MultiCalendar';
import { RangeModifier } from 'react-day-picker/types/Modifiers';
import { flexBox } from '@styles/mixin';
import QuestionMark from '@atoms/QuestionMark/QuestionMark';
import calendarIcon from '@assets/icons/calendar_icon.png';

ChartJS.register(LinearScale, CategoryScale, BarElement, BarController, Title, Tooltip, Legend);

const BarChartBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 400px;
  position: relative;
`;

const CalendarToggle = styled.div`
  ${flexBox()};
  font-size: 18px;
  position: relative;
  width: 250px;
  height: 100%;
  background: rgba(196, 196, 196, 0.76);
  border-radius: 8px;

  .split {
    color: #8c8c8c;
    margin: 0 8px;
  }

  img {
    position: absolute;
    top: 12px;
    left: 40px;
    width: 30px;
    height: 30px;
  }
  :hover {
    cursor: pointer;
  }
`;

const ToggleContainer = styled.div`
  ${flexBox()};
  width: 100%;
  height: 50px;
  margin: 30px 0 12px 0;
  word-spacing: 3px;
`;
const CalendarBackground = styled.div`
  position: absolute;
  top: -25px;
  left: -100vw;
  width: 200vw;
  height: calc(100vh - 60px);
`;

interface BarChartProps {
  sortedRates: IRate[];
  labels: string[];
}

const BarChart = ({ sortedRates, labels }: BarChartProps) => {
  const initDate = getThisWeekRange(sortedRates[sortedRates.length - 1].startedAt);
  const [selectedDays, setSelectedDays] = useState<RangeModifier>({
    from: initDate.startDate,
    to: initDate.endDate,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const currentIndex = selectedDays.from ? labels.findIndex(label => label === getWeek(selectedDays.from)) : 0;

  const chartData = getChartData(sortedRates[currentIndex]);
  const disabledDays = sortedRates.map(rate => getThisWeekRange(rate.startedAt)) as disabledDays[];

  return (
    <BarChartBlock>
      <H2>주차별 지지율</H2>
      <ToggleContainer>
        <CalendarToggle onClick={handleClick}>
          <img src={calendarIcon.src} alt="달력 이미지" />
          {chartData.labels}
        </CalendarToggle>
        {isCalendarOpen && <CalendarBackground onClick={handleClick} />}
      </ToggleContainer>
      <Calendar
        isCalendarOpen={isCalendarOpen}
        disabledDays={disabledDays}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
      />
      <Bar
        options={{
          indexAxis: 'x',
          // @ts-ignore
          maxBarThickness: 50,
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 50,
              axis: 'y', // 이 축이 y축임을 명시해줍니다.
              display: true, // 축의 가시성 여부도 설정할 수 있습니다.
              position: 'left', // 축이 왼쪽에 표시될지, 오른쪽에 표시될지 정할 수 있습니다.
              title: {
                // 이 축의 단위 또는 이름도 title 속성을 이용하여 표시할 수 있습니다.
                display: true,
                align: 'end',
                color: '#808080',
                text: '지지율: 퍼센트',
              },
            },
            x: {
              afterTickToLabelConversion: scaleInstance => {
                const ticks = scaleInstance.ticks;

                scaleInstance.ticks = ticks.map(tick => {
                  return {
                    ...tick,
                    label: tick.label,
                  };
                });
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                padding: 10,
                boxWidth: 20,
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
        // @ts-ignore
        data={chartData}
      />

      {/*<Button direction={'right'} active={currentIndex !== sortedRates.length - 1} onClick={nextRate}>*/}
      {/*  다음*/}
      {/*</Button>*/}
      {/*<Button direction={'left'} active={currentIndex !== 0} onClick={prevRate}>*/}
      {/*  이전*/}
      {/*</Button>*/}
      <QuestionMark
        agency={sortedRates[0].agency}
        requester={sortedRates[0].requester}
        period={[sortedRates[currentIndex].startedAt, sortedRates[currentIndex].finishedAt]}
      />
    </BarChartBlock>
  );
};

export default BarChart;
