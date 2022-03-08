import { createSlice } from "@reduxjs/toolkit";

const initialState = { auth: false };
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
    },
  },
});
const { actions, reducer } = loginSlice;
export default reducer;
export const { login, logout } = actions;
