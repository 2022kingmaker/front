import React from 'react';
import styled from 'styled-components';
import { Avatar, SpeechBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import { IPhrase } from '@models/Keyword';

const PhraseBlock = styled.div<Partial<PhraseProps>>`
  ${flexBox('center', 'flex-start', 'row')};
  position: relative;
  width: 550px;
  height: auto;
  .image-wrapper {
    left: 5px;
    ${({ position }) => (position === 'right' ? `left` : ``)} : 45px;
  }
  > * {
    margin: 10px 0;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    .image-wrapper {
      left: 0;
      top: 5px;
      ${({ position }) => (position === 'right' ? `left` : ``)} : 15px;
    }
    &.debate .image-wrapper {
    }
  }
`;

const COLORS_MAP = ['', 'first', 'second', 'third', 'fourth'];

export interface PhraseProps {
  position: string;
  phrase?: IPhrase;
  policyId: number;
  categoryId: number;
  script?: string;
  candidateId?: number;
}

const Phrase = ({ policyId, position, phrase, categoryId, script, candidateId }: PhraseProps) => {
  const text = script || phrase!.phrase;
  const partyId = candidateId || phrase!.candidate.party.partyId;
  const color = COLORS_MAP[partyId];

  return (
    <PhraseBlock position={position} className={`${script ? 'debate' : ''}`}>
      {position === 'left' ? (
        <>
          <Avatar imgId={partyId} />
          <SpeechBubble color={color} position={position} text={text} policyId={policyId} categoryId={categoryId} />
        </>
      ) : (
        <>
          <SpeechBubble color={color} position={position} text={text} policyId={policyId} categoryId={categoryId} />
          <Avatar imgId={partyId} />
        </>
      )}
    </PhraseBlock>
  );
};

export default Phrase;
