import React, { useEffect, useState } from "react";
import { productCard, strapiData } from "../../Assets/StaticData/Data";
import { Data } from "../../Assets/StaticData/productFile";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import InvokeAPI from "../../Utility/APICALL/InvokeAPI";
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
  const [products, setProducts] = useState(null);

  const getfeatureData = async (param) => {
    const res = await InvokeAPI(
      "products",
      "get",
      "",
      "",
      { populate: "*" },
      ""
    );
    //  console.log(res);
    setProducts(res);
  };
  // eslint-disable-next-line no-undef
  useEffect(() => {
    getfeatureData();
    console.log(products);

    productClean();
  }, []);
  useEffect(() => {
    productClean();
  }, [products]);

  const productClean = () => {
    const data = products?.data.filter((fItem) => fItem.attributes.isfeatured === title);
    console.log(data);
  };

  

  return (
    <div className="productlistcontainer">
      <div className="heading">
        <h2>{title === true ? "Featured" : "Advance"} Products</h2>
      </div>

      <div className="ecommerce-pList">
        <ul className="ProductList">
          {products?.data.filter((fItem) => fItem?.attributes.isfeatured === title).slice(0,4).map((item) => (
              <ProductCard key={item.id} item={item}></ProductCard>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
