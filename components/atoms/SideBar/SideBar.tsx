import React, { useCallback } from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { Categories } from '@models/Category';
import { useRouter } from 'next/router';
import useScrollIntoView from '@atoms/SideBar/useScrollIntoView';
import { ITableContents } from '@models/TableContent';
import throttleGenerator from '@lib/throttleGenerator';

const SideBarBlock = styled.ul<Partial<SideBarProps>>`
  ${flexBox('center', 'center', 'column')};
  width: 200px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  z-index: 1;

  a:hover {
    cursor: pointer;
  }
  li{
    text-align: center;
    margin-top: 35px;
  }
}
  a {
    color: #fff;
    font-weight: 350;
    transition: 0.45s;      
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
    ${flexBox('flex-start')};
    z-index: 3;
    top: 44px;
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      font-size: 12px;
      padding: 0 12px;
      height: 100%;
      margin: 0;
      line-height: 44px;
    }
    .category-item {
      display: none;
    }
`;

export interface SideBarProps {
  toc: ITableContents[];
  activeTopic: string;
  activeFontSize?: number;
  categories?: Categories;
  setActiveTopic?: React.Dispatch<React.SetStateAction<string>>;
}
const SideBar = ({ toc, activeFontSize = 25, activeTopic, categories, setActiveTopic }: SideBarProps) => {
  const router = useRouter();
  const titleRef = useScrollIntoView(activeTopic);
  const throttle = useCallback(throttleGenerator(1000), []);

  const handleTopicClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    throttle(() => {
      const target = e.target as HTMLAnchorElement;
      if (target.innerHTML === activeTopic) {
        return;
      }
      titleRef.current[target.innerHTML]?.scrollIntoView({ behavior: 'smooth' });
      setActiveTopic && setActiveTopic(target.innerHTML);
    });
  };
  return (
    <SideBarBlock className={'desktop-navi'} activeFontSize={activeFontSize}>
      {categories && (
        <>
          <li className={'category-item'}>
            {categories.find(category => category.categoryId === +router.query.categoryId!)?.name}
          </li>
        </>
      )}
      {toc.map(({ id, name }) => (
        <li key={`${id}+${name}`}>
          <a onClick={handleTopicClick} className={activeTopic === name ? 'active' : ''}>
            {name}
          </a>
        </li>
      ))}
    </SideBarBlock>
  );
};

export default SideBar;
