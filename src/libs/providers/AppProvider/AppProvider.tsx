import type { FC } from "react";
// import { useGetUserQuery } from './App.services'
import type { AppProviderProps } from "./index.d";
// import useAuthentication from 'libs/hooks/useAuthentication'

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  // useAuthentication(useGetUserQuery, {})

  return <div>{children}</div>;
};
export default AppProvider;
