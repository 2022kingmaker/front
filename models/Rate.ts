import { Candidate } from '@models/Keyword';

export interface IRate {
  researchId: number;
  startedAt: string;
  finishedAt: string;
  agency: string;
  requester: string;
  researchUrl: string;
  statistic: [
    {
      candidate: Candidate;
      rating: number;
    },
  ];
}
