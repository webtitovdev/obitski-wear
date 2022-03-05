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

import toggler from "../components/navbar/toggleSlice";

import { sliderApi } from "../api/api";

const rootReducer = combineReducers({
  [sliderApi.reducerPath]: sliderApi.reducer,
  toggler,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [sliderApi.reducerPath],
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
