import React from 'react'
import { Data, DataList } from '../../Assets/StaticData/productFile'
import ProductCard from '../../Components/ProductCard/ProductCard'




const ProductList = () => {


  console.log(DataList());
  return (
    <div className='ProductList'>
      <div className="listWrapper">
        <ul className="ProductList">
          {(Data?.sampleData.slice(0, 20)).map((item) => (
            <ProductCard key={item.ID} item={item}></ProductCard>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList