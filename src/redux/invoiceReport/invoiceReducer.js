import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reports: [
        {
            id: 1,
            title: "#INV-0001",
            client: "Global Technologies",
            date: "1 Sep 2017",
            dueDate: "7 Sep 2017",
            amount: "$2099",
            status: "Paid"
        }
    ]
}


export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
      deleteReport: (state, action) => {
        state.reports = state.reports.filter((user) => user.id !== action.payload);
      },
  
      updateReport: (state, action) => {
        let index = state.reports.findIndex((i) => i.id === action.payload.id);
        const newValue = state.reports;
        newValue[index] = action.payload;
  
        state.reports = newValue;
      },
  
      addReport: (state, action) => {
        state.reports = [...state.reports, action.payload];
      },
    },
});

export const { deleteReport, updateReport, addReport } = reportSlice.actions;
export default reportSlice.reducer;