import React from 'react';
import './Logo.css';
import logo from './logo.svg';

const Logo= (props) => {
  return (
    <div className="logo">
      <img src={logo} alt=""/>
    </div>
  )
}

export default Logo;