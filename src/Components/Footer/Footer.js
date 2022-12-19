import React from "react";
import './footer.scss'
const Footer = () => {
  return (
    <div className="Footer">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg">
             <p> <a className="logo" href="/">
                CodeShop
                
              </a></p>
              <div className="footer-about">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="useful-link">
                <p>Useful Links</p>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  className="img-fluid"
                />
                <ul className="use-links">
                  <li>
                    <a href="index.html">
                      <i className="fa-solid fa-angles-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i className="fa-solid fa-angles-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <i className="fa-solid fa-angles-right"></i> Gallery
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="social-links">
                <p>Follow Us</p>
                <img src="./assets/images/about/home_line.png" alt="" />
                <ul className="social-icons">
                  <li>
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i> Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg">
              <div className="address">
                <h2>Address</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  className="img-fluid"
                />
                <ul className="address-links">
                  <li className="address1">
                    <i className="fa-solid fa-location-dot"></i> Kolathur
                    ramankulam- Malappuram Dt Kerala 679338
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-phone"></i> +91 90904500112
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-envelope"></i> mail@1234567.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
