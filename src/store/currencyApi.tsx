import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CurrencyData } from "./interface";

const apiKey = process.env.REACT_APP_CURRENCY_APP_KEY;

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.currencyapi.com/v3/" }),
  endpoints: (builder) => ({
    fetchCurrencyData: builder.query<CurrencyData, void>({
      query: () => `latest?apikey=${apiKey}`,
      transformResponse: (response: { data: CurrencyData }) => response.data,
    }),
  }),
});

export const { useFetchCurrencyDataQuery } = currencyApi;
