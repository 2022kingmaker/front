import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import React from 'react';
import { IRate } from '@models/Rate';
import { sortRates } from '@lib/utils';
import BarChart from '@atoms/BarChart/BarChart';
import LineChart from '@atoms/LineChart/LineChart';

const ChartContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 90px 30px 0 250px;

  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 90px 24px 200px 24px;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    padding: 100px 10px 0 10px;
  }
`;

export interface ChartContentsProps {
  rates: IRate[];
}

const ChartContents = ({ rates }: ChartContentsProps) => {
  const sortedRates = sortRates(rates);

  return (
    <ChartContentsBlock>
      {sortedRates && <LineChart sortedRates={sortedRates} />}
      {sortedRates && <BarChart sortedRates={sortedRates} />}
    </ChartContentsBlock>
  );
};

export default ChartContents;
