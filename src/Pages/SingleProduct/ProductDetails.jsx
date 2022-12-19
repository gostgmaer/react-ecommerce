import React from "react";
import {
  MdAdd,
  MdCompare,
  MdConnectWithoutContact,
  MdFacebook,
  MdFavorite,
  MdMinimize,
  MdPlusOne,
  MdShoppingCart,
} from "react-icons/md";
import { useGlobalContext } from "../../States/GlobalContext/Context";

const ProductDetails = () => {
  const { loading, singleProduct, calculateDiscount, setSingleProduct } =
    useGlobalContext();

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
          <button className="btn btn-p">
            <MdMinimize></MdMinimize>
          </button>

          <span className="value">1</span>

          <button className="btn btn-s">
            <MdAdd></MdAdd>
          </button>
        </div>

        <div className="cardbtn">
          {" "}
          <button className="btn btn-primary px-3">
           
          <MdShoppingCart></MdShoppingCart> Add To Cart
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
        <div className="sale">$ {singleProduct?.["Sale price"]}</div>
        <div className="regular">$ {singleProduct?.["Regular price"]}</div>
        <span className="discount">
          {calculateDiscount(
            singleProduct?.["Regular price"],
            singleProduct?.["Sale price"]
          )}{" "}
          % Off
        </span>
      </div>
    );
  };

  return (
    <div className="ProductDetails">
      <div className="detailsWrapper">
        <div className="productTitle">{singleProduct?.Name}</div>
        {/* <ReviewBlock></ReviewBlock> */}
        <PriceBlock></PriceBlock>
        <p className="description">{singleProduct?.["Short description"]}</p>
        {/* <div className='attributes'>

          </div> */}

        <div className="quantity-block">
          <QuantityCart></QuantityCart>
        </div>
        <div className="favrite">
         <div> <MdFavorite></MdFavorite> <span>Add to Wishlist </span></div> <div><MdCompare></MdCompare> <span>Add to Compare</span></div>
        </div>
        <div className="socialShareBlock">
          <strong className="text-dark mr-2">Share on:</strong>
          <div className="socialIcons">
            <a className="socialText" href="/">
              <MdFacebook></MdFacebook>
            </a>
            <a className="socialText" href="/">
             
            </a>
            <a className="socialText" href="/">
              <MdFacebook></MdFacebook>
            </a>
            <a className="socialText" href="/">
              <MdFacebook></MdFacebook>
            </a>
            <a className="socialText" href="/">
              <MdFacebook></MdFacebook>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
