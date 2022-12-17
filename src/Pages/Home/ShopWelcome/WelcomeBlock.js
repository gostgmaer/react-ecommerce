import React from "react";
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
         <div className="welcomeBtn"> <a
            href="/"
           
            className="btn"
           >
            {" "}
            <span>About us</span>{" "}
          </a>
          <a
            href="/"
            target="_self"
            className="btn"
           >
           
            <span>Shop now</span>{" "}
          </a></div>
        </div>
    </div>
  );
};

export default WelcomeBlock;
