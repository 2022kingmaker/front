import { API } from './index';

export const getPolicies = async (categoryId: number) => {
  const response = await fetch(`${API}/policy?categoryId=${categoryId}`);
  return await response.json();
};
