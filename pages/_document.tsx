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
            name={'description'}
            content={'대선마당 | 대한민국 20대 대선 후보들의 공약을 간략하게 요약해서 제공하는 사이트입니다.'}
          />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDT6ENG204" />
          <script
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
