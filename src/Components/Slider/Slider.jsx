import React from 'react'
import './Slider.scss'

import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md'

const Slider = () => {
  return (
    <div className='Slider'>
      <div className="sliderWrapper">
        <div className='sliderContainer'></div>

        <div className='arrow'>
          <div className="arrowin"> <MdOutlineArrowBack></MdOutlineArrowBack>  </div>
          <div className="arrowin"> <MdOutlineArrowForward></MdOutlineArrowForward>  </div>

        </div>
      </div>
    </div>
  )
}

export default Slider