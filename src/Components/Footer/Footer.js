import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About B&S Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>B&S People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Punjab</li>
              <li>Delhi</li>
              <li>Haryana</li>
              <li>Uttar pradesh</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Buy and Sell</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries North Korea - Spain - Italy</p>
        <p>Free Classifieds in India. © 2012-2021 Buy And Sell</p>
      </div>
    </div>
  );
}

export default Footer;
