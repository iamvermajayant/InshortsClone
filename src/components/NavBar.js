import React from "react";
import './NavBar.css';
import HamburgerSideDrawer from './HamburgerSideDrawer';

const NavBar = () => {
  return (
    <div className="Nav">
      <div className="icon">
        <HamburgerSideDrawer/>
      </div>
      <img
        style={{cursor: 'pointer'}}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshort"
        height="80%"
      />
      
    </div>
  );
};

export default NavBar;
