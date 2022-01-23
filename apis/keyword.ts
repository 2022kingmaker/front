export const getKeywords = async (categoryId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/keyword?categoryId=${categoryId}`);
  return await response.json();
};
export const getKeywordDetails = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/keywordDetail`);
  return await response.json();
};
