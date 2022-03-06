import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import toggler from "../slice/toggleSlice";
import categoriesfilter from "../slice/filtersSLice";

import { sliderApi } from "../api/api";

const rootReducer = combineReducers({
  [sliderApi.reducerPath]: sliderApi.reducer,
  toggler,
  categoriesfilter,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [sliderApi.reducerPath],
  categoriesfilter,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sliderApi.middleware),
  devTools: true,
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
