import styled, { css } from 'styled-components';
import { CandidateTalkCount } from '@models/Agora';
import { flexBox } from '@styles/mixin';
import Link from 'next/link';
import { Avatar } from '@atoms/index';
import { getPast } from '@lib/date';

export const AgoraStyle = css`
  ${flexBox('space-around', 'flex-start', 'column')};
  padding: 12px;
  width: 100%;
  height: auto;
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
  min-height: 120px;
`;

export const Title = styled.h1`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  margin: 13px 0;
`;

const Info = styled.div`
  ${flexBox('space-between')};
  width: 100%;
`;

const Parties = styled.div`
  ${flexBox('flex-start')};
  width: 230px;
  div {
    ${flexBox()};
    > * {
      margin-right: 10px;
    }
  }
  span {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.desktop} {
    div {
      > * {
        margin-right: 4px;
      }
  }
`;

const UpdateTime = styled.div`
  text-align: right;
  font-size: 12px;
  width: 70px;
`;

interface AgoraProps {
  agenda: string;
  description: string;
  talks?: CandidateTalkCount[];
  fixed?: boolean;
  updatedAt: Date;
  roomId: number;
}

const Agora = ({ agenda, description, talks, updatedAt, roomId }: AgoraProps) => {
  const paragraphs = description.split('\\n');

  return (
    <li>
      <Link href={`/agora/${roomId}`} passHref>
        <AgoraBlock>
          <Title>{agenda}</Title>
          <Description>{description}</Description>
          <Info>
            <Parties>
              {talks?.map(({ colorCode, count, candidateId }) => (
                <div key={candidateId}>
                  <Avatar key={colorCode} size={15} writer={''} backgroundColor={colorCode} />
                  <span>{count}</span>
                </div>
              ))}
            </Parties>
            <UpdateTime>{getPast(updatedAt)}</UpdateTime>
          </Info>
        </AgoraBlock>
      </Link>
    </li>
  );
};

export default Agora;
