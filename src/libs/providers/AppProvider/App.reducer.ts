import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { globalAppApi } from "libs/providers/AppProvider/App.services";
import type { AppReducerInitialStateType } from "./index.d";
import type { LanguageItem } from "types";
import { defaultlanguage } from "constants/constants";

const initialState: AppReducerInitialStateType = {
  // webSocketState: {
  //   status: 'Disconnected',
  //   connectionBulider: null,
  // },
  isDark: false,
  language: defaultlanguage,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // setWebSocketConnectionStatus: (state, action: PayloadAction<keyof typeof HubConnectionState>) => {
    //   state.webSocketState.status = action.payload
    // },
    // setWebSocketConnectionBulider: (state, action: PayloadAction<HubConnection>) => {
    //   state.webSocketState.connectionBulider = action.payload
    // },
    setIsDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageItem>) => {
      state.language = action.payload;
    },
    updateClientConfig(
      state,
      action: PayloadAction<Partial<AppReducerInitialStateType>>
    ) {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setIsDark, setLanguage, updateClientConfig } = slice.actions;
export default slice.reducer;
