export const getKeywords = async (categoryId: number) => {
  const response = await fetch(`http://118.67.128.85:8083/keyword?categoryId=${categoryId}`);
  return await response.json();
};
export const getKeywordDetails = async () => {
  const response = await fetch('http://118.67.128.85:8083/keywordDetail');
  return await response.json();
};
