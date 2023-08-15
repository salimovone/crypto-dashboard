import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: [
    {
      id: 1,
      balance: "$4626595",
      validTHRU: "08/21",
      holder: "Daniel radcliff",
      bgColor:
        "linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.05) 97.35%,rgba(255,255,255,0) 160.66%),#234CE3",
    },
    {
      id: 2,
      balance: "$4626595",
      validTHRU: "08/21",
      holder: "Daniel radcliff",
      bgColor:
        "linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.05) 97.35%,rgba(255,255,255,0) 160.66%),#AB18FF",
    },
  ],
};
export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    deleteWallet: (state, action) => {
      state.wallets = state.wallets.filter(
        (user) => user.id !== action.payload
      );
    },

    updateWallet: (state, action) => {
      let index = state.wallets.findIndex((i) => i.id === action.payload.id);
      const newValue = state.wallets;
      newValue[index] = action.payload;

      state.wallets = newValue;
    },

    addWallet: (state, action) => {
      state.wallets = [state.wallets, action.payload];
    },
  },
});
export const { deleteWallet, updateWallet, addWallet } = walletSlice.actions;
export default walletSlice.reducer;
