import React from 'react';
import './Card.scss';


const Card = ({ image, title, details, color}) => {
  return (
    <div className="Card" style={{backgroundColor: color}}>
        <img src={image} />
        <div className="details">
        <h3>
        {title}
        </h3>
        <div className="details">
        {details}
        </div>
        </div>
        <div className="read">Read more</div>
    </div>
  );
}

export default Card;
