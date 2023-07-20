import { useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
const Value = () => {
 
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter  v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart  v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Values we give to you</span>
          <span className="secondaryText">
            We are always ready to provide you the best services <br />
            and products that meet your needs.
          </span>
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
               const [className, setclassName] = useState(null)
              return(
              <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordian-button flexCenter">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setclassName("expanded")
                          : setclassName("collapsed")
                      }
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            )})}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
