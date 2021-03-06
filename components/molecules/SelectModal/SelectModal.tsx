import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { Avatar } from '@atoms/index';
import { getSupportCandidate, setSupportCandidate } from '@lib/utils';
import { Candidate } from '@lib/constant';

const SelectModalBlock = styled.div`
  ${flexBox('space-between', 'center', 'column')};
  position: relative;
  width: 450px;
  height: 250px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 1), 0 0 4px rgba(51, 51, 51, 0.5);
  padding: 24px;

  .article {
    ${flexBox('center', 'flex-start', 'column')};
    width: 100%;
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
  .close-box {
    ${flexBox()};
    width: 100%;
    .close {
      width: 65px;
      height: 35px;
      margin-top: 20px;
      border-radius: 8px;
      border: none;
      color: white;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    width: 95%;
    margin: auto;
  }
`;

const SelectBox = styled.ul`
  ${flexBox('center', 'center')};
  width: 100%;
  li {
    ${flexBox('center', 'center', 'column')};
    width: 20%;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 370px;
    li {
      span {
        font-size: 12px;
      }
    }
  }
`;

export const parties = [
  { partyName: '더불어민주', candidateId: Candidate.first, color: '#1F4D9C' },
  { partyName: '국민의힘', candidateId: Candidate.second, color: '#D33736' },
  { partyName: '정의당', candidateId: Candidate.third, color: '#F7CE46' },
  { partyName: '국민의당', candidateId: Candidate.fourth, color: '#D95F29' },
  { partyName: '없음', candidateId: Candidate.none, color: '#C4C4C4' },
];

const SelectModal = () => {
  const [currentId, setCurrentId] = useState(+getSupportCandidate() || Candidate.none);

  const handleClick = (candidateId: number) => {
    return () => {
      setCurrentId(candidateId);
      setSupportCandidate(candidateId);
    };
  };
  useEffect(() => {
    setSupportCandidate(currentId);
  }, []);

  return (
    <SelectModalBlock>
      <div className="article">
        <p>지지하는 정당을 골라주세요.</p>
        <br />
        <SelectBox>
          {parties.map(({ candidateId, color, partyName }) => (
            <li key={candidateId}>
              <Avatar
                writer={''}
                backgroundColor={color}
                margin={true}
                size={30}
                onClick={handleClick(candidateId)}
                active={candidateId === currentId}
              />
              <span>{partyName}</span>
            </li>
          ))}
        </SelectBox>
        <div className="close-box">
          <button className={'close'}>확인</button>
        </div>
      </div>
    </SelectModalBlock>
  );
};

export default SelectModal;
