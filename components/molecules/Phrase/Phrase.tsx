import React from 'react';
import styled from 'styled-components';
import { Avatar, SpeechBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import { IPhrase } from '@models/Keyword';

const PhraseBlock = styled.div<Partial<PhraseProps>>`
  ${flexBox('flex-start', 'center', 'row')};
  position: relative;
  width: 550px;
  height: 80px;
  .image-wrapper {
    left: 5px;
    ${({ position }) => (position === 'right' ? `left` : ``)} : 500px;
  }
  > * {
    margin: 10px 0;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    .image-wrapper {
      ${({ position }) => (position === 'right' ? `left` : ``)} : 260px;
    }
  }
`;

const COLORS_MAP = ['', 'first', 'second', 'third', 'fourth'];

export interface PhraseProps {
  position: string;
  phrase: IPhrase;
  policyId: number;
  categoryId: number;
}

const Phrase = ({ policyId, position, phrase, categoryId }: PhraseProps) => {
  const phraseText = phrase.phrase;
  const { partyId, colorCode } = phrase.candidate.party;
  const color = COLORS_MAP[partyId] || colorCode;

  return (
    <PhraseBlock position={position}>
      {position === 'left' ? (
        <>
          <Avatar imgId={partyId} />
          <SpeechBubble
            color={color}
            position={position}
            phraseText={phraseText}
            policyId={policyId}
            categoryId={categoryId}
          />
        </>
      ) : (
        <>
          <SpeechBubble
            color={color}
            position={position}
            phraseText={phraseText}
            policyId={policyId}
            categoryId={categoryId}
          />
          <Avatar imgId={partyId} />
        </>
      )}
    </PhraseBlock>
  );
};

export default Phrase;
