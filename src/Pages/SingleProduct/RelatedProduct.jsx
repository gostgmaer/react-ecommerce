import React from 'react'
import { products } from '../../Assets/StaticData/Data'
import { Data } from '../../Assets/StaticData/productFile'

import ProductCard from '../../Components/ProductCard/ProductCard'
import { useGlobalContext } from '../../States/GlobalContext/Context'


const RelatedProduct = ({ id }) => {
  const { singleProduct } = useGlobalContext()
  return (
    <div className='RelatedProduct'>
      <div className="reatedheading">Related Product { }</div>
      <ul className="relatedProductwrapper">
        {(Data.sampleData.filter((data) => data?.Categories === singleProduct?.Categories)).slice(0, 8).map((item) => <ProductCard key={item.ID} item={item} ></ProductCard>)}
      </ul>

    </div>
  )
}

export default RelatedProduct