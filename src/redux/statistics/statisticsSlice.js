import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './statisticsOperations';

const initialState = {
  statistics: [],
  month: 1,
  year: 2023,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.statistics = action.payload;
    });
  },
});

export const { setMonth, setYear } = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;
