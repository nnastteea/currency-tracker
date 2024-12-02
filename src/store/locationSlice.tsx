import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface LocationState {
  userCity: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: LocationState = {
  userCity: null,
  status: "idle",
};

export const fetchlocation = createAsyncThunk(
  "location/fetchLocation",
  async ({ longitude, latitude }: { longitude: number; latitude: number }) => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_API_KEY_FOR_MAP}`,
    );
    const data = response.data;
    const cityFeature = data.features.find((feature: any) =>
      feature.place_type.includes("place"),
    );

    return cityFeature ? cityFeature.text : null;
  },
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchlocation.fulfilled, (state, action) => {
        state.userCity = action.payload;
        console.log("Fetched city:", action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchlocation.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default locationSlice.reducer;
