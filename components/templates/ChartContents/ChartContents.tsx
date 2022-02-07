import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { IRate } from '@models/Rate';
import { sortRates } from '@lib/utils';
import BarChart from '@atoms/BarChart/BarChart';
import LineChart from '@atoms/LineChart/LineChart';
import { getWeek } from '@lib/date';
import { flexBox } from '@styles/mixin';

const ChartContentsBlock = styled.div`
  position: relative;
  padding: 44px 30px 0 230px;
  height: 100vh;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  //
  // @media ${({ theme }) => theme.desktop} {
  //   width: 100%;
  //   padding: 90px 24px 200px 24px;
  // }
  // @media ${({ theme }) => theme.mobile} {
  //   width: 100%;
  //   padding: 100px 10px 0 10px;
  // }
`;

const InnerPage = styled.div`
  ${flexBox('flex-start', 'center', 'column')};
  position: relative;
  height: 100vh;
  width: 100%;
`;

export interface ChartContentsProps {
  rates: IRate[];
  setActiveTopic: React.Dispatch<React.SetStateAction<string>>;
}

const ChartContents = ({ rates, setActiveTopic }: ChartContentsProps) => {
  const sortedRates = sortRates(rates);
  const titleRef = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    if (titleRef.current.length === 0 && titleRef.current.constructor === Array) {
      titleRef.current = [...document.querySelectorAll('h2')];
    }
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { deltaY } = e;
    if (deltaY > 100) {
      titleRef.current[1]?.scrollIntoView({ behavior: 'smooth' });
      requestAnimationFrame(() => setActiveTopic(titleRef.current[1].innerHTML));
    }
    if (deltaY < -100) {
      titleRef.current[0]?.scrollIntoView({ behavior: 'smooth' });
      requestAnimationFrame(() => setActiveTopic(titleRef.current[0].innerHTML));
    }
  };
  const labels = sortedRates.map(({ startedAt }) => getWeek(startedAt));

  return (
    <ChartContentsBlock onWheelCapture={handleWheel}>
      {sortedRates && (
        <>
          <InnerPage>
            <LineChart sortedRates={sortedRates} labels={labels} />
          </InnerPage>
          <InnerPage>
            <BarChart sortedRates={sortedRates} labels={labels} />
          </InnerPage>
        </>
      )}
    </ChartContentsBlock>
  );
};

export default ChartContents;
