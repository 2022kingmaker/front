import styled from 'styled-components';
import React, { useCallback, useEffect, useRef } from 'react';
import { IRate } from '@models/Rate';
import { sortRates } from '@lib/utils';
import BarChart from '@atoms/BarChart/BarChart';
import LineChart from '@atoms/LineChart/LineChart';
import { getWeek } from '@lib/date';
import { flexBox } from '@styles/mixin';
import throttleGenerator from '@lib/throttleGenerator';

const ChartContentsBlock = styled.div`
  position: relative;
  padding: 44px 30px 0 230px;
  height: 100vh;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 120px 24px 200px 24px;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    padding: 100px 10px 0 10px;
  }
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const throttle = useCallback(throttleGenerator(1000), []);

  useEffect(() => {
    if (titleRef.current.length === 0 && titleRef.current.constructor === Array) {
      titleRef.current = [...document.querySelectorAll('h2')];
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleWheel = useCallback((e: any) => {
    e.preventDefault();
    throttle(() => {
      const { deltaY } = e;
      if (deltaY > 10) {
        titleRef.current[1]?.scrollIntoView({ behavior: 'smooth' });
        requestAnimationFrame(() => setActiveTopic(titleRef.current[1].innerHTML));
      }
      if (deltaY < -10) {
        titleRef.current[0]?.scrollIntoView({ behavior: 'smooth' });
        requestAnimationFrame(() => setActiveTopic(titleRef.current[0].innerHTML));
      }
    });
  }, []);

  const labels = sortedRates.map(({ startedAt }) => getWeek(startedAt));

  return (
    <ChartContentsBlock ref={scrollRef}>
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
