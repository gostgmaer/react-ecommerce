import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartRight = () => {
  const products = useSelector((state) => state['cart'].products);
const [subTotal, setsubTotal] = useState();
const [shipping, setShipping] = useState(120);

  // const subTotalReturn = ()=>{
  //   let data
  //  return products?.forEach(element => {
  //     console.log(element.price );
  //     data = element.price 
  //   });
  // }
  const subTotalReturn = products.reduce((flag,item)=>(flag+(item.price*item.quantity)),0)
  


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
              <p>$ {subTotalReturn.toFixed(2)}</p>
            </div>
            <div className="Shipping">
              <p className="">Shipping</p>
              <p className="">${shipping}</p>
            </div>
          </div>
          <div className="total-block">
            <div className="Total">
              <p>Total</p>
              <p>$ {(shipping+subTotalReturn).toFixed(2)}</p>
            </div>
            <div className="btn-block">
              <button onClick={()=>window.open('./checkout').self} className="btn btn-checkout">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRight;
