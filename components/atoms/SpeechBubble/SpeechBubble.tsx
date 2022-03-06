import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

const SpeechBubbleBlock = styled.a<Partial<SpeechBubbleProps>>`
  ${flexBox()};
  &.debate {
    width: 85%;
    font-size: 16px;
  }
  position: relative;
  left: 25px;
  width: 70%;
  min-width: 405px;
  height: auto;
  padding: 18px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
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
    top: 7px;

    ${({ position }) => `
      border-width: ${position === 'left' ? `11px 13px 11px 0` : `11px 0 11px 13px`};
      ${position}: -9px;
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
    padding: 12px;
    font-size: 14px;
    ${({ position }) => (position === 'left' ? 'left:10px' : 'left:0')};
    min-width: 250px;

    &:hover {
      cursor: pointer;
      transform: none;
    }
    &.debate {
      width: 85%;
      font-size: 14px;
      padding: 12px;
    }
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
      <SpeechBubbleBlock
        color={color}
        position={position}
        categoryId={categoryId}
        className={categoryId ? '' : 'debate'}
      >
        {text}
      </SpeechBubbleBlock>
    </Link>
  );
};

export default SpeechBubble;
