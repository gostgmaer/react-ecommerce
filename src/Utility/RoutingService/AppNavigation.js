import React from "react";
import { Bars } from "react-loader-spinner";
// @ts-ignore
import { Route, Routes } from "react-router-dom";
import CartPage from "../../Pages/Cart/CartPage";
import Checkout from "../../Pages/Checkout/Checkout";
import Homepage from "../../Pages/Home/Homepage";
import Product from "../../Pages/Product/Product";
import Products from "../../Pages/Products/Products";
import Registration from "../../Pages/Registration/Registration";
import Signin from "../../Pages/Signin/Signin";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import Thankyou from "../../Pages/Thankyou/Thankyou";
import Wishlist from "../../Pages/Wishlist/Wishlist";
import { useGlobalContext } from "../../States/GlobalContext/Context";

const AppNavigation = () => {
  const { loading } = useGlobalContext();

  return (
    <React.Fragment>
      
        <Routes>
          <Route element={<Homepage></Homepage>} path="/" />
          <Route element={<Signin></Signin>} path="/signin"></Route>
          <Route element={<Registration></Registration>} path="/signup"></Route>
          <Route element={<Wishlist></Wishlist>} path="/wishlist"></Route>
          <Route
            path="/product/:id"
            element={<SingleProduct></SingleProduct>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/products/:id" element={<Products></Products>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
    
    </React.Fragment>
  );
};

export default AppNavigation;
