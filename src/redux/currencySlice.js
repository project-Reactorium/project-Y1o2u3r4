import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, thunkAPI) => {
    const now = Date.now();
    const savedData = JSON.parse(localStorage.getItem("currencyData"));

    if (savedData && now - savedData.timestamp < 3600000) {
      return savedData.data;
    }
    const res = await axios.get("https://api.monobank.ua/bank/currency");
    const data = res.data;
    localStorage.setItem(
      "currencyData",
      JSON.stringify({ data, timestamp: now })
    );
    return data;
  }
);
const currencySlice = createSlice({
  name: "currency",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export default currencySlice.reducer;
