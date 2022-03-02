import styled from 'styled-components';
import SortButton from '@atoms/SortButton/SortButton';
import Agora from '@atoms/Agora/Agora';
import { useQuery } from 'react-query';
import { getRooms } from '../../../apis/agora';
import { Room } from '@models/Agora';
import React, { useEffect, useState } from 'react';
import { SortStand } from '@lib/constant';
import { sortRooms } from '@lib/utils';

const TalksContentsBlock = styled.div`
  position: relative;
  padding: 80px 30px 0 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 125px 12px 50px 12px;
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
  const [stand, setStand] = useState<SortStand>(SortStand.recent);

  useEffect(() => {
    refetch();
  }, [talkId]);

  return (
    <TalksContentsBlock>
      <SortButton setStand={setStand} />
      <ul>
        {isLoading || isRefetching ? (
          <>토론 방 불러오는 중...</>
        ) : (
          sortRooms(data!, stand).map(({ agenda, description, roomId, candidateTalkCounts, updatedAt }) => (
            <Agora
              key={roomId}
              roomId={roomId}
              agenda={agenda}
              description={description}
              talks={candidateTalkCounts}
              updatedAt={new Date(updatedAt)}
            />
          ))
        )}
      </ul>
    </TalksContentsBlock>
  );
};

export default TalksContents;

TalksContents.defaultProps = {
  talkId: '1',
};
