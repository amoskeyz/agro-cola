import React from 'react';
import './Dropdown.scss';
import ListMenu from './ListMenu';

const Dropdown = ({ close }) => (
  <div className={`dropdown ${close ? 'dropdown__open' : ''}`}>
    <div className="dropdown__nav-arrow-wrap">
      <ListMenu text="vision" />
      <ListMenu text="Technology"/>
      <ListMenu text="Experience It"/>
      <ListMenu text="Sign In"/>
    </div>
  </div>
);

export default Dropdown;
