import React from 'react'
import { useGlobalContext } from '../../States/GlobalContext/Context'

const Productimage = () => {
    const { loading, singleProduct, setSingleProduct } = useGlobalContext()

    console.log(singleProduct?.['0']?.image);
  return (
    <div className='Productimage'>
        <div className="productImageWrapper">
            <img src={singleProduct?.['0']?.image} alt="" />
        </div>
        <div className="imageGalary">
            
        </div>

    </div>
  )
}

export default Productimage