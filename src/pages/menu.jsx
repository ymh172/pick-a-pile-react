import React from "react";
import CartSection from "../components/CartSection";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <CartSection />
    </div>
  );
};

export default Menu;
