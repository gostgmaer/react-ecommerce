import React from 'react'
import Category from '../../Components/CategoryBlock/Category.jsx'
import Imageoverlay from '../../Components/ImageOverlay/Imageoverlay.js'
import NewsLetter from '../../Components/Newsletter/NewsLetter.jsx'
import ProductList from '../../Components/PeoductList/ProductList.js'
import Popular from '../../Components/Popular/Popular.jsx'
import Slider from '../../Components/Slider/Slider.jsx'
import { useGlobalContext } from '../../States/GlobalContext/Context.js'
import QualityBlock from './QualityBlock.js'
import WelcomeBlock from './ShopWelcome/WelcomeBlock.js'
import Specialoffcer from './Specialoffcer.js'

const Homepage = () => {


  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,
    lightboxData,
    calculateDiscount,
  } = useGlobalContext();
  return (
    <div className='Homepage'>
      <div className='homeWrapper'>
      <Slider></Slider>
      {/* <Popular></Popular> */}
      <WelcomeBlock></WelcomeBlock>
      <Category></Category>
      <ProductList title={true} ></ProductList>
      <Specialoffcer></Specialoffcer>
      <NewsLetter></NewsLetter>
      <QualityBlock></QualityBlock>
      
    
      </div>
    </div>
  )
}

export default Homepage