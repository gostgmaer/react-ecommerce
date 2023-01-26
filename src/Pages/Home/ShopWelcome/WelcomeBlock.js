import React from "react";
import { Link } from "react-router-dom";
import '../Homepage.scss'


const WelcomeBlock = () => {
  return (
    <div className="WelcomeBlock">
      <div className="col-inner text-center">
          <h2 className="uppercase">
            <span>Welcome to our Shop</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>{" "}
         <div className="welcomeBtn"> <Link
            to="/about"
           
            className="btn"
           >
            {" "}
            <span>About us</span>{" "}
          </Link>
          <Link
            to="/shop"
            target="_self"
            className="btn shop"
           >
           
            <span>Shop now</span>{" "}
          </Link></div>
        </div>
    </div>
  );
};

export default WelcomeBlock;
