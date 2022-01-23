import { API } from './index';

export const getCategories = async () => {
  console.log(API);
  const response = await fetch(`${API}/category`);
  return await response.json();
};
