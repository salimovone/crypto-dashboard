import { createSlice } from "@reduxjs/toolkit";
import { emailUserList } from "./helper";

const initialState = {
  pageName: "users",
  emailUserList,
  trashList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },

    starBtn: (state, { payload }) => {
      state.emailUserList = state.emailUserList.map((i) => {
        if (i.id === payload) {
          i.starred = !i.starred;
        }
        return i;
      });
    },

    checkBtn: (state, { payload }) => {
      state.emailUserList = state.emailUserList.map((i) => {
        if (i.id === payload) {
          i.checked = !i.checked;
        }
        return i;
      });
    },

    starBtnT: (state, { payload }) => {
      state.trashList = state.trashList.map((i) => {
        if (i.id === payload) {
          i.starred = !i.starred;
        }
        return i;
      });
    },

    checkBtnT: (state, { payload }) => {
      state.trashList = state.trashList.map((i) => {
        if (i.id === payload) {
          i.checked = !i.checked;
        }
        return i;
      });
    },

    moveToTrash: (state) => {
      let arr = state.emailUserList.filter((i) => {
        return i.checked;
      });
      state.trashList = [...state.trashList, ...arr];

      state.emailUserList = state.emailUserList.filter((i) => {
        return !i.checked;
      });
    },

    restoreFromTrash: (state) => {
      let arr = state.trashList.filter((i) => {
        return i.checked;
      });
      state.emailUserList = [...state.emailUserList, ...arr];

      state.trashList = state.trashList.filter((i) => {
        return !i.checked;
      });
    },

    deleteFromTrash: (state) => {
      state.trashList = state.trashList.filter((i) => !i.checked);
    },

    checkAllBtn: (state, { payload }) => {
      state.emailUserList = state.emailUserList.map((i) => {
        i.checked = payload;
        return i;
      });
    },
  },
});

export const {
  setPageName,
  starBtn,
  checkBtn,
  moveToTrash,
  deleteFromTrash,
  checkBtnT,
  starBtnT,
  checkAllBtn,
  restoreFromTrash
} = appSlice.actions;
export default appSlice.reducer;
