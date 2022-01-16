import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { categories } from '../../../types/Category';
import { keywords } from '../../../types/Keyword';
import { useRecoilState } from 'recoil';
import { tocState } from '../../../states/toc';

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
  z-index: 1;
`;

export interface SideBarProps {
  toc: categories | keywords;
  activeFontSize?: number;
  activeTopic: string;
}

const SideBar = ({ toc, activeFontSize = 25, activeTopic }: SideBarProps) => {
  const [table, setToc] = useRecoilState(tocState);
  const { currentTopic } = table;

  const handleTopicClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { innerHTML: value } = e.target as HTMLAnchorElement;
    if (value === currentTopic) {
      return;
    }

    setToc({ currentTopic: value, targetTopic: value });
  };

  return (
    <SideBarBlock activeFontSize={activeFontSize}>
      {toc.map(({ categoryId, name }) => (
        <li key={`${categoryId}+${name}`}>
          <a onClick={handleTopicClick} className={activeTopic === name ? 'active' : ''} href={`#${name}`}>
            {name}
          </a>
        </li>
      ))}
    </SideBarBlock>
  );
};

export default SideBar;
