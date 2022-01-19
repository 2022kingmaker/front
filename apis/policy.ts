export const getPolicies = async (categoryId: number) => {
  const response = await fetch(`http://118.67.128.85:8083/policy?categoryId=${categoryId}`);
  return await response.json();
};
