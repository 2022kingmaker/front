import styled from 'styled-components';
import { AgoraStyle, Description, Title } from '@atoms/Agora/Agora';
import React from 'react';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';
import { format } from 'date-fns';

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
        <Title>{title}</Title>
        <Description>{description}</Description>
        <InfoTab>
          <RunningTime>
            총 시간: <span>{totalTime}분</span>
          </RunningTime>
          <DebateDate>
            토론일: <span>{format(new Date(date), 'M월 d일')}</span>
          </DebateDate>
        </InfoTab>
      </DebateAgoraBlock>
    </Link>
  );
};

export default DebateAgora;
