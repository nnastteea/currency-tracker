import { configureStore } from "@reduxjs/toolkit";

import { currencyApi } from "./currencyApi";
import currencyReducer from "./currencySlice";
import locationReducer from "./locationSlice";
import { modalSlice } from "./modalSlice";

const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [modalSlice.name]: modalSlice.reducer,
    currency: currencyReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
