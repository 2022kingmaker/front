import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { Layout } from '@atoms/index';

const StatisticsBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface StatisticsProps {}

const Modal = dynamic(() => import('@molecules/Modal/Modal'), { ssr: false });

const Statistics: NextPage = ({}: StatisticsProps) => {
  return <StatisticsBlock>ㅁㄴㅇㄹ</StatisticsBlock>;
};

export default Statistics;

Statistics.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
