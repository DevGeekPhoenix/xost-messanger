// import { isRejectedWithValue, isRejected, isFulfilled } from "@reduxjs/toolkit";
// import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// /**
//  * Log a warning and show a toast!
//  */
//  export const RtkQueryErrorLoggerMiddleWare: Middleware =
//  (api: MiddlewareAPI) => (next) => (action) => {
//    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
//    if (isRejectedWithValue(action)) {
//      toast.error(action?.payload?.message)
//    }
//    return next(action)
//  }
export {};
