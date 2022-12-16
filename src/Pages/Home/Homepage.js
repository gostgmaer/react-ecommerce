import React from 'react'
import Category from '../../Components/CategoryBlock/Category.jsx'
import Imageoverlay from '../../Components/ImageOverlay/Imageoverlay.js'
import ProductList from '../../Components/PeoductList/ProductList.js'
import Popular from '../../Components/Popular/Popular.jsx'
import Slider from '../../Components/Slider/Slider.jsx'
import WelcomeBlock from './ShopWelcome/WelcomeBlock.js'

const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='homeWrapper'>
      <Slider></Slider>
      <Popular></Popular>
      <WelcomeBlock></WelcomeBlock>
      <Category></Category>
      <ProductList title={'Featured'} ></ProductList>
      
     
      </div>
    </div>
  )
}

export default Homepage