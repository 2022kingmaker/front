import { useQuery } from 'react-query';
import { getRoomDetail } from '../apis/agora';
import { TUseQuery } from './common/types';
import { IRoomDetail } from '@models/Agora';

export const useFetchRoomDetail: TUseQuery<IRoomDetail> = ({ agoraId }, options) =>
  useQuery(['getRoomDetail', agoraId], () => getRoomDetail(+agoraId), options);
