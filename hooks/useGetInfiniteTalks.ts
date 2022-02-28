import { useInfiniteQuery } from 'react-query';
import { ITalkList } from '@models/Agora';
import { getTalks } from '../apis/agora';

const useGetInfiniteTalks = (agoraId: number) => {
  const query = useInfiniteQuery<ITalkList>(
    ['getTalks', agoraId],
    ({ pageParam }) => getTalks({ roomId: +agoraId, cur: pageParam }),
    {
      getNextPageParam: lastPage => {
        return lastPage.hasNext ? lastPage.lastIndex : null;
      },
    },
  );
  return {
    pages: query.data?.pages,
    isLoading: query.isLoading,
    fetchNextPage: query.fetchNextPage,
    lastIndex: query.data?.pageParams,
  };
};

export default useGetInfiniteTalks;
