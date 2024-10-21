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
