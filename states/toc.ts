import { atom } from 'recoil';

export interface ITocState {
  currentTopic: string;
  targetTopic: string;
}

export const tocState = atom<ITocState>({
  key: 'tocState',
  default: {
    currentTopic: '',
    targetTopic: '',
  },
});
