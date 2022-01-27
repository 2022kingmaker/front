import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { categories } from '../../../types/Category';
import { keywords } from '../../../types/Keyword';
import { useRouter } from 'next/router';
import useScrollIntoView from '@atoms/SideBar/useScrollIntoView';

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
  a {
    color: #fff;
    line-height: 44px;
    font-weight: 350;
    transition: 0.45s;
    &.active {
      line-height: 66px;
      font-size: ${({ activeFontSize }) => activeFontSize}px;
    }
  }
  .category-item {
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .back-button {
    position: absolute;
    top: 55px;
    left: 10px;
    color: white;
  }
  @media ${({ theme }) => theme.desktop} {
    ${flexBox()};
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
    &::before {
      content: '';
      min-width: 550px;
    }
    &::after {
      content: '';
      min-width: 50px;
    }
    > li {
      font-size: 12px;
      padding: 0 12px;
      height: 100%;
    }
    a.active {
      line-height: 44px;
    }
    .category-item {
      display: none;
    }
`;

export interface SideBarProps {
  toc: categories | keywords;
  activeFontSize?: number;
  activeTopic: string;
  categories?: categories;
}
const SideBar = ({ toc, activeFontSize = 25, activeTopic, categories }: SideBarProps) => {
  const router = useRouter();
  const titleRef = useScrollIntoView(activeTopic);

  const handleTopicClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (target.innerHTML === activeTopic) {
      return;
    }
    titleRef.current[target.innerHTML]?.scrollIntoView({ behavior: 'smooth' });
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
      {toc.map(({ categoryId, name }) => (
        <li key={`${categoryId}+${name}`}>
          <a onClick={handleTopicClick} className={activeTopic === name ? 'active' : ''}>
            {name}
          </a>
        </li>
      ))}
    </SideBarBlock>
  );
};

export default SideBar;
