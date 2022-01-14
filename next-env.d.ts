/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import type { NextPage } from 'next';

declare module 'next' {
  type NextPage = NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}
