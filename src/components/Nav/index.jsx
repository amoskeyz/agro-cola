import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
// import HireMeIcon from '../../assets/HireMeIcon';
import Image from '../../assets/logo.png';
import Image2 from '../../assets/logo_green.png';
import './Nav.scss';
// import Hamburger from '../Hamburger';
// import Dropdown from '../Dropdown';

const Nav = ({ scroll }) => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, []);

//   const [dropdown, setDropdown] = useState(false);
//   const handleDropdown = (state) => {
//     setDropdown(state);
//   };
  return (
    <div>
    {scroll ? (scrollY >= 699 &&
    <Slide top>
    <div className="navbar-wrap-scroll">
      <div className="navbar">
        <button type="button">
          <img src={Image2} alt="icon"/>
        </button>
        <div className="navbar__nav-links">
          <span><NavLink to="/">Vision</NavLink></span>
          <span>Techology</span>
          <span>Experience It</span>
          <span>Sign In</span>
        </div>
        {/* <Hamburger close={dropdown} handleDropdown={handleDropdown} /> */}
      </div>
      <div className="dropdown-wrap">
        {/* <Dropdown close={dropdown} /> */}
      </div>
    </div>
    </Slide>
    ) : (
    <div className="navbar-wrap">
      <div className="navbar">
        <button type="button">
          {/* <span>BULK SMS APP</span> */}
          <img src={Image} alt="icon"/>
        </button>
        <div className="navbar__nav-links">
          <span><NavLink to="/">Vision</NavLink></span>
          <span>Techology</span>
          <span>Experience It</span>
          <span>Sign In</span>
        </div>
        {/* <Hamburger close={dropdown} handleDropdown={handleDropdown} /> */}
      </div>
      <div className="dropdown-wrap">
        {/* <Dropdown close={dropdown} /> */}
      </div>
    </div>)
  }
  </div>
  );
};

export default Nav;
