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
    </div>
  </div>
);

export default Hamburger;
