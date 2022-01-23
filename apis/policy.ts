export const getPolicies = async (categoryId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/policy?categoryId=${categoryId}`);
  return await response.json();
};
