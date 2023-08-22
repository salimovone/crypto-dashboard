import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table/tableReducer";
import activitiesSlice from "./activities/activesReducer";
import walletSlice from "./wallet/walletReducer";
import appSlice from "./app/appSlice";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    active: activitiesSlice,
    wallet: walletSlice,
    app: appSlice
  },
});
