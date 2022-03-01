import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { useModal } from '@hooks/index';
import { ReportModal } from '@molecules/index';
const Modal = dynamic(() => import('@molecules/Modal/Modal'), { ssr: false });

const HeaderBlock = styled.div`
  width: 100%;
  height: 44px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  background: #fff;
  position: fixed;
  z-index: 3;
  white-space: nowrap;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    ${flexBox('space-between', 'flex-start', 'row')};
    a {
      padding: 0 10px;
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
const ImageWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  width: 120px;
  height: 27.86px;
  & > span {
  }
`;

const NavigationTab = styled.div`
  ${flexBox('space-between', null, 'row')};
`;

const Header = () => {
  const { isShowing, toggle } = useModal();
  return (
    <HeaderBlock>
      <ul className="container">
        <NavigationTab>
          <Link href={'/'} passHref>
            <a>
              <ImageWrapper>
                <Image src="/images/logo.png" layout={'fill'} alt="logo" />
              </ImageWrapper>
            </a>
          </Link>
          <Link href={'/'} passHref>
            <a>공약비교</a>
          </Link>
          <Link href={'/statistics'} passHref>
            <a>여론조사</a>
          </Link>
          <Link href={'/talks/1'} passHref>
            <a>투기장</a>
          </Link>
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
