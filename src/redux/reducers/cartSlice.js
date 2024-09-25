import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        cartItemId: Date.now(),
      };
      state.cartItems.push(newItem);
    },
    removeFromCart: (state, action) => {
      console.log("Removing cartItemId:", action.payload);
      state.cartItems.forEach((item) =>
        console.log("Existing item cartItemId:", item.cartItemId)
      );

      console.log("pay", action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId.toString() !== action.payload.toString()
      );
      console.log("updater", state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
