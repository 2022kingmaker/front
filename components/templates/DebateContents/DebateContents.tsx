import styled from 'styled-components';
import React from 'react';
import { Debate } from '@models/Debate';
import { Agora } from '@atoms/index';
import DebateAgora from '@atoms/Agora/DebateAgora/DebateAgora';

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

interface DebateContentsProps {
  debateList: Debate[];
}
const DebateContents = ({ debateList }: DebateContentsProps) => {
  return (
    <DebateContentsBlock>
      {debateList.map(({ debateId, description, title, totalTime, date }) => (
        <DebateAgora
          key={debateId}
          debateId={debateId}
          description={description}
          title={title}
          date={date}
          totalTime={totalTime}
        />
      ))}
    </DebateContentsBlock>
  );
};

export default DebateContents;
