import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { Avatar } from '@atoms/index';

const IntroModalBlock = styled.div`
  ${flexBox('space-between', null, 'column')};
  position: relative;
  width: 450px;
  height: 210px;
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
  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: auto;
  }
`;

const SelectBox = styled.ul`
  ${flexBox()};

  li {
    ${flexBox('center', 'center', 'column')};
    width: 20%;
  }
`;

const parties = [
  { partyName: '더불어민주당', color: '#1F4D9C' },
  { partyName: '국민의힘', color: '#D33736' },
  { partyName: '정의당', color: '#F7CE46' },
  { partyName: '국민의당', color: '#D95F29' },
  { partyName: '없음', color: '#C4C4C4' },
];

const IntroModal = () => {
  const [currentParty, setCurrentParty] = useState('');

  const handleClick = (partyName: string) => {
    return () => {
      setCurrentParty(partyName);
    };
  };
  useEffect(() => {
    return () => {
      // set user party
    };
  }, []);

  return (
    <IntroModalBlock>
      <div className="article">
        <p>지지하는 정당을 골라주세요.</p>
        <br />
        <SelectBox>
          {parties.map(({ partyName, color }) => (
            <li key={partyName}>
              <Avatar
                writer={''}
                backgroundColor={color}
                margin={true}
                onClick={handleClick(partyName)}
                active={partyName === currentParty}
              />
              {partyName}
            </li>
          ))}
        </SelectBox>
      </div>
    </IntroModalBlock>
  );
};

export default IntroModal;
