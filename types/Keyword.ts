export interface keyword {
  keywordId: number;
  name: string;
  categoryId: number;
}
export interface phrase {
  policyId: number;
  candidate: {
    candidateId: number;
    name: string;
    party: {
      partyId: number;
      name: string;
      colorCode?: string;
    };
  };
  phrase: string;
}

export interface keywordDetail extends keyword {
  phrases: phrase[];
}

export type keywords = keyword[];
export type phrases = phrase[];
