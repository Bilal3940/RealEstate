import React from "react";
import './Getstarted.css'
const Getstarted = () => {
  return (
    <section className="s-wrapper">
      <div className="s-container paddings innerWidth">
        <div className="flexColstart inner-container ">
          <span className="primaryText" >Get Started with Global Impact</span>
          <span className="secondaryText">
            Join our community of over 10,000 global impact <br /> investors and learn
          </span>
          <button className="button">
            <a href="mailto:xyz@gmail.com">Get Started</a>
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
