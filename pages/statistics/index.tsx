import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { Layout } from '@atoms/index';
import SideBar from '@atoms/SideBar/SideBar';
import { getRating } from '../../apis/rating';
import ChartContents from '@templates/ChartContents/ChartContents';
import { IRate } from '@models/Rate';
import { ITableContents } from '@models/TableContent';
const StatisticsBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface StatisticsProps {
  data: {
    rates: IRate[];
  };
}
const toc = [
  {
    id: 0,
    name: '기간별 지지율',
  },
  {
    id: 1,
    name: '주차별 지지율',
  },
] as ITableContents[];

const Statistics: NextPage = ({ data }: StatisticsProps) => {
  const { rates } = data;

  return (
    <StatisticsBlock>
      <SideBar toc={toc} activeTopic={'기간별 지지율'} />
      <ChartContents rates={rates} />
    </StatisticsBlock>
  );
};

export default Statistics;

Statistics.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async () => {
  const rates = await getRating();

  return { props: { data: { rates } } };
};
