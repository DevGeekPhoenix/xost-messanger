import { useAppSelector } from "libs/store/selectors";
import { useMemo } from "react";

// export const useWebSocketSelector = () => {
//   const webSocketState = useAppSelector((state) => state.app.webSocketState)
//   return useMemo(() => webSocketState, [webSocketState])
// }

export const useDarkSelector = () => {
  const isDarkState = useAppSelector((state) => state.app.isDark);
  // return useMemo(() => isDarkState, [isDarkState])
  return isDarkState;
};
export const useLanguageSelector = () => {
  const language = useAppSelector((state) => state.app.language);
  // return useMemo(() => language, [language])
  return language;
};
