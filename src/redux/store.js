import { configureStore } from "@reduxjs/toolkit";
import tableSlice from './table/tableReducer'
import activitiesSlice  from "./activities/activesReducer";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    active: activitiesSlice
  },
});
