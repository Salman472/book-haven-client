import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      
        <div className="max-w-7xl ">
          <Navbar />
        </div>
     
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
