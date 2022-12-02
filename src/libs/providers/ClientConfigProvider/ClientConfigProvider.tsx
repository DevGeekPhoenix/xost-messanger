import { FC } from "react";
// import { useAppDispatch } from 'libs/store/selectors'
// import { updateClientConfig } from 'libs/providers/AppProvider/App.reducer'
import type { ClientConfigProviderProps } from "./index.d";
import { languages } from "constants/constants";
import { useAppDispatch } from "libs/store/selectors";
import { updateClientConfig } from "../AppProvider/App.reducer";

// Set store client config from cookies
const ClientConfigProvider: FC<ClientConfigProviderProps> = ({
  clientConfig,
}) => {
  const dispatch = useAppDispatch();

  // theme
  const isDark = Boolean(clientConfig.theme === "dark");

  // language
  // @ts-ignore
  const currentLanguage = languages[clientConfig.language];

  // currency
  const currency = clientConfig.currency;

  // timeZone
  const timeZone = clientConfig.timeZone;

  const config = {
    isDark,
    language: currentLanguage,
    selectedCurrency: currency,
    timeZone,
  };

  // dipatch to update store
  dispatch(updateClientConfig(config));

  return <></>;
};

export default ClientConfigProvider;
