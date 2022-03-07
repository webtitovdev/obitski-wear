import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categories: "",
    ofset: "12",
    orderBy: "",
  },
};
const categoriesfilteredSlice = createSlice({
  name: "categoriesfilter",
  initialState,
  reducers: {
    categoriesfiltered: (state, action) => {
      state.filters.categories = action.payload;
    },
    ofsetFiltered: (state, action) => {
      state.filters.ofset = action.payload;
    },
    orderByFiltered: (state, action) => {
      state.filters.orderBy = action.payload;
    },
    clearFilter: (state) => {
      state.filters.categories = "";
      state.filters.ofset = "12";
      state.filters.orderBy = "";
    },
  },
});
const { actions, reducer } = categoriesfilteredSlice;
export default reducer;
export const {
  categoriesfiltered,
  colorFiltered,
  sizeFiltered,
  ofsetFiltered,
  orderByFiltered,
  clearFilter,
} = actions;
