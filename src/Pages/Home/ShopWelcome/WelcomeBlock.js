import React from "react";

const WelcomeBlock = () => {
  return (
    <div className="WelcomeBlock">
      <div class="col-inner text-center">
          <h2 class="uppercase">
            <span>Welcome to our Shop</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>{" "}
         <div className="welcomeBtn"> <a
            href="http://about-us?style=layout-fullscreen-fashion"
            target="_self"
            class="button primary is-outline is-small"
           >
            {" "}
            <span>About us</span>{" "}
          </a>
          <a
            href="https://flatsome3.uxthemes.com/shop/?style=layout-fullscreen-fashion"
            target="_self"
            class="button primary is-small"
           >
           
            <span>Shop now</span>{" "}
          </a></div>
        </div>
    </div>
  );
};

export default WelcomeBlock;
