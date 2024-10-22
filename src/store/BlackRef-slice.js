import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlackRef: false,
};
const BlackRefSlice = createSlice({
  name: "isBlackRef",
  initialState,
  reducers: {
    toggleBlackRef(state, action) {
      state.isBlackRef = action.payload;
    },
  },
});

export const { toggleBlackRef } = BlackRefSlice.actions;
export default BlackRefSlice.reducer;

const isCloseInitialState = {
  isCloseMenu: false,
};
const isCloseMenu = createSlice({
  name: "isCloseMenu",
  initialState: isCloseInitialState,
  reducers: {
    toggleCloseMenu(state) {
      state.isCloseMenu = !state.isCloseMenu;
    },
  },
});

export const closeMenuReducer = isCloseMenu.reducer;
export const { toggleCloseMenu } = isCloseMenu.actions;
