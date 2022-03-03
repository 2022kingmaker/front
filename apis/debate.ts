import { Debate } from '@models/Debate';

export const getDebateList = async () => {
  const response = await fetch(`https://dsmd.kr:8093/debate/list`);
  return (await response.json()) as Debate[];
};

export const getScript = async (debateId: number) => {
  const response = await fetch(`https://dsmd.kr:8093/debate/script/${debateId}`);
  return (await response.json()) as Debate[];
};
