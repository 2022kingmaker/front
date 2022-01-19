import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const HeaderBlock = styled.div`
  width: 100%;
  height: 44px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  background: #fff;
  position: fixed;
  z-index: 3;
  .container {
    ${flexBox('space-between', null, 'row')};
    padding: 0 20px;

    a {
      display: inline-flex;
      padding: 0 15px;
      line-height: 44px;
      font-size: 16px;
    }
  }
`;

const NavigationTab = styled.div``;
const UserInfo = styled.div``;

const Header = () => {
  return (
    <HeaderBlock>
      <ul className="container">
        <NavigationTab>
          <Link href={'/'}>
            <a>LOGO</a>
          </Link>
          {/*<Link href={'#'}>*/}
          {/*  <a>공약</a>*/}
          {/*</Link>*/}
          {/*<Link href={'#'}>*/}
          {/*  <a>통계</a>*/}
          {/*</Link>*/}
          <Link href={'mailto:20dsmd@gmail.com'}>
            <a>제보</a>
          </Link>
        </NavigationTab>
        {/*<UserInfo>*/}
        {/*  <a href="#">로그인</a>*/}
        {/*</UserInfo>*/}
      </ul>
    </HeaderBlock>
  );
};

export default Header;
