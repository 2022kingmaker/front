import React from 'react';
import styled from 'styled-components';
import Avatar from '@atoms/Avatar/Avatar';
import SpeechBubble from '@atoms/SpeechBubble/SpeechBubble';
import { flexBox } from '@styles/mixin';

const PhraseBlock = styled.div<Partial<PhraseProps>>`
  ${flexBox(null, 'center', 'row')};
  position: relative;
  width: 550px;
  img {
    left: 5px;
    ${({ position }) => (position === 'right' ? `left` : ``)} : 500px;
  }
  > * {
    margin: 10px 0;
  }
`;

export interface PhraseProps {
  color: 'first' | 'second' | 'third' | 'fourth';
  imgURL: string;
  position: string;
}

const Phrase = ({ color, imgURL, position }: PhraseProps) => {
  return (
    <PhraseBlock position={position}>
      {position === 'left' ? (
        <>
          <Avatar imgUrl={imgURL} />
          <SpeechBubble color={color} position={position} />
        </>
      ) : (
        <>
          <SpeechBubble color={color} position={position} />
          <Avatar imgUrl={imgURL} />
        </>
      )}
    </PhraseBlock>
  );
};

export default Phrase;
