import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../States/GlobalContext/Context'
import LeftFilter from './LeftFilter'
import Pagination from './Pagination'
import ProductList from './ProductList'
import './Products.scss'
import TopSort from './TopSort'






const Products = () => {
  const id = (useParams().id);

  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,getfeatureData,getCategoriesData,
    lightboxData,
    calculateDiscount,
  } = useGlobalContext();

  const productsParam ={
    "[filters][categories][title][$eq]":id
  }
  const saleParam ={
    "[filters][isSale][$eq]":true
  }

  useEffect(() => {
    id==='sale'? getfeatureData(saleParam):getfeatureData(productsParam);
    getCategoriesData();
  }, [id]);
  return (
    <div className='Products'>
      <div className="productWrapper">
        <div className="row">
          <div className="col">
            <LeftFilter></LeftFilter>
          </div>

          <div className="col col-lg">
            <div className='sort'>
              <TopSort></TopSort>
            </div>
            <div className='productList'>
              <div className="productListItems"><ProductList></ProductList></div>
              <div className="productPagination"><Pagination></Pagination></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products