import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Layout, SideBarAgora } from '@atoms/index';
import { getScript } from '../../apis/debate';
import { DebateDetail, Script } from '@models/Script';
import DebateDetailContents from '@templates/DebateDetailContents/DebateDetailContents';

const DebateDetailPageBlock = styled.div`
  height: inherit;
  position: relative;
`;
interface DebateDetailPageProps {
  debateDetail: DebateDetail;
}

const DebateDetailPage: NextPage = ({ debateDetail }: DebateDetailPageProps) => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const { script } = debateDetail;
  if (!script || 'status' in script) {
    return <></>;
  }
  const toc = getTocForScript(script);

  return (
    <DebateDetailPageBlock>
      <SideBarAgora toc={toc} currentCategoryId={currentCategoryId} setCurrentCategoryId={setCurrentCategoryId} />
      <DebateDetailContents script={script[currentCategoryId]} />
    </DebateDetailPageBlock>
  );
};

export default DebateDetailPage;

DebateDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (context: any) => {
  const { debateId } = context.params;
  const debateDetail = await getScript(+debateId);
  return { props: { debateDetail } };
};

const getTocForScript = (script: Script[]) => script.map(({ category }, index) => ({ name: category, id: index }));
