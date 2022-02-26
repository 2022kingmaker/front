export const getAgoraCategories = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/agora/category`);
  return await response.json();
};
