export const getDebateList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/debate/list`);
  return await response.json();
};
