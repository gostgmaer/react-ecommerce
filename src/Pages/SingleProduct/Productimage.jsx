import React from 'react'
import { useGlobalContext } from '../../States/GlobalContext/Context'
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';



const Productimage = () => {
  const { loading, singleProduct, setSingleProduct } = useGlobalContext()
  return (
    <div className='Productimage'>
      <div className="carousel" >
        <div className="carousel-inner">
        <div className="smallImages">
            <ul className='imgsmall' >
              {
                singleProduct?.newImage?.map((image, index) => {
                  return (
                    <li key={index} >   <img className="" src={image} alt={`${singleProduct.Name} ${index}`} /></li>
                  )

                })
              }
            </ul>
          </div>
          <div className="Bigitem">
            <img className="img-big" src={singleProduct?.newImage[0]} alt={singleProduct?.Name} />
            <div className='arrow'>
            <div className="arrowin" > <MdOutlineArrowBack></MdOutlineArrowBack>  </div>
            <div className="arrowin" > <MdOutlineArrowForward></MdOutlineArrowForward>  </div>
          </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Productimage