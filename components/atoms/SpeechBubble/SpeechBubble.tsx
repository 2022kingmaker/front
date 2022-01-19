import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const SpeechBubbleBlock = styled.div<Partial<SpeechBubbleProps>>`
  position: absolute;
  left: 75px;
  width: 50%;
  min-width: 405px;
  height: 55px;
  padding: 18px;
  font-size: 20px;
  text-align: center;
  color: white;
  background: ${({ theme, color }) => theme.colors[color!]};
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  transition: 0.45s;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: transparent ${({ theme, color }) => theme.colors[color!]};
    display: block;
    width: 0;
    z-index: 1;
    top: 25px;

    ${({ position }) => `
      border-width: ${position === 'left' ? `11px 13px 11px 0` : `11px 0 11px 13px`};
      ${position}: -10px;
    `}
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transform-origin: ${({ position }) => position};
  }
`;

export interface SpeechBubbleProps {
  color: string;
  position: string;
  phraseText: string;
}

const SpeechBubble = ({ color = 'first', position = 'left', phraseText }: Partial<SpeechBubbleProps>) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    const target = e.target.closest('.topic-container');
    router.push(`/opinions/${target.dataset.categoryId}`);
  };
  return (
    <SpeechBubbleBlock color={color} position={position} onClick={handleClick}>
      {phraseText}
    </SpeechBubbleBlock>
  );
};

export default SpeechBubble;
