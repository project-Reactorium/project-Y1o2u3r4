import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, setTransactions } from "./transactionSlice";

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    totalBalance: 0,
  },
  reducers: {
    setBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction, (state, action) => {
        state.totalBalance += action.payload.amount;
      })
      .addCase(deleteTransaction, (state, action) => {
        state.totalBalance -= action.payload.amount;
      })
      .addCase(setTransactions, (state, action) => {
     
        const total = action.payload.reduce((sum, item) => sum + item.amount, 0);
        state.totalBalance = total;
      });
  },
});

export const { setBalance } = financeSlice.actions;
export default financeSlice.reducer;
