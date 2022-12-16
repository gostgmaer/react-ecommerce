import React from "react";
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
const Header = () => {
  return (
    <header className="Header">
      <nav className="navigationheader">
        <div className="headerLeft">
          <div class="form-group">
            <select class="custom-select" name="language" id="language">
              <option selected value="en">
                {" "}
                En
              </option>
              <option value="es">Es</option>
              <option value="hi">Hi</option>
            </select>
          </div>
          <div class="form-group search">
            <input
              type="text"
              class="form-control"
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
          <div class="form-group">
            <Link to={"/"}>GostStore</Link>
          </div>
        </div>
        <div className="headerRight">
          <Link to={"/signin"} class="btn">
            <MdPerson></MdPerson>
          </Link>
          <Link to={"/wishlist"} class="btn">
            <MdFavorite></MdFavorite>
          </Link>

          <div className="cart-icon">
            <MdShoppingCart></MdShoppingCart>
            <span>5</span>
          </div>
        </div>
      </nav>
      <Anouncement></Anouncement>
    </header>
  );
};

export default Header;

// const oldnav = ()=>{
//     {/* <ul className='headerNav'>
//             {navitem.map((item) => { return <li key={item.id} className='headernavItem'><NavLink to={item.url}>{item.text}</NavLink></li>})}
//           </ul> */}
// }
