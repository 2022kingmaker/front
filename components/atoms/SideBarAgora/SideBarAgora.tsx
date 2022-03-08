import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { ITableContents } from '@models/TableContent';

const SideBarAgoraBlock = styled.ul<Partial<SideBarAgoraProps>>`
  ${flexBox('center', 'center', 'column')};
  width: 200px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  z-index: 1;

  a:hover {
    cursor: pointer;
  }
  li {
    text-align: center;
    margin-top: 35px;
    padding: 4px;
  }

  a {
    color: #fff;
    line-height: 22px;
    &.active {
      font-size: ${({ activeFontSize }) => activeFontSize}px;
    }
  }
  .category-item {
    color: white;
    font-size: 32px;
    font-weight: 700;
  }
  .back-button {
    position: absolute;
    top: 55px;
    left: 10px;
    color: white;
  }
  @media ${({ theme }) => theme.desktop} {
    ${flexBox('center')};
    z-index: 3;
    top: 44px;
    width: 100%;
    height: 50px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    background: ${({ theme }) => theme.colors.primary};
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      font-size: 18px;
      padding: 0 12px;
      height: 100%;
      margin: 0;
      line-height: 48px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: white;
    }
  }
  .category-item {
    display: none;
  }
`;

export interface SideBarAgoraProps {
  toc: ITableContents[];
  activeFontSize?: number;
  currentCategoryId: number;
  setCurrentCategoryId: React.Dispatch<React.SetStateAction<number>>;
}
const SideBarAgora = ({ toc, activeFontSize = 25, currentCategoryId, setCurrentCategoryId }: SideBarAgoraProps) => {
  return (
    <SideBarAgoraBlock className={'desktop-navi'} activeFontSize={activeFontSize}>
      {toc.map(({ id, name }) => (
        <li key={`${id}+${name}`} onClick={() => setCurrentCategoryId(id)}>
          <a className={`${id === currentCategoryId ? 'active' : ''}`}>{name}</a>
        </li>
      ))}
    </SideBarAgoraBlock>
  );
};

export default SideBarAgora;
