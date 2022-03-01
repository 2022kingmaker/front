import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as ga from 'lib/ga/index';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
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
        <title>공약비교 | 대선마당</title>
        <meta
          name={'description'}
          content={
            '대선마당 | 대한민국 20대 대선 현명한 선택의 길잡이! 후보들의 정책과 공약을 손쉽게 비교하고 여러 사람들과 의견을 나눠보세요! 이번 대선 각 후보를 꼼꼼히 비교하고 살펴보고 싶어도 복잡하고 장황한 공약에 엄두가 나지 않죠. 모바일 최적화된 친근한 화면 구성으로 편리하고 핵심적으로 후보들의 공약을 정리하였습니다! 소중한 한표, 더 귀중하게 사용하실 수 있도록 도와드립니다'
          }
        />
        <link rel="shortcut icon" href="https://dsmd.kr/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="https://dsmd.kr/images/favicon.png" type="image/x-icon" />
      </Head>
      <Script strategy={'afterInteractive'} src="https://www.googletagmanager.com/gtag/js?id=G-VDT6ENG204" />
      <Script
        id="gtag-script"
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VDT6ENG204', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
