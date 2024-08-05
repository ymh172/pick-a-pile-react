import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../pages/Menu";

const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
