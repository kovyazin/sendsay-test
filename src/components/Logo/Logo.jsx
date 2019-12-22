/* Import libraries */
import React from 'react';

/* Import styles */
import './Logo.css';

/* Import images */
import logo from './logo.svg';

const Logo = props => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
