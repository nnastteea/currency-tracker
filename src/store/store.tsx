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

export type RootState = ReturnType<typeof store.getState>; // тип всего состояния хранилища
export type AppDispatch = typeof store.dispatch; // тип dispatch функции
export default store;
