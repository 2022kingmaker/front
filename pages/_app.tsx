import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
