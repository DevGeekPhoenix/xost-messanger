import type { ReactNode } from "react";
// import { HubConnection, HubConnectionState } from "@microsoft/signalr";

import { ILanguages } from "consts/index.d";

import type { LanguageItem } from "types";

export interface AppProviderProps {
  children: ReactNode;
}

export type AppReducerInitialStateType = {
  // webSocketState: {
  //   status: keyof typeof HubConnectionState
  //   connectionBulider: HubConnection | null
  // }
  isDark: boolean;
  language: LanguageItem;
};



export type SocketStatus = "connected" | "disconnected" | "connecting";

