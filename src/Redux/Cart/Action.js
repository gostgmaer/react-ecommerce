import axios from "axios";
import { CART_DECREASE, CART_INCREASE, CART_RESET } from "./Types";

export const cartIncrease = () => {
  return {
    type: CART_INCREASE,
    desceiption: "Increase Cart Amount",
  };
};

export const cartDecrease = () => {
  return {
    type: CART_DECREASE,
    desceiption: "Decress Cart Amount",
  };
};
export const cartReset = () => {
  return {
    type: CART_RESET,
    desceiption: "Reset Cart Amount",
  };
};
