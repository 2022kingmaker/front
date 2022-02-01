export interface Keyword {
  keywordId: number;
  name: string;
  categoryId: number;
}
export interface Phrase {
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

export interface KeywordDetail extends Keyword {
  phrases: Phrase[];
}

export type Keywords = Keyword[];
export type Phrases = Phrase[];
export type KeywordDetails = KeywordDetail[];
