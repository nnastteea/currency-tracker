import { configureStore } from "@reduxjs/toolkit";

import { currencyApi } from "./currencyApi";
import { currencySlice } from "./currencySlice";
import { modalSlice } from "./modalSlice";

const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [modalSlice.name]: modalSlice.reducer,
    [currencySlice.name]: currencySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
