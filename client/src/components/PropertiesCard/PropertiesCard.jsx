import React from "react";
import {AiFillHeart} from "react-icons/ai"
import './PropertyCard.css'
import {truncate} from "lodash"
import { useNavigate } from "react-router-dom";


const PropertiesCard = ({card}) => {
  const usenavigate = useNavigate()
  return (
    <div className="flexColStart p-card" onClick={()=>usenavigate(`../properties/${card.id}`)} >
      <AiFillHeart size={24} />
      <img src={card.image} alt="home" />
      <span className="secondaryText p-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, { length: 15})}</span>
      <span className="secondaryText">{truncate(card.description, {length:100})}</span>
    </div>
  );
};

export default PropertiesCard;
