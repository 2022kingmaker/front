import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Layout } from '@atoms/index';
import { flexBox } from '@styles/mixin';

const Custom404Block = styled.div`
  ${flexBox()};
  width: 100%;
  height: 100%;
`;

const Custom404: NextPage = () => {
  return (
    <Custom404Block>
      <h1>잘못된 경로로 접근하셨습니다.</h1>
    </Custom404Block>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
