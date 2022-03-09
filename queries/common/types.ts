import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
} from 'react-query/types/react/types';
import { FetchError } from 'node-fetch';
import { UseQueryResult } from 'react-query';

export interface Params {
  [propsName: string]: string | number;
}

export type TUseQuery<T> = (
  params: Params,
  options?: UseQueryOptions<T, FetchError, T, any[]>,
) => UseQueryResult<T, FetchError>;

export type TUseInfiniteQuery<T> = (
  params: Params,
  options?: UseInfiniteQueryOptions<T, FetchError, T, T, any[]>,
) => UseInfiniteQueryResult<T, FetchError>;

export type TUseMutation<T, G> = (
  options?: UseMutationOptions<T, FetchError, G, G>,
) => UseMutationResult<T, FetchError, G, G>;
