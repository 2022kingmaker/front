export const getCategories = async () => {
  const response = await fetch('http://118.67.128.85:8083/category');
  return await response.json();
};
