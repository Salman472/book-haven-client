import React from "react";
import heroVideo from "../assets/book.mp4";

const Hero = () => {
  return (
    <div className="hero ">
                     
      <video src={heroVideo} autoPlay loop muted className="relative h-screen">
        <div className="absolute inset-0 bg-blue-950 opacity-30">

        </div>
      </video>
      <div className="contant">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Hero;
