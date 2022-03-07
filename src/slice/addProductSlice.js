import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorits: [], cartItem: [] };
const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addToFavorit: (state, action) => {
      console.log(action.payload);
      state.favorits = [...state.favorits, action.payload];
    },
    addToCart: (state, action) => {
      state.cartItem = [...state.cartItem, action.payload];
    },
  },
});
const { actions, reducer } = addProductSlice;
export default reducer;
export const { addToFavorit, addToCart } = actions;
