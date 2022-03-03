import { Debate } from '@models/Debate';

export const getDebateList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/debate/list`);
  return (await response.json()) as Debate[];
};

export const getScript = async (debateId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/debate/script/${debateId}`);
  return (await response.json()) as Debate[];
};
