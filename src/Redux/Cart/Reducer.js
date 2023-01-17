import { CART_DECREASE, CART_INCREASE, CART_RESET } from "./Types"



const initialCart = {
    count:1
}

export const CartReducer = (state = initialCart, action) => {
    switch (action.type) {
      case CART_INCREASE:
        return {
          ...state,
          count: state.count + 1,
        };
        case CART_RESET:
        return {
          ...state,
          count: 1,
        };
        case CART_DECREASE:
            return {
              ...state,
              count: (state.count>1 && state.count - 1),
            };
  
      default:
        return state;
    }
  };