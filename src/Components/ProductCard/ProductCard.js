import React, { useEffect } from "react";
import {
  MdExpand,
  MdFavorite,
  MdImage,
  MdOutlineImage,
  MdShoppingBag,
  MdShoppingCart,
  // @ts-ignore
} from "react-icons/md";
import { Link } from "react-router-dom";
import { products } from "../../Assets/StaticData/Data";
import { Data } from "../../Assets/StaticData/productFile";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import Imageoverlay from "../ImageOverlay/Imageoverlay";
import "./ProductCard.scss";
const ProductCard = ({ item }) => {
  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,
    lightboxData,
    calculateDiscount,
    onclickOpenImageLightBox,
  } = useGlobalContext();

  item["newImage"] = item["Images"].split(",");
  // console.log(item);

  return (
    <React.Fragment>
      <li className="list-card-item">
        <div className="cardBlock">
          <div className="thumbnail-wrap">
            <Link to={`/product/${item.ID}`} className="">
              {/* {item["newImage"].map((item, index) => (
                <img key={index} src={item} className="attachment" alt="" />
              ))} */}
              <img src={item.newImage[0]} className="attachment" alt="" />
            </Link>
            <span className="onsale">Sale!</span>
          </div>
          <div className="shop-summary-wrap">
            <div className="product-category">{item.category} </div>
            <a href="/" className="product-title">
              {item.Name.substring(0, 24)}...
            </a>
            <div className="price">
              <bdi>
                ₹<span className="original"> {item["Regular price"]}</span>
              </bdi>
              <bdi>
                ₹<span className="sale">{item["Sale price"] + 5}</span>
              </bdi>
              <span className="discount">
                {calculateDiscount(
                  item["Regular price"],
                  item["Sale price"] + 5
                )}
                % off
              </span>
            </div>
            <div className="itembtn">
              <ul>
                <li className="wishlist">
                  <MdFavorite></MdFavorite>
                </li>
                <li className="bag">
                  <MdShoppingCart></MdShoppingCart>
                </li>
                <li
                  className="viewItem"
                  onClick={() => onclickOpenImageLightBox(item.ID)}>
                  <MdOutlineImage></MdOutlineImage>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ProductCard;
