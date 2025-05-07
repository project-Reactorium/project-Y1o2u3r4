import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockTransactions } from '../../data/mockTransactions';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async ({ month, year }) => {
    const filtered = mockTransactions.filter((tx) => {
      const txDate = new Date(tx.date);
      return (
        txDate.getMonth() + 1 === month && txDate.getFullYear() === year
      );
    });

    return filtered;
  }
);
