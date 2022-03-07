import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorits: [], cartItem: [] };
const Product = createSlice({
  name: "ProductFunc",
  initialState,
  reducers: {
    addToFavorit: (state, action) => {
      state.favorits = [...state.favorits, action.payload];
    },
    addToCart: (state, action) => {
      state.cartItem = [...state.cartItem, action.payload];
    },
    clearedFavorit: (state) => {
      state.favorits = [];
    },
    clearedCart: (state) => {
      state.cartItem = [];
    },
    deletFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id === action.payload
      );
    },
    deletFromFavorits: (state, action) => {
      state.favorits = state.favorits.filter(
        (item) => item.id === action.payload
      );
    },
  },
});
const { actions, reducer } = Product;
export default reducer;
export const { addToFavorit, addToCart, clearedFavorit, clearedCart } = actions;
