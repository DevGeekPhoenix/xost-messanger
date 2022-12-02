import { FC } from "react";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  useDarkSelector,
  useLanguageSelector,
} from "libs/providers/AppProvider/App.selectors";
import { darkTheme, lightTheme } from "theme";
import type { ThemeProviderProps } from "./index.d";

const ThemeProvider: FC<ThemeProviderProps> = ({ children, emotionCache }) => {
  const isDark = useDarkSelector();
  const { direction } = useLanguageSelector();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <CacheProvider value={emotionCache as EmotionCache}>
      <MuiThemeProvider theme={Object.assign(theme, { direction })}>
        <CssBaseline />
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
