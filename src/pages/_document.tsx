import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import createEmotionCache from "theme/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

const MyDocument = ({
  emotionStyleTags,
  locale,
}: {
  emotionStyleTags: JSX.Element[];
  locale: string | undefined;
}) => {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/icons/favIcon2.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/icons/favIcon2.svg"
        />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1875FF" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YZDJP1LCD0"
        ></script>
        <script
          async
          src="/static/googleTagManagement/googleTagManager.js"
        ></script>
      </Head>
      <body
        dir={locale === "fa" || locale === "default" ? "rtl" : "ltr"}
        lang={locale === "default" ? "fa" : locale}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    locale: ctx.locale,
  };
};

export default MyDocument;
