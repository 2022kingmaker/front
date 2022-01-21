import React from 'react';
import styled from 'styled-components';

const IMAGE_URL = `https://dc4n6vz6gh9cs.cloudfront.net`;

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

const Avatar = ({ imgId, size }: Partial<AvatarProps>) => {
  return <AvatarBlock src={IMAGE_URL + `/candidate-images/candidate${imgId}.png`} size={size} />;
};

export default Avatar;
