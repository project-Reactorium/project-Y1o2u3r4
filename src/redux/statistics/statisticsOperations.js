import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockTransactions } from '../../data/mockTransactions';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async ({ month, year }) => {
   
    return mockTransactions.filter((t) => {
      const date = new Date(t.date);
      return date.getMonth() + 1 === month && date.getFullYear() === year;
    });
  }
);
