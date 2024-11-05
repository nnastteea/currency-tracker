// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// import { USDState } from "./interfaces";

// const initialState: USDState = {
//   usdRate: null,
//   loading: false,
//   error: null,
// };

// const apiKey = process.env.REACT_APP_API_KEY_FOR_CHART;
// export const fetchDataUSD = createAsyncThunk(
//   "currencyUSD/fetchDataUSD",
//   async () => {
//     const url = "https://rest.coinapi.io/v1/exchangerate/USD/last";
//     const response = await axios.get(url, {
//       headers: {
//         Accept: "application/json",
//         "X-CoinAPI-Key": apiKey,
//       },
//     });
//     return response.data.rate;
//   },
// );

// export const usdSlice = createSlice({
//   name: "currencyUSD",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDataUSD.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDataUSD.fulfilled, (state, action) => {
//         state.loading = false;
//         state.usdRate = action.payload;
//       })
//       .addCase(fetchDataUSD.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Error fetching data";
//       });
//   },
// });
