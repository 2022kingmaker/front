import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

const SideBarBlock = styled.ul`
  ${flexBox('center', 'center', 'column')};
  width: 200px;
  height: calc(100%);
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  a {
    color: #fff;
    line-height: 44px;
    font-weight: 350;
    &.active {
      line-height: 66px;
      font-size: 20px;
    }
  }
`;

export interface SideBarProps {
  categories: string[];
}

const SideBar = ({ categories = ['경제', '부동산'] }: Partial<SideBarProps>) => {
  return (
    <SideBarBlock>
      {categories.map(category => (
        <li>
          <a href="#">{category}</a>
        </li>
      ))}
    </SideBarBlock>
  );
};

export default SideBar;
