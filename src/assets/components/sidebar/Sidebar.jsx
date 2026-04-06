import React from "react";
import "../header/header.css";
import "./sidebar.css";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div>
      <nav>
        {/* only link wont keep track of visited link */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hero">Hero</Link>
        <Link to="/state">State</Link> */}

        {/* for track we will use NavLink */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/hero">Hero</NavLink>
        <NavLink to="/state">State</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
