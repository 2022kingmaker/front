import { API } from './index';

export const getCategories = async () => {
  const response = await fetch(`${API}/category`);
  return await response.json();
};
