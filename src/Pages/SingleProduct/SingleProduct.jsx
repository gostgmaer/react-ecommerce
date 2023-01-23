import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Assets/StaticData/Data";
import { Data } from "../../Assets/StaticData/productFile";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import ProductDetails from "./ProductDetails";
import SingleProductimage from "./Productimage";

import ProductTabContainer from "./ProductTabContainer";
import RelatedProduct from "./RelatedProduct";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const id = Number(useParams().id);

  // @ts-ignore
  const { loading, singleProduct,setproductID, setSingleProduct } = useGlobalContext();

  useEffect(() => {
    setproductID(id)
    setSingleProduct(...Data.sampleData.filter((data) => data.ID === id));
  }, [id]);

  return (
    <div className="SingleProduct">
      <div className="productWrapper">
        <div className="row rowTop">
          <div className="col">
          <SingleProductimage></SingleProductimage>
          </div>
          <div className="col">
            <ProductDetails
           
              ></ProductDetails>
          </div>
        </div>
        <div className="row">
          <ProductTabContainer></ProductTabContainer>
        </div>
        <div className="row">
          <RelatedProduct></RelatedProduct>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
