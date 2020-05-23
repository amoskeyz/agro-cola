import React from 'react';
import './Welcome.scss';
import Nav from '../Nav';
import Image from '../../assets/person1.png';
import Image2 from '../../assets/secaj.png';

const Welcome = () => {
  return (
    <div className="Welcome">
      <Nav />
    <div className="welcome">
      <div className="Welcome__info">
        <div className="caption">Welcome To AgroCola</div>
        <div className="gg">
          <div className="tryi">
          Digital Agriculture for tomorrows leaders
          </div>
        </div>
        </div>
        <img src={Image} alt=""/>
      </div>
      <div className="scatter">
      <img src={Image2} alt=""/>
      </div>
    </div>
  );
}

export default Welcome;
