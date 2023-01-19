import React from "react";
import { Link } from "react-router-dom";
import "./category.scss";

const Category = () => {
  return (
    <div className="Category">
      <div className="Categories">
        <div className="col">
          <div className="row">
            <img
              src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
              alt=""
            />
            <Link className="link" to={`products`}>
              Sale
            </Link>
          </div>{" "}
          <div className="row">
            {" "}
            <img
              src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
              alt=""
            />
            <Link className="link" to={`products`}>
              MAN
            </Link>{" "}
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
              alt=""
            />
            <Link className="link" to={`products`}>
              women
            </Link>{" "}
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
                  alt=""
                />
                <Link className="link" to={`products/4`}>
                  New Session
                </Link>{" "}
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
                  alt=""
                />
                <Link className="link" to={`products/5`}>
                  Shoes
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            {" "}
            <img
              src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
              alt=""
            />
            <Link className="link" to={`products/6`}>
              Accessories
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
