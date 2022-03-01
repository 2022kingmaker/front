import styled from 'styled-components';
import React from 'react';

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

interface TalksContentsProps {
  talkId: number;
}

const DebateContents = ({ talkId }: TalksContentsProps) => {
  return <DebateContentsBlock></DebateContentsBlock>;
};

export default DebateContents;
