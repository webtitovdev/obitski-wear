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
import productFunc from "../slice/productSlice";
import login from "../slice/loginSlice";

import { crudApi } from "../api/api";

const rootReducer = combineReducers({
  [crudApi.reducerPath]: crudApi.reducer,
  toggler,
  categoriesfilter,
  productFunc,
  login,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productFunc", "login"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(crudApi.middleware),
  devTools: true,
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
