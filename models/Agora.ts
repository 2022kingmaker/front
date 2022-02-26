export interface Talk {
  talkId: number;
  text: string;
  writer: string;
  createdAt: Date;
  candidateId: number;
  colorCode: string;
  imgUrl: string;
}

export interface Room {
  roomId: number;
  agenda: string;
  description: string;
  candidateTalkCounts: CandidateTalkCount[];
}

export interface CandidateTalkCount {
  candidateId: number;
  colorCode: string;
  count: number;
}
