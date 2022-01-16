import React from 'react';
import styled from 'styled-components';

const AvatarBlock = styled.img<Partial<AvatarProps>>`
  position: relative;
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `};
  border-radius: 50%;
`;

export interface AvatarProps {
  size: number;
  imgUrl?: string;
  name: string;
  partyName: string;
}

const Avatar = ({ imgUrl = 'http://localhost:3000/images/candidate2.png', size }: Partial<AvatarProps>) => {
  return <AvatarBlock src={imgUrl} size={size} />;
};

export default Avatar;
