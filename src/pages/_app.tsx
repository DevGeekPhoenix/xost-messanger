import {
  clientCookieConfig,
  clientCookieOption,
  ClientCookiesName,
  defaultlanguage,
} from "constants/constants";
import MyApp, { AppContext, AppProps } from "next/app";
import dynamic from "next/dynamic";
import { getCookie, setCookie } from "cookies-next";
import { CientCookieConfigType, ClientAppTheme } from "constants/index.d";
import { LanguagesValue } from "types";
import createEmotionCache from "theme/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { Suspense } from "react";

const DefaultLayout = dynamic(() => import("layouts/DefaultLayout"), {
  suspense: true,
});
const LanguageProvider = dynamic(
  () => import("libs/providers/LanguegeProvider"),
  { suspense: true }
);
const ThemeProvider = dynamic(() => import("libs/providers/ThemeProvider"), {
  suspense: true,
});
const ClientConfigProvider = dynamic(
  () => import("libs/providers/ClientConfigProvider"),
  { suspense: true }
);
const StateManagerProvider = dynamic(
  () => import("libs/providers/StateManagerProvider"),
  { suspense: true }
);
const AppProvider = dynamic(() => import("libs/providers/AppProvider"), {
  suspense: true,
});

interface JSONObject {
  [x: string]: string;
}

interface AppPageProps extends AppProps {
  clientConfig: CientCookieConfigType;
  intlMessages: JSONObject;
  emotionCache?: EmotionCache;
}

// create initial Emotion Cache
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  intlMessages,
  clientConfig,
  emotionCache = clientSideEmotionCache,
}: AppPageProps) {
  return (
    <Suspense fallback={<>Loading</>}>
      <StateManagerProvider>
        <ClientConfigProvider clientConfig={clientConfig} />
        <ThemeProvider emotionCache={emotionCache}>
          <LanguageProvider intlMessages={intlMessages}>
            <AppProvider>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </AppProvider>
          </LanguageProvider>
        </ThemeProvider>
      </StateManagerProvider>
    </Suspense>
  );
}

App.getInitialProps = async (appContext: AppContext): Promise<any> => {
  const appProps = await MyApp.getInitialProps(appContext);

  const { req, res } = appContext.ctx;

  const getCookieOptions = { req, res };
  const setCookieOptions = { req, res, ...clientCookieOption };

  const theme = getCookie(
    ClientCookiesName.theme,
    getCookieOptions
  ) as ClientAppTheme;
  const language = getCookie(
    ClientCookiesName.language,
    getCookieOptions
  ) as LanguagesValue;

  if (!theme) {
    setCookie(
      ClientCookiesName.theme,
      clientCookieConfig.theme,
      setCookieOptions
    );
  }

  if (!language || appContext.router.locale != language) {
    setCookie(
      ClientCookiesName.language,
      appContext.router.locale,
      setCookieOptions
    );
  }

  // Load and dynamic import language JSON file based on router
  let intlMessages = null;
  switch (appContext.router.locale) {
    case "fa":
      intlMessages = (await import("@public/static/locales/fa.json")).default;
      break;
    case "en":
      intlMessages = (await import("@public/static/locales/en.json")).default;
      break;
    case "default":
      intlMessages = (await import("@public/static/locales/fa.json")).default;
      break;
    default:
      intlMessages = (await import("@public/static/locales/fa.json")).default;
      break;
  }

  const finalLanguage = language || defaultlanguage.languageCode;

  const clientConfig: CientCookieConfigType = {
    theme: theme || clientCookieConfig.theme,
    language: finalLanguage,
    accessToken: "",
  };

  return { ...appProps, clientConfig, intlMessages };
};
