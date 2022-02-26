import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout, SideBarAgora } from '@atoms/index';
import { ITableContents } from '@models/TableContent';
import AgoraContents from '@templates/AgoraContents/AgoraContents';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getRoomDetail, getTalks } from '../../apis/agora';
import { GetServerSidePropsContext } from 'next/types';
import { useRouter } from 'next/router';
import { IRoomDetail, ITalkList } from '@models/Agora';

const AgoraPageBlock = styled.div`
  height: 100%;
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

const AgoraPage: NextPage = () => {
  const { query } = useRouter();
  const { agoraId } = query;

  const { data: roomDetail, isLoading: isRoomDetailLoading } = useQuery<IRoomDetail>(['getRoomDetail'], () =>
    getRoomDetail(+agoraId),
  );
  const { data: talkList, isLoading: isTalkListLoading } = useQuery<ITalkList>(['getTalks'], () =>
    getTalks({ roomId: +agoraId }),
  );

  return (
    <AgoraPageBlock>
      <Head>
        <title>국민 톡방 | 대선마당 </title>
        <meta name="description" content="토론의 장" />
        <meta name={'viewport'} content={'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'} />
      </Head>
      <SideBarAgora toc={toc} currentCategoryId={0} />
      {isRoomDetailLoading || isTalkListLoading ? (
        <>aaa</>
      ) : (
        <AgoraContents roomDetail={roomDetail!} talkList={talkList!} />
      )}
    </AgoraPageBlock>
  );
};

export default AgoraPage;

AgoraPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { agoraId } = context.params as { agoraId: string };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getRoomDetail'], () => getRoomDetail(+agoraId));
  await queryClient.prefetchQuery(['getTalks'], () => getTalks({}));

  return { props: { agoraId }, deHydratedState: dehydrate(queryClient) };
};
