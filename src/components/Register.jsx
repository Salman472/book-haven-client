import React from 'react';
import heroVideo from "../assets/book.mp4";
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
const Register = () => {
    return (
         <div className="hero">
              <video src={heroVideo} autoPlay loop muted className="relative h-[750px]">
                <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
              </video>
              <div className="contant">
                 <div className="flex justify-center items-center min-h-screen mt-14 p-8">
      <div className="relative w-full max-w-md bg-transparent border border-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl px-10 py-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-4 mt-5">
          Create an Account ✨
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500  to-purple-500  hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
          <div className="flex items-center my-2">
                      <div className="flex-grow h-px bg-white/20"></div>
                      <span className="px-2 text-sm text-gray-300">OR</span>
                      <div className="flex-grow h-px bg-white/20"></div>
                    </div>
          
                    {/* Google Login */}
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FcGoogle className="text-2xl" />
                      <span className="font-medium text-white">Continue with Google</span>
                    </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-sm mt-6 text-gray-200">
          Already have an account?{" "}
          <Link to={'/login'}  className="text-pink-300 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
              </div>
            </div>
    );
};

export default Register;