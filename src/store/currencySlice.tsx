import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const COIN_API_URL = "https://rest.coinapi.io/v1/";
const COIN_API_KEY = process.env.REACT_APP_API_KEY_FOR_CHART;

export interface CurrencyRate {
  time_period_start: string;
  time_period_end: string;
  rate_open: number;
  rate_close: number;
  rate_high: number;
  rate_low: number;
}

export interface CurrencyHistoryParams {
  currencyCode: string;
  dayCount: number;
}

export interface CurrencyState {
  history: CurrencyRate[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CurrencyState = {
  history: [],
  status: "idle",
  error: null,
};

export const fetchCurrencyHistory = createAsyncThunk<
  CurrencyRate[],
  CurrencyHistoryParams
>("currency/fetchCurrencyHistory", async ({ currencyCode, dayCount }) => {
  const startDate = getDaysAgo(dayCount);
  const endDate = getToday();

  console.log("Fetching data from:", startDate, "to:", endDate);

  const response = await axios.get(
    `${COIN_API_URL}exchangerate/USD/${currencyCode}/history`,
    {
      params: {
        period_id: "1DAY",
        time_start: startDate,
        time_end: endDate,
      },
      headers: {
        "X-CoinAPI-Key": COIN_API_KEY,
        Accept: "application/json",
      },
    },
  );

  console.log("API Response:", response.data);
  return response.data;
});

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyHistory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchCurrencyHistory.fulfilled,
        (state, action: PayloadAction<CurrencyRate[]>) => {
          state.status = "succeeded";
          state.history = action.payload;
          console.log("Updated Currency History:", action.payload);
        },
      )
      .addCase(fetchCurrencyHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default currencySlice.reducer;

function getDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}
