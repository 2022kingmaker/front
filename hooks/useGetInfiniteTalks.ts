import { useInfiniteQuery } from 'react-query';
import { ITalkList } from '@models/Agora';
import { getTalks } from '../apis/agora';

const useGetInfiniteTalks = (agoraId: number) => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery<ITalkList>(
    ['getTalks', agoraId],
    ({ pageParam }) => getTalks({ roomId: +agoraId, cur: pageParam }),
    {
      getNextPageParam: lastPage => {
        return lastPage.hasNext ? lastPage.lastIndex : null;
      },
    },
  );
  return {
    pages: data?.pages,
    isLoading: isLoading,
    lastIndex: data?.pageParams,
    fetchNextPage,
  };
};

export default useGetInfiniteTalks;
