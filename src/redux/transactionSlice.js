import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      id: "1",
      date: "2025-05-01",
      type: "expense",
      category: "Market",
      comment: "Sebze meyve",
      amount: -120.5,
    },
    {
      id: "2",
      date: "2025-05-03",
      type: "income",
      category: "Maaş",
      comment: "Nisan maaşı",
      amount: 8000,
    },
  ],
};
const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.items.push(action.payload);
    },
    deleteTransaction(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
