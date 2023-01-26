import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navitem } from "../../Assets/StaticData/navigation";
import {
  MdShoppingBag,
  MdAccountCircle,
  MdShoppingCart,
  MdSearch,
  MdPerson,
  MdFavorite,
} from "react-icons/md";
import "./Header.scss";
import Anouncement from "../Anouncement/Anouncement";
import CartBlock from "../Cart/CartBlock";
import { connect, useSelector } from "react-redux";
import CartComponent from "../Cart/CartBlock";
import { useGlobalContext } from "../../States/GlobalContext/Context";
// import {cartReset,cartIncrease,cartDecrease} from '../Redux'

const Header = (props) => {
  // const cartCount = useSelector(state =>state.cart.count)
  const { cartPanelHandle, openCart } = useGlobalContext();
  // const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state) => state["cart"].products);

  const wishlist = useSelector((state) => state["cart"].wishlist);

  return (
    <header className="Header">
      <nav className="navigationheader">
        <div className="headerLeft">
          <div className="form-group">
            <select className="custom-select" name="language" id="language">
              <option defaultValue={"en"}>En</option>
              <option value="es">Es</option>
              <option value="hi">Hi</option>
            </select>
          </div>
          <div className="form-group search">
            <input
              type="text"
              className="form-control"
              name="searchItem"
              id="searchItem"
              aria-describedby="helpId"
              placeholder="Search"
            />
            <button>
              <MdSearch></MdSearch>
            </button>
          </div>
        </div>
        <div className="headerCenter">
          <div className="form-group">
            <Link to={"/"}>GostStore</Link>
          </div>
        </div>
        <div className="headerRight">
          <Link to={"/signin"} className="btn">
            <MdPerson></MdPerson>
          </Link>
          <Link to={"/wishlist"} className="btn">
            <div className="wishList-icon">
              <MdFavorite></MdFavorite>
              <span  >{wishlist.length}</span>
            </div>
          </Link>

          <div className="cart-icon">
            <MdShoppingCart onClick={cartPanelHandle}></MdShoppingCart>
            <span>{products?.length}</span>
          </div>
        </div>
      </nav>
      {openCart ? <CartComponent></CartComponent> : ""}
      <Anouncement></Anouncement>
    </header>
  );
};

const mapStatetoprops = (state) => {
  return {
    count: state.cart.count,
  };
};
export default connect(mapStatetoprops)(Header);

// const oldnav = ()=>{
//     {/* <ul className='headerNav'>
//             {navitem.map((item) => { return <li key={item.id} className='headernavItem'><NavLink to={item.url}>{item.text}</NavLink></li>})}
//           </ul> */}
// }
