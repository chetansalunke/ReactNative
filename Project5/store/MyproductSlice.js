import { createSlice } from "@reduxjs/toolkit";

const MyproductSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload)
        }
    },

});

export const {addMyProducts}  = MyproductSlice.actions;
export default MyproductSlice.reducer;