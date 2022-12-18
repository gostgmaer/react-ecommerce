import React from "react";
import CartRight from "./CartRight";
import CartTable from "./CartTable";
import './Cart.scss'



const CartPage = () => {
  return (
    <div className="Cart">
      <div className="cartWrapper">
        <div className="colleft">
        <CartTable></CartTable>
        </div>
        <div className="colRight">
          <CartRight></CartRight>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
