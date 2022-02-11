import React from 'react';
import styled from 'styled-components';
import BigAvatar from '@molecules/BigAvatar/BigAvatar';
import SpeechRect from '@atoms/SpeechRect/SpeechRect';
import { flexBox } from '@styles/mixin';

const OpinionBlock = styled.div<{ position: string }>`
  ${flexBox('center', 'center', 'row')};
  div:first-child {
    margin-right: 50px;
  }
  //flex-direction: column-reverse;
  @media ${({ theme }) => theme.desktop} {
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: ${({ position }) => (position === 'left' ? 'column-reverse' : 'column')};

    div:first-child {
      margin: 0;
    }
  }
`;

export interface OpinionProps {
  phrase: string;
  text: string;
  rectType: number;
  candidate: any;
  policyId: number;
}

const COLORS_MAP = ['', 'first', 'second', 'third', 'fourth'];

const Opinion = ({ policyId, phrase, text, rectType, candidate }: OpinionProps) => {
  const { name: candidateName, party } = candidate;
  const { name: partyName, partyId } = party;

  const position = rectType % 2 === 0 ? 'left' : 'right';
  return (
    <OpinionBlock position={position} data-policy={policyId}>
      {position === 'left' ? (
        <>
          <BigAvatar size={150} imgId={partyId} partyName={partyName} name={candidateName} />
          <SpeechRect backgroundColor={COLORS_MAP[partyId]} phrase={phrase} text={text} rectType={rectType} />
        </>
      ) : (
        <>
          <SpeechRect backgroundColor={COLORS_MAP[partyId]} phrase={phrase} text={text} rectType={rectType} />
          <BigAvatar size={150} imgId={partyId} partyName={partyName} name={candidateName} />
        </>
      )}
    </OpinionBlock>
  );
};

export default Opinion;
