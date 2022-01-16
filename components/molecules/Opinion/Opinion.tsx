import React from 'react';
import styled from 'styled-components';
import BigAvatar from '@molecules/BigAvatar/BigAvatar';
import SpeechRect from '@atoms/SpeechRect/SpeechRect';
import { flexBox } from '@styles/mixin';

const OpinionBlock = styled.div`
  ${flexBox('center', 'center', 'row')};
`;

export interface OpinionProps {
  phrase: string;
  text: string;
  rectType: number;
  candidate: any;
}

const Opinion = ({ phrase, text, rectType, candidate }: OpinionProps) => {
  const { name: candidateName, party } = candidate;
  const { name: partyName, colorCode } = party;
  return (
    <OpinionBlock>
      <BigAvatar size={150} partyName={partyName} name={candidateName} />
      <SpeechRect backgroundColor={colorCode} phrase={phrase} text={text} rectType={rectType} />
    </OpinionBlock>
  );
};

export default Opinion;
