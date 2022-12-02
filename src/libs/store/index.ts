import {
  Action,
  configureStore,
  ThunkAction,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
// import { globalAppApi } from 'libs/providers/AppProvider/App.services'
import appReducer, {
  // setWebSocketConnectionStatus,
  setIsDark,
  setLanguage,
  updateClientConfig,
} from "libs/providers/AppProvider/App.reducer";

// const listenerMiddleware = createListenerMiddleware()

// listenerMiddleware.startListening({
//   matcher: isAnyOf(
//     setTableData,
//     setTableDataUpdate,
//     setWebSocketConnectionStatus,
//     setIsDark,
//     setLanguage,
//     setSelectedCurrency,
//     setTimeZone,
//     updateClientConfig,
//     setPriceData,
//     setPriceUpdate,
//   ),
//   effect: async (action, listenerApi) => {
//     listenerApi.dispatch(setPageUpdateTime(new Date()))
//     listenerApi.cancelActiveListeners()
//   },
// })

export const store = configureStore({
  reducer: {
    // [globalAppApi.reducerPath]: globalAppApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat
      // listenerMiddleware.middleware,
      // globalAppApi.middleware,
      (),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
