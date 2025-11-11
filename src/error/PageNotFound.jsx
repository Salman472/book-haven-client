import React from "react";
import heroVideo from "../assets/vecteezy_oops-404-error-with-a-broken-robot-animation-flash_24815668.mp4";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { LuBookOpenText } from "react-icons/lu";
import { ArrowBigLeft, LucideBadgePlus } from "lucide-react";
const PageNotFound = () => {
  return (
    <div className="hero ">
      <div className="overlay"></div>
      <motion.div
          className=" text-center md:text-left z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.div>
      <video src={heroVideo} autoPlay loop muted className="relative h-screen">
        <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      </video>
      <div className="contant">
        <motion.div
          className=" text-center md:text-left z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* hero button */}
          <div className="flex justify-center items-center mt-10 gap-2">
            <li className="btn-outli">
              <NavLink
                to="/"
                className="font-bold text-xl
        inline-flex items-center gap-2 px-5 py-3 
         shadow-lg
        hover:scale-105 hover:shadow-xl transition-transform 
      "
              >
                <ArrowBigLeft />
                Back to Home
              </NavLink>
            </li>
          </div>
        </motion.div>
      
      </div>
    </div>
  );
};

export default PageNotFound;
