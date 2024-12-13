import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/fetures/buttons/providerButton";



export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,

 
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
