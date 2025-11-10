import React, { use, useState } from "react";
import heroVideo from "../assets/book.mp4";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";
import { getFirebaseErrorMessage } from "./Error";
const Login = () => {
  const { googleSignIn,logInUserWithEmailAndPass,setLoading } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // const navigate=useNavigate()
const location=useLocation()
const navigate=useNavigate()
  // sign in with email and password
  const hendleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    logInUserWithEmailAndPass(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
        navigate(location.state || '/')
      })
      .catch((error) => {
        setLoading(false);
      const message = getFirebaseErrorMessage(error);
      Swal.fire("Sign up failed", message, "error");
      });
    // console.log(email,password);
    e.target.reset();
  };
  const hendleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        if (result.user.accessToken) {
          Swal.fire({
            title: 'Login complete! Google authentication verified',
            
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
      <video src={heroVideo} autoPlay loop muted className="relative h-screen">
        <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      </video>

      <div className="contant">
        <div className="flex justify-center items-center mt-14 pt-8 pb-4">
          <div className="relative w-full max-w-md bg-transparent border border-white/30 backdrop-blur-xl rounded-2xl shadow-2xl px-10 py-5 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">
              Welcome Back 👋
            </h2>

            <form onSubmit={hendleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

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
                <div className="text-right mt-1">
                  <a
                    href="#"
                    className="text-sm text-indigo-400 hover:text-pink-400 hover:underline transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500  to-purple-500  hover:scale-105 transition-transform duration-300"
              >
                Log In
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
                  Login with Google
                </span>
              </button>
            </form>

            <p className="text-center text-sm mt-6 text-gray-200">
              Don’t have an account?{" "}
              <Link to={"/register"} className="text-pink-300 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
