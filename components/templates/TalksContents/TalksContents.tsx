import styled from 'styled-components';
import SortButton from '@atoms/SortButton/SortButton';
import Agora from '@atoms/Agora/Agora';
import { useQuery } from 'react-query';
import { getRooms } from '../../../apis/agora';
import { Room } from '@models/Agora';
import { useEffect } from 'react';

const TalksContentsBlock = styled.div`
  position: relative;
  padding: 80px 30px 0 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 125px 12px 200px 12px;
    .topic-container {
      width: 100%;
    }
  }
`;

interface TalksContentsProps {
  talkId: number;
}

const TalksContents = ({ talkId }: TalksContentsProps) => {
  const { data, isLoading, refetch, isRefetching } = useQuery<Room[]>(['getRooms'], () => getRooms(talkId));

  useEffect(() => {
    refetch();
  }, [talkId]);

  return (
    <TalksContentsBlock>
      <SortButton />
      <ul>
        {isLoading || isRefetching ? (
          <>토론 방 불러오는 중...</>
        ) : (
          data!.map(({ agenda, description, roomId, candidateTalkCounts }) => (
            <li key={roomId}>
              <Agora agenda={agenda} description={description} talks={candidateTalkCounts} />
            </li>
          ))
        )}
      </ul>
    </TalksContentsBlock>
  );
};

export default TalksContents;
