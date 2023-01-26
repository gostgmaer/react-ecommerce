import React, { Fragment, useState } from "react";
import ConfirmpaymentModal from "../../Components/PaymentConfirm/ConfirmpaymentModal";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import {
  Paymentoption,
  CouponOption,
  LoginBlock,
  ShippingDetails,
  BlockListsElement,
} from "./Blocks";
import BillingAddress from "./Blocks/BillingAddress";
import OrderSummery from "./Blocks/OrderSummery";
import PaymentOption from "./Blocks/PaymentOption";
import { AppCheckoutProvider } from "./CheckContext";
import "./Checkout.scss";
const Checkout = () => {
  const {isCOnfirm, setIsCOnfirm} =useGlobalContext()
  const blocks = [
    {
      id: 1,
      heading: "Have a Coupon?",
      blockName: <CouponOption></CouponOption>,
    },
    {
      id: 2,
      heading: "Customer Login",
      blockName: <LoginBlock></LoginBlock>,
    },
    {
      id: 3,
      heading: "Billing Details",
      blockName: <BillingAddress></BillingAddress>,
    },
  ];

  return (
    <AppCheckoutProvider>
      <div className="checkout">
        <div className="checkoutWrapper">
          <div className="col-1">
            <div className="checkout-left">
              <div className="panel-group" id="accordion">
                {blocks.map((block) => {
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
              <div className="CheckOutElements">
                <OrderSummery></OrderSummery>
                <PaymentOption></PaymentOption>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCOnfirm&&<ConfirmpaymentModal></ConfirmpaymentModal>}
    </AppCheckoutProvider>
  );
};

export default Checkout;
// @ts-ignore
