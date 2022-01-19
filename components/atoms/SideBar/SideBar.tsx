import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { categories } from '../../../types/Category';
import { keywords } from '../../../types/Keyword';
import { useRecoilState } from 'recoil';
import { tocState } from '../../../states/toc';
import { useRouter } from 'next/router';

const SideBarBlock = styled.ul<Partial<SideBarProps>>`
  ${flexBox('center', 'center', 'column')};
  width: 200px;
  height: calc(100%);
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
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
  z-index: 1;
  .back-button {
    position: absolute;
    top: 55px;
    left: 10px;
    color: white;
  }
  @media ${({ theme }) => theme.desktop} {
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
  const [table, setToc] = useRecoilState(tocState);
  const { currentTopic } = table;

  const handleTopicClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { innerHTML: value } = e.target as HTMLAnchorElement;
    if (value === currentTopic) {
      return;
    }
    setToc({ currentTopic: value, targetTopic: value });
  };

  const handleBackBtnClick = () => {
    if (categories) {
      router.push(`/#${categories[toc[0].categoryId].name}`);
    }
  };

  return (
    <SideBarBlock className={'desktop-navi'} activeFontSize={activeFontSize}>
      {categories && (
        <>
          <div className={'back-button'} onClick={handleBackBtnClick}>{`<`}</div>
          <li className={'category-item'}>{categories.find.name}</li>
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
