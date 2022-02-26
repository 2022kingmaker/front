import { getURL } from '@lib/utils';

export const getAgoraCategories = async () => {
  const response = await fetch(`${getURL()}/agora/category`);
  return await response.json();
};

export const getRooms = async (categoryId: number) => {
  const response = await fetch(`${getURL()}/agora/room?categoryId=${categoryId}`);
  return await response.json();
};
