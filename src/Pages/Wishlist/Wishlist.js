import React, { useState } from "react";
import { MdAddShoppingCart, MdClose, MdSearch } from "react-icons/md";
import { Data } from "../../Assets/StaticData/productFile";
import "./Wishlist.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../../Redux/CartReducer";
import { baseURl } from "../../Utility/APICALL/InvokeAPI";

const Wishlist = () => {
  const [serachwishlist, setSerachwishlist] = useState("");
  const [Id, setId] = useState(null);
  const wishlist = useSelector((state) => state["cart"].wishlist);

 
  const dispatch = useDispatch();

  const TR = ({ item }) => {
    return (
      <tr>
        <td>
          <button onClick={(e) => dispatch(removeFromWishlist(item.id))}>
            {" "}
            <MdClose className="close"></MdClose>
          </button>
        </td>
        <td>
          <Link to={`/product/${item.id}`}>
          <img src={`${baseURl + item?.image}`} alt={item.title} />{" "}
          </Link>
        </td>
        <td>
          <Link to={`/product/${item.id}`}>
            <span>{item.title}</span>{" "}
          </Link>
        </td>
        <td>
          <span> $ {item["price"]}</span>
        </td>
        <td>
          <span>{item["isStock"] ? "in Stock" : "Out of Stock"}</span>
        </td>
        <td>
          <div className="aa-add-to-cart-btn">
            <span>
              <MdAddShoppingCart onClick={() =>
                      dispatch(
                        addToCart({
                          id: item?.id,
                          color: item?.attributes.color,
                          title: item?.attributes.title,
                          desc: item?.attributes.shortdesc,
                          image:
                            item?.attributes.productImage.data[0].attributes
                              .url,
                          price: item?.attributes["salePrice"]
                            ? item?.attributes["salePrice"]
                            : item?.attributes["regularPrice"],
                            quantity:1
                        
                        })
                      )
                    }></MdAddShoppingCart> Add To Cart
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
            {wishlist.map((item) => {
                return <TR key={item.id} item={item} />;
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
