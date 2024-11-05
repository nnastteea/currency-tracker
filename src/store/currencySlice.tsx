import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { CurrencyDataItem, CurrencyState } from "./interfaces";

const initialState: CurrencyState = {
  data: [],
  loading: false,
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY_FOR_CHART;
console.log("API Key:", apiKey);

export const fetchCurrencyData = createAsyncThunk(
  "currency/fetchCurrencyData",
  async ({
    currency,
    startDate,
    endDate,
  }: {
    currency: string;
    startDate: string;
    endDate: string;
  }) => {
    if (!currency) {
      return [];
    }
    const url = `https://rest.coinapi.io/v1/exchangerate/${currency}/USD/history`;
    const response = await axios.get(url, {
      params: {
        period_id: "1DAY",
        time_start: `${startDate}T00:00:00`,
        time_end: `${endDate}T23:59:59`,
      },
      headers: {
        Accept: "application/json",
        "X-CoinAPI-Key": apiKey,
      },
    });
    console.log(response.data);
    return response.data.map((item: CurrencyDataItem) => ({
      time: item.time_period_start,
      rate: item.rate_close,
    }));
  },
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCurrencyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});
