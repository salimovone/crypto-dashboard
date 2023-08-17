import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      employee: "Albina Simonis",
      iD: "SF-0001",
      number: "828-634-2744",
      date: "7 May 2015",
      role: "Staff",
    },
    {
      id: 2,
      employee: "Cristina Groves",
      iD: "DR-0001",
      number: "928-344-5176",
      date: "1 Jan 2013",
      role: "Doctor",
    },
    {
      id: 3,
      employee: "Mary Mericle",
      iD: "SF-0003",
      number: "603-831-4983",
      date: "27 Dec 2017",
      role: "Accountant",
    },
    {
      id: 4,
      employee: "Haylie Feeney",
      iD: "SF-0002",
      number: "616-774-4962",
      date: "21 Apr 2017",
      role: "Laboratorist",
    },
    {
      id: 5,
      employee: "Zoe Butler",
      iD: "SF-0001",
      number: "444-555-9999",
      date: "19 May 2012",
      role: "Pharmacist",
    },
  ],
};

export const employeeSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (user) => user.id !== action.payload
      );
    },

    updateEmployee: (state, action) => {
      let index = state.employees.findIndex((i) => i.id === action.payload.id);
      const newValue = state.employees;
      newValue[index] = action.payload;

      state.employees = newValue;
    },

    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

export const { deleteEmployee, updateEmployee, addEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
