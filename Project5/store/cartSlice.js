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
        state.item[existingIndex].qty = state[existingIndex].qty + 1;
      } else {
        // If not, add the item to the cart
        state.item.push(action.payload);
      }

      console.log("Data pushed to the redux");
    },
    removeFromCart: (state, action) => {
      state.item.splice(state.item.indexOf(action.payload.id), 1);
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
