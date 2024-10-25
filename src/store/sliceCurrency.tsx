import { quotes } from "@constants/Constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CurrencyData {
  [key: string]: {
    code: string;
    value: number;
  };
}

const initialState = {
  quotes: {} as CurrencyData,
  loading: false,
  error: null as string | null,
  lastUpdated: null as string | null,
};

export const fetchCurrencyData = createAsyncThunk<CurrencyData, void>(
  "currency/fetchCurrencyDate",
  async () => {
    const response = axios.get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_QY0WxgyabWNAFU0sY6ccza1SBk7B5yC8tmTPW53u",
    );
    return (await response).data.data;
  },
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrencyData.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
        state.lastUpdated = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      })
      .addCase(fetchCurrencyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default currencySlice.reducer;
