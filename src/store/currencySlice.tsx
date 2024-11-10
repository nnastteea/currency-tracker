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
  { currencyData: CurrencyRate[]; startDate: string; endDate: string },
  CurrencyHistoryParams
>("currency/fetchCurrencyHistory", async ({ currencyCode, dayCount }) => {
  const startDate = getDaysAgo(dayCount);
  const endDate = getToday();

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

  const currencyData = response.data;

  // Получаем реальные даты из данных
  const actualStartDate = currencyData[0]?.time_period_start || startDate;
  const actualEndDate =
    currencyData[currencyData.length - 1]?.time_period_end || endDate;

  return { currencyData, startDate: actualStartDate, endDate: actualEndDate };
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
        (
          state,
          action: PayloadAction<{
            currencyData: CurrencyRate[];
            startDate: string;
            endDate: string;
          }>,
        ) => {
          state.status = "succeeded";
          state.history = action.payload.currencyData;
          console.log("Updated Currency History:", action.payload.currencyData);
        },
      )
      .addCase(fetchCurrencyHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

function getDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export default currencySlice.reducer;
