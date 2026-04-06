import React from "react";
import "../header/header.css";
import "./sidebar.css";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hero">Hero</Link>
        <Link to="/state">State</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
