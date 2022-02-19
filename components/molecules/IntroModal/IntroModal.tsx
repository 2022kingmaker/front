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

  .article {
    line-height: 24px;
    padding: 12px 0;
    > * {
      padding: 5px;
      font-size: 14px;
    }
    h1 {
      font-size: 20px;
    }
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
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
    margin-top: 30px;
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
  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: auto;
  }
`;

const IntroModal = () => {
  const handleAllDayCloseClick = () => {
    const currentTime = Date.now();
    localStorage.setItem('offPopup', `${currentTime + 86400000}`);
    document.body.classList.remove('modal-on');
  };

  return (
    <IntroModalBlock>
      <div className="article">
        <h1>본 사이트에 기재된 정책은 후보들의 공식 입장과 다를 수 있습니다.</h1>
        <p>
          대선마당 운영진이 공신력있는 매체에서 공개된 자료들을 취합하여 정책을 정리하였으나, 취합 과정의 미흡함, 후보의
          입장 변화 등과 같은 이유로 잘못된 정보가 전달될 가능성이 있습니다.
        </p>
        <p>저희는 공익 차원에서 본 사이트를 운영하고 있으며 신뢰할 수 있는 정보 전달을 목적으로 합니다.</p>
        <p>
          사이트 사용 중에 잘못된 정보나 수정이 필요한 부분을 발견하셨다면 상단의 ‘제보’를 통해 전달해주시길 바랍니다.
        </p>
        <p>운영진에서 확인 후 빠른 시일 내에 반영하겠습니다.</p>
      </div>
      <div className="close-box">
        <div className="close all-day-close" onClick={handleAllDayCloseClick}>
          오늘 하루 열지 않기
        </div>
        <div className="close">닫기</div>
      </div>
    </IntroModalBlock>
  );
};

export default IntroModal;
