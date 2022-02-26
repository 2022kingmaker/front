import styled, { css } from 'styled-components';
import { Talk } from '@models/Agora';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';

export const AgoraStyle = css`
  ${flexBox('space-around', 'flex-start', 'column')};
  padding: 12px;
  width: 100%;
  height: 140px;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 20px auto;

  @media ${({ theme }) => theme.desktop} {
    width: 90%;
  }
`;
const AgoraBlock = styled.a`
  ${AgoraStyle};
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const Description = styled.div`
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
}: AgoraProps) => {
  return (
    <Link href={'/agora/1'} passHref>
      <AgoraBlock>
        <Title>{agenda}</Title>
        <Description>{description}</Description>
        <Info>
          <Parties>ㅁ ㅁ ㅁ ㅁ </Parties>
          <UpdateTime>3분 전</UpdateTime>
        </Info>
      </AgoraBlock>
    </Link>
  );
};

export default Agora;
