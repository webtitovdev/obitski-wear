import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categories: "",
    color: "",
    size: "",
    ofset: "",
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
    colorFiltered: (state, action) => {
      state.filters.color = action.payload;
    },
    sizeFiltered: (state, action) => {
      state.filters.size = action.payload;
    },
    ofsetFiltered: (state, action) => {
      state.filters.ofset = action.payload;
    },
    orderByFiltered: (state, action) => {
      state.filters.orderBy = action.payload;
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
} = actions;
