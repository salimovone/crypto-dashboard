
import { configureStore } from "@reduxjs/toolkit";
import tableSlice from './table/tableReducer'

export const store = configureStore({
  reducer: {
    table: tableSlice
  },
});
