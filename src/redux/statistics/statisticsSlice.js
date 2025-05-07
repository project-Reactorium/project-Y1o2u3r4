import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './statisticsOperations';

const initialState = {
  statistics: [],
  month: 5,
  year: 2025,
  selectedCategory: "", // Kategori filtresi
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setMonth(state, action) {
      state.month = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.statistics = action.payload;
    });
  },
});

export const { setMonth, setYear, setSelectedCategory } = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;
