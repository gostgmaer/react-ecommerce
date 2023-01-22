import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../../../States/GlobalContext/Context";

const OrderSummery = () => {

const {TaxCalculate,TotalSum} = useGlobalContext()

  const products = useSelector((state) => state["cart"].products);

  const TR = ({value}) => {
    return (
      <tr>
        <td>
         {value.title} <strong> x {value.quantity}</strong>
        </td>
        <td>$ {(value.price)*(value.quantity)}</td>
      </tr>
    );
  };
  const subTotalReturn = products.reduce((flag,item)=>(flag+(item.price*item.quantity)),0)
  

  return (
    <div className="OrderSummery">
      <Fragment>
        <div className="orderSummeryWrapper">
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
               {products.map(item=>( <TR key={item.id} value={item}></TR>))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal</th>
                  <td>$ {subTotalReturn.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Tax (12%)</th>
                  <td>$ {TaxCalculate(subTotalReturn,12).toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$ {TotalSum(subTotalReturn,TaxCalculate(subTotalReturn,12)).toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default OrderSummery;
