import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBalance } from "./financeSlice";
import { setTransactions } from "./transactionSlice";
import { selectToken } from "./auth/selectors"; // token'ı almak için

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = selectToken(state);

    if (!token) {
      return thunkAPI.rejectWithValue("Token bulunamadı");
    }

    try {
      const response = await axios.get("https://wallet.b.goit.study/api/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const transactions = response.data;

      const total = transactions.reduce((sum, item) => sum + item.amount, 0);
      thunkAPI.dispatch(setBalance(total));
      thunkAPI.dispatch(setTransactions(transactions));

      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
