import { Candidate } from '@models/Keyword';

export interface Rate {
  researchId: number;
  startedAt: string;
  finishedAt: string;
  agency: string;
  requester: string;
  researchUrl: string;
  statistic: Candidate;
}
// {
//     "researchId": 4,
//     "startedAt": "2022-02-01",
//     "finishedAt": "2022-02-03",
//     "agency": "한국갤럽조사연구소",
//     "requester": "자체조사",
//     "researchUrl": "http://www.naver.com",
//     "statistic": [
//     {
//         "candidate": {
//             "candidateId": 1,
//             "name": "이재명",
//             "party": {
//                 "partyId": 1,
//                 "name": "더불어민주당",
//                 "colorCode": "#004EA2"
//             }
//         },
//         "rating": 40
//     }
//     ]
