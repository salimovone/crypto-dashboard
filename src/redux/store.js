
import { configureStore } from "@reduxjs/toolkit";
import tableSlice from './table/tableReducer'
import responsiveSlice from "./responsive/responsiveSlice";

export const store = configureStore({
  reducer: {
    table: tableSlice
  },
});
