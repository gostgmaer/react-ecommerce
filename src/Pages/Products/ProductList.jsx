import React from 'react'
import { Data, DataList } from '../../Assets/StaticData/productFile'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useGlobalContext } from '../../States/GlobalContext/Context'




const ProductList = () => {
  const { singleProduct, products,productID} = useGlobalContext()

  // console.log(DataList());
  return (
    <div className='ProductList'>
      <div className="listWrapper">
        <ul className="ProductList">
          {(products?.data?.slice(0, 20))?.map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList