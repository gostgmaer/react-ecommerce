import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { singleproduct } from "../../Assets/Data/Data";
// single

import {
  MdAdd,
  MdCompare,
  MdConnectWithoutContact,
  MdFacebook,
  MdFavorite,
  MdMinimize,
  MdPlusOne,
  MdShoppingCart,
  MdYoutubeSearchedFor,
} from "react-icons/md";

import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaFlickr,
} from "react-icons/fa";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { addToCart } from "../../Redux/CartReducer";
import { useDispatch } from "react-redux";
import { SocialData } from "../../Assets/StaticData/Data";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const {
    loading,
    singleProduct,
    calculateDiscount,
    setSingleProduct,
    quantity,
    setQuantity,
    increaseQuantity,
    decressQuantity,
  } = useGlobalContext();

  const ProductSizes = () => {
    return (
      <div className="sizes">
        <strong className="text-dark mr-3">Sizes:</strong>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-1"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-1">
              XS
            </label>
          </div>
        </form>
      </div>
    );
  };

  const ProductColors = () => {
    return (
      <div className="colors">
        <strong className="text-dark mr-3">Colors:</strong>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-1"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
          </div>
        </form>
      </div>
    );
  };

  const QuantityCart = () => {
    return (
      <div className="quantity">
        <div className="cardincrease">
      
          <MdMinimize onClick={decressQuantity} className="btn btn-p"></MdMinimize>

          <span className="value">{quantity}</span>

          
            <MdAdd onClick={increaseQuantity}  className="btn btn-s"></MdAdd>
         
        </div>

        <div className="cardbtn">
          {" "}
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: singleProduct.id,
                  title: singleProduct.Name,
                  desc: singleProduct.Description,
                  image: singleProduct?.Images,
                  price: singleProduct["Regular price"],
                  quantity,
                })
              )
            }
            className="btn btn-primary px-3">
            <MdShoppingCart></MdShoppingCart>
            Add To Cart
          </button>
        </div>
      </div>
    );
  };

  const ReviewBlock = () => {
    return (
      <div className="reviewBlock">
        <div className="text-primary mr-2">
          <small className="far fa-star"></small>
        </div>
        <small className="pt-1">(99 Reviews)</small>
      </div>
    );
  };

  const PriceBlock = () => {
    return (
      <div className="priceBlock">
        {singleProduct?.data?.attributes["salePrice"] ? (
          <Fragment>
            <div className="sale">
              $ {singleProduct?.data?.attributes["salePrice"]}
            </div>
            <div className="regular">
              $ {singleProduct?.data?.attributes["regularPrice"]}
            </div>
            <span className="discount">
              {calculateDiscount(
                singleProduct?.data?.attributes["regularPrice"],
                singleProduct?.data?.attributes["salePrice"]
              )}{" "}
              % Off
            </span>
          </Fragment>
        ) : (
          <div className="price">
            $ {singleProduct?.data?.attributes["regularPrice"]}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="ProductDetails">
      <div className="detailsWrapper">
        <div className="productTitle">{singleProduct?.data?.attributes?.title}</div>
        {/* <ReviewBlock></ReviewBlock> */}
        <PriceBlock></PriceBlock>
        <p className="description">{singleProduct?.data?.attributes.shortdesc.substring(0,140)}</p>
        {/* <div className='attributes'>

          </div> */}

        <div className="quantity-block">
          <QuantityCart></QuantityCart>
        </div>
        <div className="favrite">
          <div>
        
            <MdFavorite></MdFavorite> <span>Add to Wishlist </span>
          </div>
          <div>
            <MdCompare></MdCompare> <span>Add to Compare</span>
          </div>
        </div>
        <div className="socialShareBlock">
          <strong className="text-dark mr-2">Share on:</strong>
          <div className="socialIcons">
          {SocialData.map(item=>(
             <a key={item.id} target="_blank" rel="noreferrer" className="socialText" href={item.url}>
             {item.icon}
           </a>
          ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
