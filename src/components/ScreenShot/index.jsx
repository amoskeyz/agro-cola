import React from 'react';
import './Screen.scss';
import Image from '../../assets/screens.jpg'

const ScreenShot = () => {
  return (
    <div className="Screen">
        <img className="immg" src={Image} alt=""/>
    </div>
  );
}

export default ScreenShot;
