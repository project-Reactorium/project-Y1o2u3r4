import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
  },
  reducers: {
    setTransactions: (state, action) => {
      state.items = action.payload;
    },
    addTransaction: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setTransactions, addTransaction, deleteTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
