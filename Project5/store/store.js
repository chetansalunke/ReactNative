import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import MyproductReducer from './MyproductSlice';



export const store = configureStore({
    reducer:{
        // key and point to the cart reducer
        cart: cartReducer,
        product: MyproductReducer,
    },
});