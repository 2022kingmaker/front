import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from 'lib/ga/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>대선 마당</title>
      </Head>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
