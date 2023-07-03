import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import todosSlice from "./todosSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterSlice,
    authStore: authSlice,
    todosStore: todosSlice,
    cartStore: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
