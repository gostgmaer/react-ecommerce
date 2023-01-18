import React from "react";
import "./SlideCard.scss";
const SliderCard = () => {
  return (
    <div className="banner-link">
    <div className="text-inner">
      <h3 className="alt-font">It has Finally started…</h3>

      <h1 className="h-large uppercase">
        <span>
          <strong>HUGE SALE</strong>
        </span>
      </h1>
      <h2 className="uppercase">
        <span>
          UP TO <strong>70% OFF</strong>
        </span>
      </h2>
    </div>
    <div className=" divider">
      <a href="/" target="_self" className="btn white is-outline">
        <span>Shop men</span>
      </a>
      <a href="/" target="_self" className="btn white is-outline">
        <span>Shop women</span>
      </a>
      <a href="/" target="_self" className="button btn white is-outline">
        <span>Shop all</span>
      </a>
    </div>
  </div>
  );
};

export default SliderCard;
