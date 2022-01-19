import React from 'react';
import styled from 'styled-components';
import Avatar, { AvatarProps } from '@atoms/Avatar/Avatar';
import { flexBox } from '@styles/mixin';

const BigAvatarBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  img {
    margin-bottom: 10px;
  }
  .info {
    text-align: center;
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 500;
    }
    div {
    }
  }
`;

export interface BigAvatarProps extends AvatarProps {
  name: string;
  partyName: string;
  imgId: number;
}

const BigAvatar = ({ size = 130, imgId, name = '대통령 후보', partyName = '아무도 안 찍어 당' }: BigAvatarProps) => {
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
