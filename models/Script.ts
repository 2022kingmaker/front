export interface DebateDetail {
  debateId: number;
  date: string;
  totalTime: number;
  title: string;
  description: string;
  agency: string;
  script: Script[];
}

export interface Script {
  category: string;
  contents: Content[];
}

export interface Content {
  keyword: string;
  contents: Content2[];
}

export interface Content2 {
  candidateId: number;
  name: string;
  colorCode: string;
  script: string;
}
