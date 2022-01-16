export interface policy {
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
  text: string;
  keywordId: number;
}

export type policies = policy[];
