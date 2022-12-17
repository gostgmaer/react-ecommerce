// @ts-nocheck
import React from "react";
import { Data } from "../../Assets/StaticData/productFile";


const QualityBlockItem = (item) => {
 
  return (
    <div className="elementor-image-box-wrapper">
      <figure className="elementor-image-box-img">
        <img
          src={item.item.image}
          className="attachment-full size-full"
          alt=""
          loading="lazy"
        />
      </figure>
      <div className="elementor-image-box-content">
        <h5 className="elementor-image-box-title">{item.item.title.substring(0,20)}</h5>
        <p className="elementor-image-box-description">{item.item.description.substring(0,55)}</p>
      </div>
    </div>
  );
};

const QualityBlock = () => {
  return (
    <div className="QualityBlock">
      <div className="elementor-row">
        {Data?.homePageQuality?.map((item) => {return(
          <QualityBlockItem key={item.id} item={item}></QualityBlockItem>
        )})}
      </div>
    </div>
  );
};

export default QualityBlock;
