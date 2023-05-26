import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import "../../styles/layout.css";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="app">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default Layout;
