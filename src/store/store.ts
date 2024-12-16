import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/fetures/buttons/providerButton";
import blogReducer from "@/store/reducer/blog";
import newsReducer from "@/store/reducer/news";



export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      blog: blogReducer,
      news: newsReducer,

 
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
    
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
