import React from 'react'
import { products } from '../../Assets/StaticData/Data'

import ProductCard from '../../Components/ProductCard/ProductCard'
import { useGlobalContext } from '../../States/GlobalContext/Context'


const RelatedProduct = ({id}) => {
  const {singleProduct} = useGlobalContext()
  console.log(singleProduct);

  return (
    <div className='RelatedProduct'>
      <div className="reatedheading">Related Product {}</div>
      <ul className="relatedProductwrapper">
        {(products.filter((data)=>data?.category===singleProduct?.['0']?.category)).map((item)=><ProductCard  key={item.id} item={item} ></ProductCard>)}
      </ul>

    </div>
  )
}

export default RelatedProduct