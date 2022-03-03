import styled from 'styled-components';
import React from 'react';
import { Debate } from '@models/Debate';
import { Agora } from '@atoms/index';
import DebateAgora from '@atoms/Agora/DebateAgora/DebateAgora';
import { flexBox } from '@styles/mixin';

const DebateContentsBlock = styled.div`
  position: relative;
  padding: 80px 30px 0 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 125px 12px 50px 12px;
    .topic-container {
      width: 100%;
    }
  }
`;

const ErrorMessage = styled.div`
  ${flexBox()};
  width: 100%;
  height: 100%;
`;

interface DebateContentsProps {
  debateList: Debate[] | null;
}
const DebateContents = ({ debateList }: DebateContentsProps) => {
  return (
    <DebateContentsBlock>
      {debateList && debateList.length ? (
        debateList.map(({ debateId, description, title, totalTime, date }) => (
          <DebateAgora
            key={debateId}
            debateId={debateId}
            description={description}
            title={title}
            date={date}
            totalTime={totalTime}
          />
        ))
      ) : (
        <ErrorMessage>아직 등록된 토론이 없습니다.</ErrorMessage>
      )}
    </DebateContentsBlock>
  );
};

export default DebateContents;
