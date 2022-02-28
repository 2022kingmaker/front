import React from 'react';
import styled from 'styled-components';
import Avatar, { AvatarProps } from '@atoms/Avatar/Avatar';
import { flexBox } from '@styles/mixin';

const BigAvatarBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  margin-right: 50px;
  .image-wrapper {
    margin-bottom: 10px;
  }
  .info {
    text-align: center;
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: row;
    margin: 10px 0 0 0;
    .image-wrapper {
      margin: 3px 20px 0 0;
    }
  }
`;

export interface BigAvatarProps extends AvatarProps {
  name: string;
  partyName: string;
  imgId: number;
}

const BigAvatar = ({ size = 130, imgId, name, partyName }: BigAvatarProps) => {
  return (
    <BigAvatarBlock>
      <Avatar size={size} imgId={imgId} />
      <div className="info">
        <h3>{name}</h3>
        <div>{partyName}</div>
      </div>
    </BigAvatarBlock>
  );
};

export default BigAvatar;
