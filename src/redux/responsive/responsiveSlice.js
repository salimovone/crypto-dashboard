import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideState: "wide",
};

export const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    setSideState: (state, { payload }) => {
      state.sideState = payload;
    },
  },
});

export const { setSideState } = responsiveSlice.actions;
export default responsiveSlice.reducer;
