import { getURL } from '@lib/utils';

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
