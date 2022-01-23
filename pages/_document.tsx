import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <meta name={'description'} content={'대한민국 20대 대선 후보들의 공약 비교 사이트'} />
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
