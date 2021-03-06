import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import Image from 'next/image';

const AvatarBlock = styled.div<Partial<AvatarProps>>`
  position: relative;
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `};
  border-radius: 50%;
  @media ${({ theme }) => theme.mobile} {
    width: 35px;
    height: 35px;
  }
  & > span {
    border-radius: 50%;
  }
`;
const AvatarStringBlock = styled.div<Partial<AvatarProps>>`
  ${flexBox()};
  position: relative;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#C4C4C4')};
  color: white;
  margin: ${({ margin }) => (margin ? '' : '2px 5px 0 0')};
  &.active {
    border: 3px solid ${({ theme }) => theme.colors.activeBorder};
  }
  ${({ size }) => (size ? `width: ${size}px; height:${size}px;` : ``)};
`;

export interface AvatarProps {
  size: number;
  imgId: number;
  writer?: string;
  backgroundColor?: string;
  margin?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Avatar = ({ imgId, size = 55, writer, backgroundColor, margin, active, onClick }: Partial<AvatarProps>) => {
  return typeof writer !== 'undefined' ? (
    <AvatarStringBlock
      backgroundColor={backgroundColor}
      margin={margin}
      size={size}
      className={active ? 'active' : ''}
      onClick={onClick}
    >
      {writer[0]}
    </AvatarStringBlock>
  ) : (
    <AvatarBlock className={'image-wrapper'} size={size}>
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_URL + `/candidate-images/candidate0${imgId}.png`}
        layout={'fill'}
        alt={'대선 후보 아바타 이미지'}
      />
    </AvatarBlock>
  );
};

export default Avatar;
