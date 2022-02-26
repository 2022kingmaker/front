import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const AvatarBlock = styled.img<Partial<AvatarProps>>`
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
`;
const AvatarStringBlock = styled.div<Partial<AvatarProps>>`
  ${flexBox()};
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#C4C4C4')};
  color: white;
  margin: 2px 0 0 0;
`;

export interface AvatarProps {
  size: number;
  imgId: number;
  writer?: string;
  backgroundColor?: string;
}

const Avatar = ({ imgId, size = 55, writer, backgroundColor }: Partial<AvatarProps>) => {
  return typeof writer !== 'undefined' ? (
    <AvatarStringBlock backgroundColor={backgroundColor}>{writer[0]}</AvatarStringBlock>
  ) : (
    <AvatarBlock
      src={process.env.NEXT_PUBLIC_IMAGE_URL + `/candidate-images/candidate0${imgId}.png`}
      size={size}
      alt={'대선 후보 아바타 이미지'}
    />
  );
};

export default Avatar;
