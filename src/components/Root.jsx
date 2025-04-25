import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import ScrollToTop from "./ScrollToTop";

export const Root = () => {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};
