import { atom } from 'recoil';
import { category } from '../types/Category';

export const categoriesState = atom<category[]>({
  key: 'categoriesState',
  default: [],
});
