import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { sliderApi } from "../api/api";

export const store = configureStore({
  reducer: { [sliderApi.reducerPath]: sliderApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
