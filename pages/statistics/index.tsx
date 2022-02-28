import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
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
  const [activeTopic, setActiveTopic] = useState('기간별 지지율');

  return (
    <StatisticsBlock>
      <Head>
        <title>여론 조사 | 대선마당</title>
        <meta
          name="description"
          content="각 후보들의 기간별 지지율, 주차별 지지율을 한 눈에 볼 수 있는 차트를 제공합니다."
        />
      </Head>
      <SideBar toc={toc} activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
      {rates && rates.length && <ChartContents rates={rates} setActiveTopic={setActiveTopic} />}
    </StatisticsBlock>
  );
};

export default Statistics;

Statistics.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  const rates = await getRating();
  return { props: { data: { rates } } };
};
