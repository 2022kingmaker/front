import { useInfiniteQuery, useMutation } from 'react-query';
import { getTalks, postMessage, PostMessage, reportMessage } from '../apis/agora';
import { TUseInfiniteQuery, TUseMutation } from './common/types';
import { ITalkList } from '@models/Agora';

export const useFetchInfiniteTalks: TUseInfiniteQuery<ITalkList> = ({ agoraId }, options) =>
  useInfiniteQuery(['getTalks', agoraId], ({ pageParam }) => getTalks({ roomId: +agoraId, cur: pageParam }), options);

export const useFetchPostTalk: TUseMutation<PostMessage> = options =>
  useMutation(
    ['postMessage'],
    ({ roomId, text, candidateId }: PostMessage) => postMessage({ roomId, text, candidateId }),
    options,
  );

export const useFetchReport: TUseMutation<any> = options =>
  useMutation(['reportMessage'], (talkId: number) => reportMessage(talkId), options);
