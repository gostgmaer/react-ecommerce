import React, { useState } from "react";
import { MdAddShoppingCart, MdClose, MdSearch } from "react-icons/md";
import { Data } from "../../Assets/StaticData/productFile";
import "./Wishlist.scss";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [serachwishlist, setSerachwishlist] = useState("");
  const [Id, setId] = useState(null);

  const removeItem = (id) => {
    setId(id);
    console.log(id);
  };

  const TR = ({ item }) => {
    return (
      <tr key={item.ID}>
        <td>
          <button onClick={(e) => removeItem(item.ID)}>
            {" "}
            <MdClose className="close"></MdClose>
          </button>
        </td>
        <td>
          <Link to={`/product/${item.ID}`}>
            <img src={item.newImage[0]} alt={item.Name} />{" "}
          </Link>
        </td>
        <td>
          <Link to={`/product/${item.ID}`}>
            <span>{item.Name}</span>{" "}
          </Link>
        </td>
        <td>
          <span> $ {item["Regular price"]}</span>
        </td>
        <td>
          <span>{item["In stock?"] ? "in Stock" : "Out of Stock"}</span>
        </td>
        <td>
          <div className="aa-add-to-cart-btn">
            <span>
              <MdAddShoppingCart></MdAddShoppingCart> Add To Cart
            </span>
          </div>
        </td>
      </tr>
    );
  };

  const WishlistTable = () => {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.sampleData
              .filter(
                (data) =>
                  data.Name.match(new RegExp(serachwishlist, "i")) &&
                  data.ID !== Id
              )
              .map((item) => {
                return <TR key={item.ID} item={item} />;
              })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="Wishlist">
      <div className="wishlistWrapper">
        <div className="wishlistTop">
          <div className="heading">Wishlist</div>
          <div className="searchWishlist">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={(e) => setSerachwishlist(e.target.value)}
                value={serachwishlist}
                className="form-control"
                placeholder="Search Item..."
              />{" "}
              <MdSearch></MdSearch>
            </div>
          </div>
        </div>
        <div className="wishlistTable">
          <WishlistTable></WishlistTable>
        </div>
        <div className="wishlistbuttom"></div>
      </div>
    </div>
  );
};

export default Wishlist;
