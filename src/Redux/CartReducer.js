// import { combineReducers } from "redux";
// import { CartReducer } from "./Cart/Reducer";

// const rootReducer = combineReducers({
//     cart:CartReducer
// })

// export default rootReducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  wishlist: [],
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
    removefromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
    addToWishlist: (state, action) => {
      const item = state.wishlist.find((item) => item.id === action.payload.id);
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    resetWishList: (state, action) => {
      state.wishlist = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removefromCart, resetCart,addToWishlist,removeFromWishlist,resetWishList } = cartSlice.actions;

export default cartSlice.reducer;
