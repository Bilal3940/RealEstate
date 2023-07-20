import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container paddings innerWidth flexCenter">
        {/* left */}
        <div className="f-left flexColStart">
          <img src="./ESLogo.png" alt="" width={200} />
          <sapn className="secondaryText">
            © 2023 ES. All rights reserved.
            <br />
            CrewInnovations.co@gmail.com
            <br />
          </sapn>
        </div>
        {/* right*/}
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Privacy Policy | Terms of Service
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
