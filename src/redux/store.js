import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table/tableReducer";
import activitiesSlice from "./activities/activesReducer";
import walletSlice from "./wallet/walletReducer";
import employeeSlice from "./employeeList/employeeReducer";
import taxesSlice from "./taxesList/taxesReducers";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    active: activitiesSlice,
    wallet: walletSlice,
    employeeList: employeeSlice,
    taxe: taxesSlice,
  },
});
