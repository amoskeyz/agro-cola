import React from 'react';
import Fade from 'react-reveal/Fade';
import './Card.scss';


const Card = ({ image, title, details, color, duration}) => {
  return (
    <Fade duration={duration}>
    <div className="Card" style={{backgroundColor: color}}>
        <img src={image} alt=""/>
        <div className="details">
        <div className="title">
        {title}
        </div>
        <div className="details">
        {details}
        </div>
        </div>
        <div className="read">Read more</div>
    </div>
    </Fade>
  );
}

export default Card;
