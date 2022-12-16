import React from "react";
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
import { useGlobalContext } from "../../States/GlobalContext/Context";
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
  } = useGlobalContext();

  const onclickOpenImageLightBox = (id) => {
    // console.log(id);
    // let obj = products.find(data => data.id === id);
    setloading(true);
    setLightboxData(products.find((data) => data.id === id));
    // console.log(obj);
    setIsImageLitebox(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  return (
    <li className="list-card-item">
      <div className="cardBlock">
        <div className="thumbnail-wrap">
          <Link to={`/product/${item.id}`} className="">
            <img src={item.image} className="attachment" alt="" />
          </Link>
          <span className="onsale">Sale!</span>
        </div>
        <div className="shop-summary-wrap">
          <div className="product-category">{item.category} </div>
          <a href="/" className="product-title">
            {item.title.substring(0, 30)}...
          </a>
          <div className="price">
            <bdi>
              ₹<span className="original"> {item.price + 223}</span>
            </bdi>
            <bdi>
              ₹<span className="sale">{item.price}</span>
            </bdi>
            <span className="discount">
              {calculateDiscount(item.price + 223, item.price)}% off
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
              <li className="viewItem" onClick={() => onclickOpenImageLightBox(item.id)}>
                <MdOutlineImage></MdOutlineImage>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
