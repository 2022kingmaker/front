export const getCategories = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/category`);
  return await response.json();
};
