import { API } from './index';

export const getKeywords = async (categoryId: number) => {
  const response = await fetch(`${API}/keyword?categoryId=${categoryId}`);
  return await response.json();
};
export const getKeywordDetails = async () => {
  const response = await fetch(`${API}/keywordDetail`);
  return await response.json();
};
