import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Layout, SideBarAgora } from '@atoms/index';
import { getDebateList } from 'apis/debate';
import { Debate } from '@models/Debate';
import { ITableContents } from '@models/TableContent';
import DebateContents from '@templates/DebateContents/DebateContents';
import { flexBox } from '@styles/mixin';

const DebatePageBlock = styled.div`
  height: inherit;
  position: relative;
`;
const toc = [
  {
    id: 0,
    name: '토론회',
  },
] as ITableContents[];

interface DebatePageProps {
  debateList: Debate[] | null;
}

const DebatePage: NextPage = ({ debateList }: DebatePageProps) => {
  return (
    <DebatePageBlock>
      <SideBarAgora toc={toc} currentCategoryId={0} setCurrentCategoryId={() => {}} />
      <DebateContents debateList={debateList} />
    </DebatePageBlock>
  );
};

export default DebatePage;

DebatePage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export const getStaticProps = async () => {
  const debateList = await getDebateList();
  if ('status' in debateList) {
    return { props: { debateList: null } };
  }
  return { props: { debateList } };
};
