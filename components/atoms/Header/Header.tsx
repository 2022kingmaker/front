import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { flexBox } from '@styles/mixin';
import { useModal } from '@hooks/index';
import { ReportModal } from '@molecules/index';

const HeaderBlock = styled.div`
  width: 100%;
  height: 44px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  background: #fff;
  position: fixed;
  z-index: 3;
  .container {
    ${flexBox('space-between', 'flex-start', 'row')};
    padding: 0 20px;

    a {
      padding: 0 15px;
      line-height: 40px;
      font-size: 16px;
      & img {
        margin-top: 8px;
        width: 120px;
        height: auto;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Modal = dynamic(() => import('@molecules/Modal/Modal'), { ssr: false });

const NavigationTab = styled.div`
  ${flexBox('space-between', null, 'row')};
`;

const Header = () => {
  const { isShowing, toggle } = useModal();
  return (
    <HeaderBlock>
      <ul className="container">
        <NavigationTab>
          <Link href={'/'}>
            <a>
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Link>
          {/*<Link href={'#'}>*/}
          {/*  <a>공약</a>*/}
          {/*</Link>*/}
          {/*<Link href={'/statistics'}>*/}
          {/*  <a>통계</a>*/}
          {/*</Link>*/}
          <a onClick={toggle}>제보</a>
        </NavigationTab>
      </ul>
      <Modal isShowing={isShowing} close={toggle}>
        <ReportModal />
      </Modal>
    </HeaderBlock>
  );
};

export default Header;
