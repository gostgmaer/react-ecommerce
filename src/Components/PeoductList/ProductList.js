import React from "react";
import { productCard, products } from "../../Assets/StaticData/Data";
import { Data } from "../../Assets/StaticData/productFile";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import Imageoverlay from "../ImageOverlay/Imageoverlay";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
// import productFile from 'json!'
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
// const data = require('json!../../Assets/StaticData/productFile.json');
// @ts-ignore

const ProductList = ({ title }) => {
  console.log(Data);
  const { isImageLitebox, setIsImageLitebox, setLightboxData, lightboxData } =
    useGlobalContext();

  return (
    <div className="productlistcontainer">
      <div className="heading"><h2>{title === 1? "Featured":'Advance'} Products</h2></div>

      <div className="ecommerce-pList">
        <ul className="ProductList">
          {Data.sampleData
            .filter((newData) => newData["Is featured?"] === title)
            .slice(0, 4)
            .map((item) => (
              <ProductCard key={item.ID} item={item}></ProductCard>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
