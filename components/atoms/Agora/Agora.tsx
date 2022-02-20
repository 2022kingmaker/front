import styled from 'styled-components';
import { Talk } from '@models/Agora';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

const Test = styled.div`
  ${flexBox()};
  width: 100%;
  position: relative;
`;

const AgoraBlock = styled.a<{ fixed?: boolean }>`
  ${flexBox('space-around', 'flex-start', 'column')};
  padding: 12px;
  width: 100%;
  height: 140px;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 20px 0;
  .text {
    color: gray;
    font-size: 14px;
  }

  ${({ fixed }) =>
    fixed
      ? `
  position: fixed;
  margin: 0 auto; 
  left: 200px;
  right: 0;
  top: 120px;
  width: 75%;
  z-index:2;
  `
      : ''};

  @media ${({ theme }) => theme.desktop} {
    width: 90%;
    left: 0;
    right: 0;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;

const Info = styled.div`
  ${flexBox('space-between')};
  width: 100%;
`;

const Parties = styled.div``;

const UpdateTime = styled.div``;

interface AgoraProps {
  agenda: string;
  description: string;
  talks?: Talk[];
  fixed?: boolean;
}

const Agora = ({
  agenda = '일자리 창출 이런게 필요해요~',
  description = '모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?',
  talks,
  fixed,
}: AgoraProps) => {
  return (
    <Test>
      <Link href={'/agora/1'} passHref>
        <AgoraBlock fixed={fixed}>
          <Title>{agenda}</Title>
          <Description>{description}</Description>
          {talks ? (
            <Info>
              <Parties>ㅁ ㅁ ㅁ ㅁ </Parties>
              <UpdateTime>3분 전</UpdateTime>
            </Info>
          ) : (
            <div className={'text'}>자유로운 의견 나눠주세요!</div>
          )}
        </AgoraBlock>
      </Link>
    </Test>
  );
};

export default Agora;
