import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { ITableContents } from '@models/TableContent';
import Link from 'next/link';

const SideBarRouteBlock = styled.ul<Partial<SideBarRouteProps>>`
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

export interface SideBarRouteProps {
  toc: ITableContents[];
  activeFontSize?: number;
  currentCategoryId: number;
}
const SideBarRoute = ({ toc, activeFontSize = 25, currentCategoryId }: SideBarRouteProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { x } = document.querySelector('.active')?.getBoundingClientRect() as DOMRect;
      ref.current?.scrollTo(x - innerWidth / 2, 0);
    }
  }, []);

  return (
    <SideBarRouteBlock className={'desktop-navi'} activeFontSize={activeFontSize} ref={ref}>
      {toc.map(({ id, name }) => (
        <li key={`${id}+${name}`}>
          <Link href={`/talks/${id}`} passHref>
            <a className={`${id === currentCategoryId ? 'active' : ''}`}>{name}</a>
          </Link>
        </li>
      ))}
    </SideBarRouteBlock>
  );
};

export default SideBarRoute;
