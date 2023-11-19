import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Properties.css";
import { color } from "framer-motion";
import {sliderSettings} from '../../utils/common'
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import useProperties from "../../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
const Properties = () => {
  const {data, isError, isLoading} = useProperties()
  if(isError){
    console.log("error")
  }
  if(isLoading){

    return <div className='flexCenter' style={{height:'60vh'}} >
      <PuffLoader
      size={100}
      color='#000'
      loading={true}

      />
    </div>
  }
  return (
    <section className="p-wrapper">
      <div className="p-container paddings innerWidth ">
        <div className="p-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Properties</span>
        </div>
        <Swiper {...sliderSettings}>
          <SwiperButtons/>
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertiesCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>  
    </section>
  );
};

export default Properties;
const SwiperButtons=()=>{
    const swiper = useSwiper()
    return(
      <div className="flexCenter p-buttons">
        <button onClick={()=>swiper.slidePrev()} >&lt;</button>
        <button onClick={()=>swiper.slideNext()} >&gt;</button>
      </div>
    )
}
