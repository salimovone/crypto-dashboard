import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table/tableReducer";
import activitiesSlice from "./activities/activesReducer";
import walletSlice from "./wallet/walletReducer";
import appSlice from "./app/appSlice";
import employeeSlice from "./employeeList/employeeReducer";
import taxesSlice from "./taxesList/taxesReducers";
import leaveSlice from "./leaveList/leaveReducer";
import holidaySlice from "./holiday/holidayReducer";
import reportSlice from "./invoiceReport/invoiceReducer";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    active: activitiesSlice,
    wallet: walletSlice,
    app: appSlice,
    employeeList: employeeSlice,
    taxe: taxesSlice,
    leaveList: leaveSlice,
    holidayList: holidaySlice,
    report: reportSlice,
  },
});
