import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const IntroModalBlock = styled.div`
  ${flexBox('space-between', null, 'column')};
  position: relative;
  width: 450px;
  height: 450px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 1), 0 0 4px rgba(51, 51, 51, 0.5);
  padding: 24px;

  &::before {
    left: 0;
    bottom: 55px;
    content: '';
    position: absolute;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.66);
  }

  .close-box {
    ${flexBox('space-between', 'center', 'row')};
    position: relative;
    > * {
      &:hover {
        cursor: pointer;
      }
    }
    .all-day-close {
      text-align: left;
    }
    .close {
      text-align: right;
    }
  }
  @media ${({ theme }) => theme.desktop} {
    width: 90%;
    margin: auto;
  }
`;

const IntroModal = () => {
  const handleAllDayCloseClick = () => {
    const currentTime = Date.now();
    localStorage.setItem('offPopup', `${currentTime + 86400000}`);
  };

  return (
    <IntroModalBlock>
      <div className="article">
        <p>이 사이트는 정확하지 않을 수 있습니다.</p>
        <p>불만이 있으면 제보하거나 뒤로가기를 누르십시오.</p>
      </div>
      <div className="close-box">
        <div className="close all-day-close" onClick={handleAllDayCloseClick}>
          X 오늘 하루 열지 않기
        </div>
        <div className="close">닫기 X</div>
      </div>
    </IntroModalBlock>
  );
};

export default IntroModal;
