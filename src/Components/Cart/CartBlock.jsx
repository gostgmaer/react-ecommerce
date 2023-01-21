import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import "./CartBlock.scss";
import { addToCart, removefromCart, resetCart } from "../../Redux/CartReducer";
import { baseURl } from "../../Utility/APICALL/InvokeAPI";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const products = useSelector((state) => state['cart'].products);
  const dispatch = useDispatch();
 
  const {cartPanelHandle,openCart,totalprice} =  useGlobalContext()

  // const handlePayment = async ()=>{
  //   console.log(products);
  //   try {
  //     const stripe  = await stripePromise;
  //     const res = await InvokeAPI('orders','post',{products:products},'','','')
  //     await stripe.redirectToCheckout({
  //       sessionId:res.data.strapeSession.id
  //     })

  //   } catch (error) {
  //     console.log(error);

  //   }
  // }


  

  const cartWrapper = () => {
    return (
      <React.Fragment>
        <h2>Product in your cart</h2>
        {products?.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={`${baseURl + item?.image}`} alt="" />
              <div className="details">
                <h3>{item.title.substring(0,32)}</h3>
                <p>{`${item["desc"].substring(0, 65)}...`}</p>
                <div className="price">
                  {item.quantity} X ${item["price"]}
                </div>
              </div>
              <div
                className="delete"
                onClick={() => dispatch(removefromCart(item.id))}>
                <MdDelete></MdDelete>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$ {totalprice(products)}</span>
        </div>
        <button className="checkout"> CheckOut Product </button>
       <div className="bottom">
       <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
        <Link onClick={cartPanelHandle} to={'/cart'}>Cart</Link>
       </div>
      </React.Fragment>
    );
  };

  return (
    <div className="CartComponent">
      <div className="cartComponentWrapper">
        {products.length ? (
          cartWrapper()
        ) : (
          <div>Your Cart is empty Please add a Item</div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
