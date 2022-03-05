import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categories: "",
    color: "",
    size: "",
    packets: "",
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
  },
});
const { actions, reducer } = categoriesfilteredSlice;
export default reducer;
export const { categoriesfiltered, colorFiltered, sizeFiltered } = actions;
