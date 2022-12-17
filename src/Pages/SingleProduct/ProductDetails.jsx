import React from 'react'
import { useGlobalContext } from '../../States/GlobalContext/Context'

const ProductDetails = () => {
  const { loading, singleProduct, setSingleProduct } = useGlobalContext()
  return (
    <div className='ProductDetails'>
      
    </div>
  )
}

export default ProductDetails