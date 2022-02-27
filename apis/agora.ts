import { getURL } from '@lib/utils';
import axios from 'axios';

export const getAgoraCategories = async () => {
  const response = await fetch(`http://118.67.128.85:8083/agora/category`);
  return await response.json();
};

export const getRooms = async (categoryId: number) => {
  const response = await fetch(`http://118.67.128.85:8083/agora/room?categoryId=${categoryId}`);
  return await response.json();
};

export const getRoomDetail = async (roomId: number) => {
  const response = await fetch(`http://118.67.128.85:8083/agora/roomDetail/${roomId}`);
  return await response.json();
};

interface getTalksProps {
  cur?: number;
  size?: number;
  roomId: number;
}
export const getTalks = async ({ cur = -1, size = 10, roomId }: getTalksProps) => {
  const response = await fetch(`http://118.67.128.85:8083/agora/talks?roomId=${roomId}&cur=${cur}&size=${size}`);
  return await response.json();
};

export interface PostMessage {
  roomId: number;
  text: string;
  candidateId: number;
}

export const postMessage = async ({ roomId, text, candidateId }: PostMessage) => {
  const response = await axios.post(`http://118.67.128.85:8083/agora/talk/${roomId}`, { text, candidateId });
  return await response.data;
};

export const reportMessage = async (talkId: number) => {
  const response = await axios.post(
    `http://118.67.128.85:8083/agora/report`,
    { talkId },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return await response.data;
};
