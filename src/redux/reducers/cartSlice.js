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
        cartItemId: Date.now(), // Use the current timestamp as a unique ID
      };
      state.cartItems.push(newItem);
    },
    removeFromCart: (state, action) => {
      console.log("pay", action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
