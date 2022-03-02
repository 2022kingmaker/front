import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

const SpeechBubbleBlock = styled.a<Partial<SpeechBubbleProps>>`
  ${flexBox()};

  position: relative;
  left: 25px;
  width: 50%;
  min-width: 405px;
  height: auto;
  padding: 18px;
  text-align: center;
  font-size: 20px;
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
    top: 22px;

    ${({ position }) => `
      border-width: ${position === 'left' ? `11px 13px 11px 0` : `11px 0 11px 13px`};
      ${position}: -10px;
    `}
  }
  &:hover {
    ${({ categoryId, position }) =>
      categoryId
        ? `
    cursor: pointer;
    transform: scale(1.2);
    transform-origin: ${position};`
        : ''}
  }

  @media ${({ theme }) => theme.mobile} {
    ${flexBox()};
    ${({ position }) => (position === 'left' ? 'left:10px' : 'left:0')};
    min-width: 250px;
    &:hover {
      cursor: pointer;
      transform: none;
    }
    font-size: 14px;
  }
`;

export interface SpeechBubbleProps {
  color: string;
  position: string;
  text: string;
  policyId: number;
  categoryId: number;
}

const SpeechBubble = ({
  color = 'first',
  position = 'left',
  text,
  policyId,
  categoryId,
}: Partial<SpeechBubbleProps>) => {
  const toPath = {
    href: categoryId ? '/opinions/[categoryId]' : '#',
    as: categoryId ? `/opinions/${categoryId}#${policyId}` : '#',
  };

  return (
    <Link href={toPath.href} as={toPath.as} passHref>
      <SpeechBubbleBlock color={color} position={position} categoryId={categoryId}>
        {text}
      </SpeechBubbleBlock>
    </Link>
  );
};

export default SpeechBubble;
