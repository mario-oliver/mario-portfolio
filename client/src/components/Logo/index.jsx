import './index.scss';
import logo from '../../assets/images/logo.svg';

import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={logo} alt="S" />
    </div>
  );
};

export default Logo;
