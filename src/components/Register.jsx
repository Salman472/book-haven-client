import React, { use, useState } from "react";
import heroVideo from "../assets/book.mp4";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { googleSignIn, createUser, updateUser, setUser } = use(AuthContext);

  const hendleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            e.target.reset()
          })
          .catch((error) => {
            console.log(error.message);
            setUser(user)
          });
          if (result.user.accessToken) {
              Swal.fire({
                title: "Login complete! Google authentication verified",

                icon: "success",
                draggable: true,
              });
            }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // google signin
  const hendleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        if (result.user.accessToken) {
          Swal.fire({
            title: "Login complete! Google authentication verified",

            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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

            <form onSubmit={hendleRegister} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 pr-10"
                />

                {/* Toggle Button */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-gray-300 hover:text-pink-400 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
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
                onClick={hendleGoogleSignIn}
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <FcGoogle className="text-2xl" />
                <span className="font-medium text-white">
                  Continue with Google
                </span>
              </button>
            </form>

            {/* Already have an account */}
            <p className="text-center text-sm mt-6 text-gray-200">
              Already have an account?{" "}
              <Link to={"/login"} className="text-pink-300 hover:underline">
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
