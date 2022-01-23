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
    }
  }
`;

const NavigationTab = styled.div`
  ${flexBox('space-between', null, 'row')};
`;
const UserInfo = styled.div``;

const Header = () => {
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
          {/*<Link href={'#'}>*/}
          {/*  <a>통계</a>*/}
          {/*</Link>*/}
          <Link
            href={
              'mailto:20dsmd@gmail.com?subject=제보/수정/추가 건의 메일입니다.&body=후보의 이름과 제보/수정/추가 되었으면 하는 부분을 설명해주세요.'
            }
          >
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
