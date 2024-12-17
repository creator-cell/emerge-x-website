import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Using localStorage
import cartReducer from "@/store/fetures/buttons/providerButton";
import blogReducer from "@/store/reducer/blog";
import newsReducer from "@/store/reducer/news";

// Combine all reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  blog: blogReducer,
  news: newsReducer,
});

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage, // Storing in localStorage
  whitelist: ["cart", "blog" , 'news'], // Only persist these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Avoid redux-persist warnings
      }),
  });
};

// Create a persistor for rehydration
export const persistor = persistStore(makeStore());

// Types for state and dispatch
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
