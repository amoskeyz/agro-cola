import React from 'react';
import './Screen.scss';
import Image from '../../assets/Screenshot.jpg'

const ScreenShot = () => {
  return (
    <div className="Screen">
        <img src={Image} />
    </div>
  );
}

export default ScreenShot;
