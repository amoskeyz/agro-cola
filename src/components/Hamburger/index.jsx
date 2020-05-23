import React from 'react';
import './Hamburger.scss';
import Burger from '@animated-burgers/burger-slide' 
// don't forget the styles
import '@animated-burgers/burger-slide/dist/styles.css' 

const Hamburger = ({ close, handleDropdown }) => (
  <div className="hamburger">
    <div
      onClick={() => handleDropdown(!close)}
      className={`hamburger-icon ${close ? 'cut-icon' : ''}`}
    >
        <Burger isOpen={close}/>
      {/* <div className="hamburger-icon__box hamburger-icon__box1">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box2">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box3">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box4">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div> */}
    </div>
  </div>
);

export default Hamburger;
