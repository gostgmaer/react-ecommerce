import React from "react";
import { productCard, products } from "../../Assets/StaticData/Data";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import Imageoverlay from "../ImageOverlay/Imageoverlay";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ title }) => {

  const { isImageLitebox, setIsImageLitebox, setLightboxData, lightboxData } =
  useGlobalContext();

  console.log(products);
  return (
    <div className="productlistcontainer">

      <div className="heading">{title} Products</div>

      <div className="ecommerce-pList">
        <ul className="ProductList">
          {products.map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))}
        </ul>
      </div>
     {isImageLitebox?<Imageoverlay></Imageoverlay>:''}
    </div>
  );
};

export default ProductList;
