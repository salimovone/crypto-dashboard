import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarLight: false,
  navbar: "#ffffff",
  colors: {
    green: "#17c964",
    orange: "#ff8300",
    red: "#ff0000",
    purple: "#f2125e",
    blue: "#2b80ff",
    black: "#000000",
    white: "#ffffff",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeSidebarLight: (state, action) => {
      state.sidebarLight = action.payload;
    },
    changeNavbar: (state, action) => {
      switch (action.payload) {
        case "green":
          state.navbar = state.colors.green;
          break;
          
        case "orange":
          state.navbar = state.colors.orange;
          break;
          
        case "red":
          state.navbar = state.colors.red;
          break;
          
        case "purple":
          state.navbar = state.colors.purple;
          break;
          
        case "blue":
          state.navbar = state.colors.blue;
          break;
          
        case "black":
          state.navbar = state.colors.black;
          break;
          
          default:
            state.navbar = state.colors.white;
          break;
      }
    },
  },
});

export const {changeNavbar, changeSidebarLight} = themeSlice.actions
export default themeSlice.reducer