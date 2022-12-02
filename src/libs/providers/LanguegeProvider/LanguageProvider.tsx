import { FC, useCallback, useEffect } from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import type { LanguageProviderProps, IError } from "./index.d";
import { useRouter } from "next/router";
import { useLanguageSelector } from "../AppProvider/App.selectors";

const LanguageProvider: FC<LanguageProviderProps> = ({
  children,
  intlMessages,
}) => {
  const { locale, defaultLocale } = useRouter();
  const currentLanguage = useLanguageSelector();

  // update page direction and language based on client intractions
  useEffect(() => {
    // change direction
    document.body.dir = currentLanguage.direction;

    if (locale) {
      document.body.lang = locale;
    }
  }, [locale]);

  const handleError = useCallback((err: IError) => {
    if (process.env.NODE_ENV === "development") {
      if (err.code === ReactIntlErrorCode.MISSING_TRANSLATION) {
        console.warn({ message: err.message }, "[MISSING_TRANSLATION]");
      }
    }
  }, []);

  return (
    <>
      <IntlProvider
        locale={locale as string}
        messages={intlMessages}
        defaultLocale={defaultLocale}
        onError={handleError}
      >
        {children}
      </IntlProvider>
    </>
  );
};

export default LanguageProvider;
