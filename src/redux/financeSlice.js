import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalBalance: 1250.75, // örnek bir bakiye şimdilik daha sonra beckendden veri gelecek.
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
  },
});
export const { setBalance } = financeSlice.actions;
export default financeSlice.reducer;
