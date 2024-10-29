import { configureStore } from "@reduxjs/toolkit";

import { currencyApi } from "./currencyApi";
import { modalSlice } from "./modalSlice";

const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
