import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import toggler from "../components/navbar/toggleSlice";

import { sliderApi } from "../api/api";

export const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    toggler,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
