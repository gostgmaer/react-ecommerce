import React, { useState } from "react";
import "./Slider.scss";

import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { data } from "../../Assets/StaticData/Data";
import SliderCard from "../inSlideCard/SliderCard";

const Slider = () => {
  const [transsession, settranssession] = useState("-100");
  const [currentSlider, setCurrentSlider] = useState(0);

  const SliderPrivious = () => {
    setCurrentSlider(
      currentSlider === 0 ? data.length - 1 : (previous) => previous - 1
    );
  };

  const SliderNext = () => {
    setCurrentSlider(
      currentSlider === data.length - 1 ? 0 : (next) => next + 1
    );
  };

  return (
    <div className="Slider">
      <div className="sliderWrapper">
        <div className="sliderItems" style={{transform:` translateX(-${currentSlider*100}vw)`}}>
        {
          data.map(item=>(
            <div className="sliderContainer">
            <img src={item.attributes.image.large} alt="" /> 
               <div className="infoContainer">
                 {/* <SliderCard></SliderCard> */}
               </div>
            
             </div>
          ))
        }
        </div>
       
       

        
    

     
      </div>
      <div className="arrow">
          <div className="arrowin" onClick={SliderPrivious}>
            <MdOutlineArrowBack></MdOutlineArrowBack>
          </div>
          <div className="arrowin" onClick={SliderNext}>
            <MdOutlineArrowForward></MdOutlineArrowForward>
          </div>
        </div>
    </div>
  );
};

export default Slider;
