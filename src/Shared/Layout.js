import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
