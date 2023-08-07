import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarLight: false
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeSidebarLight: (state, action) => {
      
      state.sidebarLight = action.payload;
    }
  },
});

export const {changeNavbar, changeSidebarLight} = themeSlice.actions
export default themeSlice.reducer