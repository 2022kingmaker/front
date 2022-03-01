import styled, { css } from 'styled-components';
import { AgoraStyle, Description, Title } from '@atoms/Agora/Agora';
import React, { useRef, useState } from 'react';
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
  height: auto;
  position: fixed;
  margin: 0 auto;
  left: 200px;
  right: 0;
  top: 60px;
  width: 75%;
  outline: none;
  z-index: 2;

  p {
    margin: 10px 0;
  }
  .bottom-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    font-size: 14px;

    .text {
      p {
        color: #333;
        margin: 0;
        width: 100%;
        font-weight: 600;
        font-style: italic;
      }
    }
    .fold-button {
      position: absolute;
      z-index: 99;
      right: 10px;
      top: 15px;
      width: 4%;
      min-width: 30px;
      margin-right: 5px;
      color: ${({ theme }) => theme.colors.primary};
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
const FixedAgoraTitle = styled(Title)`
  width: calc(100% - 40px);
`;

interface FixedAgoraProps {
  agenda: string;
  description: string;
}

const FixedAgora = ({ agenda, description }: FixedAgoraProps) => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const paragraphs = React.Children.toArray(
    description.split('\\n').map(paragraph => (
      <>
        <p>{paragraph}</p>
      </>
    )),
  );

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
          <FixedAgoraTitle>{agenda}</FixedAgoraTitle>
          <Description>{paragraphs.slice(0, paragraphs.length - 1)}</Description>
          <div className={'bottom-container'}>
            <div className={'text'}>{paragraphs.slice(-1)}</div>
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
