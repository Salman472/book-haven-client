import React, { use, useState } from "react";
import heroVideo from "../assets/book.mp4";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";
import { getFirebaseErrorMessage } from "./Error";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { googleSignIn, createUser, updateUser, setUser,user, setLoading } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // register user
  //  const hendleRegister = (e) => {
  //     e.preventDefault();
  
  //     const name = e.target.name.value;
  //     const photo = e.target.photo.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     // console.log(name, photo, email, password);
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,10}$/;
  
  //     if (!passwordRegex.test(password)) {
  //       Swal.fire({
  //         icon: "warning",
  //         title: "Weak Password ⚠️",
  //         text: "Password must contain at least one uppercase one lowercase letter and min 6 chars and max 10 chars.",
  //         confirmButtonColor: "#3085d6",
  //       });
  //       return;
  //     }
  
      
  //     createUser(email, password)
  //       .then((result) => {
  //         const user=result.user
  //       updateUser({displayName:name,photoURL:photo})
  //       .then(()=>{
  //          setUser({...user,displayName:name,photoURL:photo})
  //          setLoading(false)
  //          navigate('/')
  //       })
  //       .catch(()=>{
  //       // console.log(error);
  //       setUser(user)
  //     })
  
      
  //         Swal.fire({
  //           title: "Registation Successful",
  //           icon: "success",
  //           text: "Your password meets all requirements!",
  //           draggable: true,
  //         });
  //         navigate("/login");
  //       })
  //       .catch((error) => {
  //         const message = getFirebaseErrorMessage(error);
  //             Swal.fire("Sign up failed", message, "error");
  //       setUser(user)
  //       });
  //   };
  const hendleRegister = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const photo = e.target.photo.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,10}$/;
  if (!passwordRegex.test(password)) {
    Swal.fire({
      icon: "warning",
      title: "Weak Password ⚠️",
      text: "Password must contain at least one uppercase, one lowercase letter and be 6-10 chars long.",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  setLoading(true); // start loading

  createUser(email, password)
    .then((result) => {
      const user = result.user;
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          setLoading(false);
          Swal.fire({
            title: "Registration Successful",
            icon: "success",
            text: "Your account has been created!",
            draggable: true,
          });
          navigate("/"); // go home after successful registration
        })
        .catch((error) => {
          console.error(error);
          setUser(user); 
          setLoading(false); // make sure to stop loading on error
          Swal.fire("Error", "Failed to update profile", "error");
        });
    })
    .catch((error) => {
      setLoading(false); // stop loading on sign up error
      const message = getFirebaseErrorMessage(error);
      Swal.fire("Sign up failed", message, "error");
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
          navigate(location.state || "/")
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
            <h2 className="text-3xl font-bold text-center mb-4 mt-5 flex items-center gap-1">
              Create an Account <span className="hidden sm:flex ">✨</span>
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
                  name="photo"
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
