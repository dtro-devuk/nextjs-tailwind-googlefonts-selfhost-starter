import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="favicon.ico" rel="shortcut icon" />
          {/* <link
            rel="preload"
            href="/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/google/grandstander/Grandstander-Italic-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/google/merriweather-sans/merriweather-sans-v13-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/google/merriweather-sans/merriweather-sans-v13-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        </Head>
        <body
          className="bg-gray-100 text-black gradient
                      dark:bg-gray-900 dark:text-white"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default AppDocument;
