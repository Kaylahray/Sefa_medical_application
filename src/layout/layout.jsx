import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Content/Navbar";
const Layout = () => {
  return (
    <div className="bg-bgColor min-h-screen font-AvenirMeduim">
      <Navbar />
      <div className="content conatiner px-4 md:px-0 md:w-[85%] max-w-7xl mx-auto py-4 ">
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    </div>
  );
};

export default Layout;
