import React from "react";
import heroVideo from "../assets/book.mp4";
import HeroBanner from "./HeroBanner";
import Heroba from "./Demo";


const Hero = () => {
  return (
    <div className="hero ">
        <div className="overlay"></div> 
      <video src={heroVideo} autoPlay loop muted className="relative h-screen">
        <div className="absolute inset-0 bg-blue-950 opacity-30">

        </div>
      </video>
      <div className="contant">
        <HeroBanner/>
        {/* <Heroba/> */}
       
      </div>
    </div>
  );
};

export default Hero;
