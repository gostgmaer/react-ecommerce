import React, { useState } from 'react'
import { useGlobalContext } from '../../States/GlobalContext/Context'
import LeftFilter from './LeftFilter'
import Pagination from './Pagination'
import ProductList from './ProductList'
import './Products.scss'
import TopSort from './TopSort'






const Products = () => {






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