import React from "react";
import '../styles/_header.scss'

const Header = () => {
  return (
    <header className="app-header">
      <h1>Wallpaper Generator</h1>
      <p>
        Discover wallpapers for your <span>choice of devices and topics!</span>
      </p>
    </header>
  );
};

export default Header;
