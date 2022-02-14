import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

const SpeechBubbleBlock = styled.div<Partial<SpeechBubbleProps>>`
  ${flexBox()};

  position: absolute;
  left: 75px;
  width: 50%;
  min-width: 405px;
  height: 55px;
  padding: 18px;
  text-align: center;
  .link-text {
    font-size: 20px;
    color: white;
  }
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

  @media ${({ theme }) => theme.mobile} {
    ${flexBox()};
    ${({ position }) => (position === 'left' ? 'left:50px' : 'left:0')};
    min-width: 250px;
    &:hover {
      cursor: pointer;
      transform: none;
    }
    .link-text {
      font-size: 14px;
      color: white;
    }
  }
`;

export interface SpeechBubbleProps {
  color: string;
  position: string;
  phraseText: string;
  policyId: number;
  categoryId: number;
}

const SpeechBubble = ({
  color = 'first',
  position = 'left',
  phraseText,
  policyId,
  categoryId,
}: Partial<SpeechBubbleProps>) => {
  return (
    <SpeechBubbleBlock color={color} position={position}>
      <Link href={'/opinions/[categoryId]'} as={`/opinions/${categoryId}#${policyId}`}>
        <a className={'link-text'}>{phraseText}</a>
      </Link>
    </SpeechBubbleBlock>
  );
};

export default SpeechBubble;
