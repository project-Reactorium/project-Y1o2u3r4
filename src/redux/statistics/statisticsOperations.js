import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async ({ month, year }) => {
    const response = await axios.get(`/api/statistics?month=${month}&year=${year}`);

    return response.data;
  }
);
