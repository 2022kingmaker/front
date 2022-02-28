import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="대선마당 | 대한민국 20대 대선 정책 공약 비교" />
          <meta property="og:description" content="페이지 설명" />
          <meta property="og:image" content="https://dsmd.kr/images/ogimage.png" />
          <meta property="og:url" content="https://dsmd.kr" />
          <meta
            name={'subject'}
            content={'20대 대선 현명한 선택의 길잡이! 후보들의 정책을 손쉽게 비교하고 여러 사람들과 의견을 나눠보세요!'}
          />
          <meta
            name={'description'}
            content={
              '대선마당 | 대한민국 20대 대선 현명한 선택의 길잡이! 후보들의 정책과 공약을 손쉽게 비교하고 여러 사람들과 의견을 나눠보세요! 이번 대선 각 후보를 꼼꼼히 비교하고 살펴보고 싶어도 복잡하고 장황한 공약에 엄두가 나지 않죠. 모바일 최적화된 친근한 화면 구성으로 편리하고 핵심적으로 후보들의 공약을 정리하였습니다! 소중한 한표, 더 귀중하게 사용하실 수 있도록 도와드립니다'
            }
          />
          <meta
            name={'keyword'}
            content={
              'keywords : 대선, 20대 대선, 후보, 대선 후보, 대통령 선거, 선거, 대통령, 국민의힘, 더불어민주당, 국민의당, 정의당, 정책, 정책 비교, 공약, 10대 공약, 대선 정책, 대선 공약, 후보별 공약, 후보별 정책, 공약 비교, 대선 토론, 이재명, 윤석열, 안철수, 심상정'
            }
          />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
