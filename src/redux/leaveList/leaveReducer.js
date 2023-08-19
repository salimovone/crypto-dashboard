import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaves: [
    {
      id: 1,
      employe: "Cristina Groves",
      leaveType: "Medicline Leave",
      from: "13 May 2018",
      to: "15 May 2018",
      days: "3 days",
      reason: "Going to Vacation",
      status: "Approved",
    },
    {
      id: 2,
      employe: "Albina Simonis",
      leaveType: "Casual Leave",
      from: "8 Aug 2018",
      to: "8 Aug 2018",
      days: "2 days",
      reason: "Family Function",
      status: "New",
    },
    {
      id: 3,
      employe: "Zoe Butler",
      leaveType: "Casual Leave",
      from: "31 Mar 2018",
      to: "31 Mar 2018",
      days: "2 days",
      reason: "Birthday Function",
      status: "New",
    },
    {
      id: 4,
      employe: "Mary Mericle",
      leaveType: "Casual Leave",
      from: "27 Jun 2018",
      to: "28 Jun 2018",
      days: "2 days",
      reason: "Going to Native Place",
      status: "Approved",
    },
    {
      id: 5,
      employe: "Haylie Feeney",
      leaveType: "Casual Leave",
      from: "13 May 2018",
      to: "13 May 2018",
      days: "2 days",
      reason: "Not feeling well",
      status: "Decline",
    },
  ],
};

export const leaveSlice = createSlice({
  name: "leaveList",
  initialState,
  reducers: {
    deleteLeave: (state, action) => {
      state.leaves = state.leaves.filter((user) => user.id !== action.payload);
    },

    updateLeave: (state, action) => {
      let index = state.leaves.findIndex((i) => i.id === action.payload.id);
      const newValue = state.leaves;
      newValue[index] = action.payload;

      state.leaves = newValue;
    },

    addLeave: (state, action) => {
      state.leaves = [...state.leaves, action.payload];
    },
  },
});

export const { deleteLeave, updateLeave, addLeave } = leaveSlice.actions;
export default leaveSlice.reducer;
