import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      {/* ancor tag reloads and takes time */}
      <nav>
        <a href="/">Home</a>
        <a href="/hero">Hero</a>
        <a href="/state">State</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
