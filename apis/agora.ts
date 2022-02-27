import { getURL } from '@lib/utils';
import axios from 'axios';

export const getAgoraCategories = async () => {
  const response = await fetch(`${getURL()}/agora/category`);
  return await response.json();
};

export const getRooms = async (categoryId: number) => {
  const response = await fetch(`${getURL()}/agora/room?categoryId=${categoryId}`);
  return await response.json();
};

export const getRoomDetail = async (roomId: number) => {
  const response = await fetch(`${getURL()}/agora/roomDetail/${roomId}`);
  return await response.json();
};

interface getTalksProps {
  cur?: number;
  size?: number;
  roomId: number;
}
export const getTalks = async ({ cur = -1, size = 10, roomId }: getTalksProps) => {
  const response = await fetch(`${getURL()}/agora/talks?roomId=${roomId}&cur=${cur}&size=${size}`);
  return await response.json();
};

export const postMessage = async (roomId: number, message: string) => {
  const response = await axios.post(
    `${getURL()}/agora/talk/${roomId}`,
    { text: message },
    {
      withCredentials: true,
      headers: {
        cookie: 'a',
      },
    },
  );
  return await response.data;
};

export const reportMessage = async (talkId: number) => {
  const response = await axios.post(
    `${getURL()}/agora/report`,
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
