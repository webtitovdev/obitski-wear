import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const togglerSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    toggle: (state) => !state,
  },
});
const { actions, reducer } = togglerSlice;
export default reducer;
export const { toggle } = actions;
