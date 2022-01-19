import React from 'react';
import styled from 'styled-components';
import BigAvatar from '@molecules/BigAvatar/BigAvatar';
import SpeechRect from '@atoms/SpeechRect/SpeechRect';
import { flexBox } from '@styles/mixin';
import { policy } from '../../../types/Policy';

const OpinionBlock = styled.div`
  ${flexBox('center', 'center', 'row')};
  div:first-child {
    margin-right: 50px;
  }
`;

export interface OpinionProps {
  phrase: string;
  text: string;
  rectType: number;
  candidate: any;
}

const COLORS_MAP = ['', 'first', 'second', 'third', 'fourth'];

const Opinion = ({ phrase, text, rectType, candidate }: OpinionProps) => {
  const { name: candidateName, party } = candidate;
  const { name: partyName, colorCode, partyId } = party;

  const position = rectType % 2 === 0 ? 'left' : 'right';

  return (
    <OpinionBlock>
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
