import React, { Fragment, useEffect, useState } from "react";
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
// import { products } from "../../Assets/StaticData/Data";
// import { Data } from "../../Assets/StaticData/productFile";
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
  console.log(item);
  // item["newImage"] = item["Images"].split(",");

  const [hoverImage, setHoverImage] = useState(0);

  const applyHover = () => {
    setHoverImage(1);
  };

  // console.log(item);

  return (
    <React.Fragment>
      <li className="list-card-item">
        <div className="cardBlock">
          <div className="thumbnail-wrap">
            <Link to={`/product/${item.id}`} className="">
              {/* {item["newImage"].map((item, index) => (
                <img key={index} src={item} className="attachment" alt="" />
              ))} */}
              <img
                src={
                  process.env.REACT_APP_URL +
                  item?.attributes.productImage.data[0].attributes.url
                }
                className={`imagezoom`}
                onMouseOver={() => {
                  item?.attributes.productImage.data.length > 1 && setHoverImage(1);
                }}
                onMouseLeave={() => setHoverImage(0)}
                alt=""
              />
            </Link>
            <span className="onsale">Sale!</span>
          </div>
          <div className="shop-summary-wrap">
            <div className="product-category">
              {item.attributes.categories.data[0].attributes.title}{" "}
            </div>
            <a href="/" className="product-title">
              {item.attributes.title.substring(0, 24)}...
            </a>
            <div className="price">
              {item.attributes["salePrice"] ? (
                <Fragment>
                  <bdi>
                    ₹
                    <span className="original">
                      {" "}
                      {item.attributes["regularPrice"]}
                    </span>
                  </bdi>
                  <bdi>
                    ₹
                    <span className="sale">{item.attributes["salePrice"]}</span>
                  </bdi>
                  <span className="discount">
                    {calculateDiscount(
                      item.attributes["regularPrice"],
                      item.attributes["salePrice"]
                    )}
                    % off
                  </span>
                </Fragment>
              ) : (
                <bdi>
                  ₹
                  <span className="unique">
                    {" "}
                    {item.attributes["regularPrice"]}
                  </span>
                </bdi>
              )}
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
                  onClick={() => onclickOpenImageLightBox(item.id)}>
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
