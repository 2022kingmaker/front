import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { flexBox } from '@styles/mixin';

const ReportModalBlock = styled.div`
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
    > * {
      padding: 5px;
      font-size: 14px;
    }
    h1 {
      font-size: 20px;
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

interface ReportModalProps {}

const ReportModal = ({}: ReportModalProps) => {
  return (
    <ReportModalBlock>
      <div className="article">
        <h1>제보하기</h1>
        <p>후보의 공약과 관련된 제보 시에 해당 공약의 공신력 있는 출처를 반드시 기입해주시기 바랍니다.</p>
        <p>주의 : 개인 유튜버, 블로그 포스트 등은 유효한 출처로 인정되지 않습니다.</p>
      </div>
      <div className="close-box">
        <div className="close">닫기</div>
        <Link
          href={
            'mailto:20dsmd@gmail.com?subject=제보/수정/추가 건의 메일입니다.&body=후보의 이름과 제보/수정/추가 되었으면 하는 부분을 설명해주세요.'
          }
        >
          <a>제보하기</a>
        </Link>
      </div>
    </ReportModalBlock>
  );
};

export default ReportModal;
