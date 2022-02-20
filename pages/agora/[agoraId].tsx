import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Agora, Layout, SideBarAgora } from '@atoms/index';
import { ITableContents } from '@models/TableContent';
import AgoraContents from '@templates/AgoraContents/AgoraContents';
import { IntroModal } from '@molecules/index';
import { useModal } from '@hooks/index';
import SelectModal from '@molecules/SelectModal/SelectModal';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@molecules/Modal/Modal'), { ssr: false });

const AgoraPageBlock = styled.div`
  height: inherit;
  position: relative;
`;

const toc = [
  {
    id: 0,
    name: '자유 토론',
  },
  {
    id: 1,
    name: '관련 후보 정책',
  },
] as ITableContents[];

interface AgoraPageProps {}

const AgoraPage: NextPage = ({}: AgoraPageProps) => {
  const { isShowing, toggle } = useModal(true);

  useEffect(() => {
    //fetch generate nickname;
  }, []);

  return (
    <AgoraPageBlock>
      <Head>
        <title>대선마당 | {111}</title>
        <meta name="description" content="토론의 장" />
      </Head>
      <SideBarAgora toc={toc} currentCategoryId={0} />
      <AgoraContents />
      <Modal isShowing={isShowing} close={toggle}>
        <SelectModal />
      </Modal>
    </AgoraPageBlock>
  );
};

export default AgoraPage;

AgoraPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
