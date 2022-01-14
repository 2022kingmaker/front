import React from 'react';
import styled from 'styled-components';

const SpeechBubbleBlock = styled.div<Partial<SpeechBubbleProps>>`
  position: relative;
  width: 405px;
  height: 55px;
  padding: 18px;
  font-size: 20px;
  text-align: center;
  color: white;
  background: ${({ color }) => color};
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: transparent ${({ color }) => color};
    display: block;
    width: 0;
    z-index: 1;
    top: 25px;

    ${({ position }) => `
      border-width: ${position === 'left' ? `11px 13px 11px 0` : `11px 0 11px 13px`};
      ${position}: -10px;
    `}
  }
`;

export interface SpeechBubbleProps {
  color: string;
  position: 'left' | 'right';
}

const SpeechBubble = ({ color = 'black', position = 'left' }: Partial<SpeechBubbleProps>) => {
  return (
    <SpeechBubbleBlock color={color} position={position}>
      {'여기에 공약에 대한 한 줄 견해'}
    </SpeechBubbleBlock>
  );
};

export default SpeechBubble;
