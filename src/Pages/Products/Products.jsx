import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { cleanQueryparam } from "../../Utility/APICALL/InvokeAPI";
import LeftFilter from "./LeftFilter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import "./Products.scss";
import TopSort from "./TopSort";

const Products = () => {
  const id = useParams().id;

  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,
    getfeatureData,
    getCategoriesData,avaliability,
    lightboxData,
    filterPrice,
    sortproduct,
    caterory,
    calculateDiscount,
  } = useGlobalContext();

  const newParams = {
    "[filters][categories][title][$eq]": caterory,
    "[filters][regularPrice][$gte]": filterPrice,
    "[filters][isstock][$eq]": avaliability,
    "[filters][regularPrice][$lte]": 10000,
    "[filters][isSale][$eq]": id==='sale' ? true : "",
    sort: [sortproduct],
  };

  cleanQueryparam(newParams);

  useEffect(() => {
    getfeatureData(newParams);
  }, [id, caterory, filterPrice, sortproduct,avaliability]);
  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div className="Products">
      <div className="productWrapper">
        <div className="row">
          <div className="col">
            <LeftFilter></LeftFilter>
          </div>

          <div className="col col-lg">
            <div className="sort">
              <TopSort></TopSort>
            </div>
            <div className="productList">
              <div className="productListItems">
                <ProductList></ProductList>
              </div>
              <div className="productPagination">
                <Pagination></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
