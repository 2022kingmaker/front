export interface Keyword {
  keywordId: number;
  name: string;
  categoryId: number;
}
export interface Candidate {
  candidateId: number;
  name: string;
  party: {
    partyId: number;
    name: string;
    colorCode?: string;
  };
}
export interface IPhrase {
  policyId: number;
  candidate: Candidate;
  phrase: string;
  categoryId: number;
}

export interface KeywordDetail extends Keyword {
  phrases: IPhrase[];
}

export type Keywords = Keyword[];
export type Phrases = IPhrase[];
export type KeywordDetails = KeywordDetail[];
