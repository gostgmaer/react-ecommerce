// import { combineReducers } from "redux";
// import { CartReducer } from "./Cart/Reducer";


// const rootReducer = combineReducers({
//     cart:CartReducer
// })


// export default rootReducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removefromCart: (state,action) => {
    state.products=state.products.filter(item=>item.id!==action.payload)
    },
    resetCart: (state, action) => {
      state.products=[]
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removefromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;