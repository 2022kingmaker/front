import { IPhrase } from '@models/Keyword';

export interface Room {
  roomId: number;
  agenda: string;
  description: string;
  candidateTalkCounts: CandidateTalkCount[];
  updatedAt: Date;
}

export interface CandidateTalkCount {
  candidateId: number;
  colorCode: string;
  count: number;
}

export interface ITalkList {
  hasNext: boolean;
  lastIndex: number;
  talks: ITalk[];
}

export interface ITalk {
  talkId: number;
  text: string;
  writer?: string;
  createdAt: Date;
  candidateId?: number;
  colorCode?: string;
  reported: boolean;
}

export interface IRoomDetail {
  roomId: number;
  agenda: string;
  description: string;
  link: {
    phrases: IPhrase[];
  };
}
