import React from 'react';
import styled from 'styled-components';

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

export interface AvatarProps {
  size: number;
  imgId: number;
}

const Avatar = ({ imgId, size = 55 }: Partial<AvatarProps>) => {
  return (
    <AvatarBlock
      src={process.env.NEXT_PUBLIC_IMAGE_URL + `/candidate-images/candidate0${imgId}.png`}
      size={size}
      alt={'대선 후보 아바타 이미지'}
    />
  );
};

export default Avatar;
