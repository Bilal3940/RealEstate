import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className=" c-container paddings innerWidth flexCenter">
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We are always ready for your valuable feedback and suggestions.
          </span>

          <div className="flexCenter contact-modes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}

              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}

            <div className="flexStart row">

                 {/* first mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsInstagram size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">Global_impact</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

             
            </div>
          </div>
        </div>
        <div className="c-right ">
          <div className="image-container">
            <img src="./xdxd.jpg" alt="hello there" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
