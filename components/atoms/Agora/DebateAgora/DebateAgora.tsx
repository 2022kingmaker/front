import styled from 'styled-components';
import { AgoraStyle, Description, Title } from '@atoms/Agora/Agora';
import React from 'react';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

const DebateAgoraBlock = styled.a`
  ${AgoraStyle};
  height: auto;
  margin: 0 auto;
  width: 75%;
  outline: none;
  z-index: 2;
`;
const InfoTab = styled.section`
  ${flexBox('flex-end')};
  width: 100%;
`;
const RunningTime = styled.div`
  margin-right: 10px;
`;
const DebateDate = styled.div``;

interface DebateAgoraProps {
  title: string;
  description: string;
  totalTime: number;
  date: Date;
  debateId: number;
}

const DebateAgora = ({ debateId, title, description, totalTime, date }: DebateAgoraProps) => {
  return (
    <Link href={`debate/${debateId}`} passHref>
      <DebateAgoraBlock>
        {/*<Title>{title}</Title>*/}
        {/*<Description>{description}</Description>*/}
        {/*<InfoTab>*/}
        {/*  <RunningTime>{totalTime}</RunningTime>*/}
        {/*  <DebateDate>{date}</DebateDate>*/}
        {/*</InfoTab>*/}
        <Title>대선 후보 1차 토론회 - 경제 분야</Title>
        <Description>
          여야 대선 후보 4명이 오늘 저녁 8시 중앙선거관리위원회에서 주관하는 첫 TV 토론회에서 맞붙습니다. 네 명의 후보가
          모인 3번째 TV토론이자 지난 15일 공식 선거운동이 시작된 이후 처음으로 열리는 TV토론입니다. 후보들은 선거일을
          16일 앞둔 이날 '코로나 시대 경제 대책'과 '차기 정부 경제 정책 방향' 등을 주제로 한 경제 정책 전반에 대해
          120분에 걸쳐 토론할 예정입니다.
        </Description>
        <InfoTab>
          <RunningTime>
            총 시간: <span>96분</span>
          </RunningTime>
          <DebateDate>
            토론일: <span>1월 2일</span>
          </DebateDate>
        </InfoTab>
      </DebateAgoraBlock>
    </Link>
  );
};

export default DebateAgora;
