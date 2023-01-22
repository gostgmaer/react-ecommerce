import React, { Fragment, useState } from "react";
import {
  OrderSummery,
  Paymentoption,
  CouponOption,
  LoginBlock,
  BillionDetails,
  ShippingDetails,
  BlockListsElement,
} from "./Blocks";
import "./Checkout.scss";
const Checkout = () => {


  
  const blocks = [
    {
      id: 1,
      heading: "Have a Coupon?",
      blockName: <CouponOption></CouponOption>,
    },
    {
      id: 2,
      heading: "Client Login",
      blockName: <LoginBlock></LoginBlock>,
    },
    {
      id: 3,
      heading: "Billing Details",
      blockName: <BillionDetails></BillionDetails>,
    },
    {
      id: 4,
      heading: " Shippping Address",
      blockName: <ShippingDetails></ShippingDetails>,
    },
  ];
  const blocksData = [
    {
      id: 1,
      heading: "Have a Coupon?",
      blockName: <CouponOption></CouponOption>,
    },
  ];



  return (
    <div className="checkout">
      <div className="checkoutWrapper">
        <div className="col-1">
          <div className="checkout-left">
            <div className="panel-group" id="accordion">
              {blocks.map((block) => {
                console.log(block);
                return (
                  <BlockListsElement
                    key={block.id}
                    block={block}></BlockListsElement>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="checkout-right">
            <OrderSummery></OrderSummery>
            <Paymentoption></Paymentoption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
// @ts-ignore
