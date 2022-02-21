import styled from 'styled-components';
import { AgoraStyle, Description, Title } from '@atoms/Agora/Agora';
import { useEffect, useRef, useState } from 'react';

const FixedAgoraBlock = styled.div<{ toggle: boolean }>`
  ${AgoraStyle};
  position: fixed;
  margin: 0 auto;
  left: 200px;
  right: 0;
  top: 60px;
  width: 75%;
  height: ${({ toggle }) => (toggle ? '' : '50px')};
  outline: none;
  z-index: 2;
  .text {
    color: gray;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 90%;
    top: 110px;
    left: 0;
    right: 0;
  }
`;

interface FixedAgoraProps {
  agenda: string;
  description: string;
}

const FixedAgora = ({
  agenda = '일자리 창출 이런게 필요해요~',
  description = '모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?',
}: FixedAgoraProps) => {
  const [toggle, setToggle] = useState(false);
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
      <Title>{agenda}</Title>
      {toggle && (
        <>
          <Description>{description}</Description>
          <div className={'text'}>자유로운 의견 나눠주세요!</div>
        </>
      )}
    </FixedAgoraBlock>
  );
};

export default FixedAgora;
