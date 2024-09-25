// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
