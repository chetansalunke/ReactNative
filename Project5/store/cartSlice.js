import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { item: [] },
  reducers: {
    addtoCart: (state, action) => {
      const existingIndex = state.item.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state.item[existingIndex].qty += 1;
      } else {
        // If not, add the item to the cart
        state.item.push({
          product_id: action.payload.product_id,
          name: action.payload.name,
          details: action.payload.details,
          price: action.payload.price,
          image_url: action.payload.image_url,
          qty: action.payload.qty+1, // Set initial quantity to 1 for a new item
        });
      }
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.item.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (indexToRemove !== -1) {
        // If the item is found, decrement the quantity
        state.item[indexToRemove].qty -= 1;

        // If quantity becomes 0, remove the item from the cart
        if (state.item[indexToRemove].qty === 0) {
          state.item.splice(indexToRemove, 1);
        }
      }
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
