import React from 'react';
import heroVideo from "../assets/book.mp4";
const Register = () => {
    return (
         <div className="hero">
              <video src={heroVideo} autoPlay loop muted className="relative h-screen">
                <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
              </video>
              <div className="contant">
                <h1 >Register form</h1>
              </div>
            </div>
    );
};

export default Register;