import React from 'react';
import '../styles/global.css';
import mindflayerLogo from './mindflayer.jpg';


const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-text">
        <span>Mind</span>
        <div className="logo">
        <img src={mindflayerLogo} alt='logo'/>
      </div>
        <span>Filer</span>
      </div>
    </div>
  );
};

export default Header;