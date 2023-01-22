import React, { Fragment, useState } from "react";
import { useGlobalContext } from "../../States/GlobalContext/Context";

export const BlockListsElement = ({ block }) => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div className={`panel-default aa-checkout-${block.id}`}>
      <div className="panel-heading">
        <h4 onClick={() => setOpenPanel(!openPanel)} className="panel-title">
          {block.heading}
        </h4>
      </div>
      {/* <div className="heading">{block.heading}</div> */}
      <div
        style={openPanel ? { display: "block" } : { display: "none" }}
        className={`panel-collapse`}>
        {block.blockName}
      </div>
    </div>
  );
};

export const Paymentoption = () => {
  return (
    <React.Fragment>
      <div className="paymentOption">
        {" "}
        <h4>Payment Method</h4>
        <div className="aa-payment-method">
          <label htmlFor="cashdelivery">
            <input type="radio" id="cashdelivery" name="optionsRadios" />
            Cash on Delivery
          </label>
          <label htmlFor="paypal">
            <input
              type="radio"
              id="paypal"
              name="optionsRadios"
              // @ts-ignore
              checked=""
            />
            Via Paypal
          </label>
          <img src="../assets/img/pp-cards.jpg" />
          <input type="submit" value="Place Order" className="aa-browse-btn" />
        </div>
      </div>
    </React.Fragment>
  );
};

export const OrderSummery = () => {
  return (
    <Fragment>
      <div className="orderSummery">
        <h4>Order Summary</h4>
        <div className="aa-order-summary-area">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  T-Shirt <strong> x 1</strong>
                </td>
                <td>$150</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Subtotal</th>
                <td>$750</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>$35</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>$785</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export const CouponOption = () => {
  return (
    <Fragment>
      <div className="panel-body">
        <input
          type="text"
          placeholder="Coupon Code"
          className="aa-coupon-code"
        />
        <button className="aa-browse-btn">Apply Coupon</button>
      </div>
    </Fragment>
  );
};

export const LoginBlock = () => {
  return (
    <Fragment>
      <div className="panel-body">
        <p>Please Login Your Account</p>
        <input type="text" placeholder="Username or email" />
        <input type="password" placeholder="Password" />
        <label className="rememberme"
          // @ts-ignore
          htmlFor="rememberme">
          <input type="checkbox" id="rememberme" />
         <span> Remember me</span>
        </label>
        <button type="submit" className="aa-browse-btn">
          Login
        </button>
        
        <p className="aa-lost-password">
          <a href="https://www.free-css.com/free-css-templates">
            Lost your password?
          </a>
        </p>
      </div>
    </Fragment>
  );
};
export const BillionDetails = () => {
  return (
    <Fragment>
      <div className="panel-body">
        <div className="row">
         
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="First Name*" />
            </div>
   
         
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Last Name*" />
            </div>
          
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Company name" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="email" placeholder="Email Address*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="tel" placeholder="Phone*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <textarea cols={8} value={"4s"} rows={3}>
                Address*
              </textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <select>
                <option value="0">Select Your Country</option>
                <option value="1">Australia</option>
                <option value="2">Afganistan</option>
                <option value="3">Bangladesh</option>
                <option value="4">Belgium</option>
                <option value="5">Brazil</option>
                <option value="6">Canada</option>
                <option value="7">China</option>
                <option value="8">Denmark</option>
                <option value="9">Egypt</option>
                <option value="10">India</option>
                <option value="11">Iran</option>
                <option value="12">Israel</option>
                <option value="13">Mexico</option>
                <option value="14">UAE</option>
                <option value="15">UK</option>
                <option value="16">USA</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Appartment, Suite etc." />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="City / Town*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="District*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Postcode / ZIP*" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export const ShippingDetails = () => {
  return (
    <Fragment>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="First Name*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Last Name*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Company name" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="email" placeholder="Email Address*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="tel" placeholder="Phone*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <textarea value={8} cols="8" rows="3">
                Address*
              </textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <select>
                <option value="0">Select Your Country</option>
                <option value="1">Australia</option>
                <option value="2">Afganistan</option>
                <option value="3">Bangladesh</option>
                <option value="4">Belgium</option>
                <option value="5">Brazil</option>
                <option value="6">Canada</option>
                <option value="7">China</option>
                <option value="8">Denmark</option>
                <option value="9">Egypt</option>
                <option value="10">India</option>
                <option value="11">Iran</option>
                <option value="12">Israel</option>
                <option value="13">Mexico</option>
                <option value="14">UAE</option>
                <option value="15">UK</option>
                <option value="16">USA</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Appartment, Suite etc." />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="City / Town*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="District*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aa-checkout-single-bill">
              <input type="text" placeholder="Postcode / ZIP*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aa-checkout-single-bill">
              <textarea value={8} cols="8" rows="3">
                Special Notes
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
