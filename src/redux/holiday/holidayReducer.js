import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  holidays: [
    {
      id: 1,
      holiday: "New Year",
      holidayDate: "1 Jan 2019",
      weekDay: "Monday",
    },
    {
      id: 2,
      holiday: "Good Friday",
      holidayDate: "13 Apr 2019",
      weekDay: "Friday",
    },
    {
      id: 3,
      holiday: "May Day",
      holidayDate: "1 May 2019",
      weekDay: "Tuesday",
    },
    {
      id: 4,
      holiday: "Memorial Day",
      holidayDate: "28 May 2019",
      weekDay: "Monday",
    },
    {
      id: 5,
      holiday: "Ramzon",
      holidayDate: "26 Jun 2019",
      weekDay: "Monday",
    },
    {
      id: 6,
      holiday: "Bakrid",
      holidayDate: "23 Aug 2019",
      weekDay: "Wednesday",
    },
    {
      id: 7,
      holiday: "Deepavali",
      holidayDate: "18 Oct 2018",
      weekDay: "Wednesday",
    },
    {
      id: 8,
      holiday: "Christmas",
      holidayDate: "25 Dec 2019",
      weekDay: "Tuesday",
    },
  ],
};

export const holidaySlice = createSlice({
  name: "holidayList",
  initialState,
  reducers: {
    deleteHoliday: (state, action) => {
      state.holidays = state.holidays.filter(
        (user) => user.id !== action.payload
      );
    },

    updateHoliday: (state, action) => {
      let index = state.holidays.findIndex((i) => i.id === action.payload.id);
      const newValue = state.holidays;
      newValue[index] = action.payload;

      state.holidays = newValue;
    },

    addHoliday: (state, action) => {
      state.holidays = [...state.holidays, action.payload];
    },
  },
});

export const { deleteHoliday, updateHoliday, addHoliday } =
  holidaySlice.actions;
export default holidaySlice.reducer;
