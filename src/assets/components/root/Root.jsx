import React from "react";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="mainArea">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading....</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
