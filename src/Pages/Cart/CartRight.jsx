import React from "react";

const CartRight = () => {
  return (
    <div className="CartRight">
      <div className="cartSummery">
        <div className="coupon">
          <input
            type="text"
            className="form-control"
            placeholder="Coupon Code"
          />
          <div className="input-group-append">
            <button className="btn btn-coupon">Apply Coupon</button>
          </div>
        </div>

        <div className="cartprices">
          <h5 className="section-title">
            <span>Cart Summary</span>
          </h5>
          <div className="prices">
            <div className="Subtotal">
              <p>Subtotal</p>
              <p>$150</p>
            </div>
            <div className="Shipping">
              <p className="">Shipping</p>
              <p className="">$10</p>
            </div>
          </div>
          <div className="total-block">
            <div className="Total">
              <p>Total</p>
              <p>$160</p>
            </div>
            <div className="btn-block">
              <button className="btn btn-checkout">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRight;
