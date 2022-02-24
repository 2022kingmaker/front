import styled, { css } from 'styled-components';
import { AgoraStyle, Description, Title } from '@atoms/Agora/Agora';
import { useEffect, useRef, useState } from 'react';
import FoldedIcon from '@assets/icons/folded.svg';

const FoldAgora = css`
  width: 50px;
  height: 50px;
  left: 85%;

  :hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 50px;
    height: 50px;
    left: 80%;
  }
`;

const FixedAgoraBlock = styled.div<{ toggle: boolean }>`
  ${AgoraStyle};
  position: fixed;
  margin: 0 auto;
  left: 200px;
  right: 0;
  top: 60px;
  width: 75%;
  outline: none;
  z-index: 2;

  .bottom-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .text {
      color: gray;
      font-size: 14px;
    }
    .fold-button {
      margin-right: 20px;
      font-size: 14px;
      :hover {
        cursor: pointer;
      }
    }
  }

  @media ${({ theme }) => theme.desktop} {
    width: 90%;
    top: 110px;
    left: 0;
    right: 0;
  }
  ${({ toggle }) => (toggle ? '' : FoldAgora)};
`;

interface FixedAgoraProps {
  agenda: string;
  description: string;
}

const FixedAgora = ({
  agenda = '일자리 창출 이런게 필요해요~',
  description = '모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?',
}: FixedAgoraProps) => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
    setToggle(true);
  }, []);

  const handleFocus = () => {
    setToggle(true);
  };
  const handleBlur = () => {
    setToggle(false);
  };

  return (
    <FixedAgoraBlock ref={ref} tabIndex={1} onFocus={handleFocus} onBlur={handleBlur} toggle={toggle}>
      {toggle ? (
        <>
          <Title>{agenda}</Title>
          <Description>{description}</Description>
          <div className={'bottom-container'}>
            <div className={'text'}>자유로운 의견 나눠주세요!</div>
            <div className={'fold-button'} onClick={handleBlur}>
              접기
            </div>
          </div>
        </>
      ) : (
        <FoldedIcon onClick={handleFocus} />
      )}
    </FixedAgoraBlock>
  );
};

export default FixedAgora;
