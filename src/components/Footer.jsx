import React from "react";
import { Facebook, Instagram, Mail, BookOpen } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // Twitter X logo
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-700 text-white py-12 mt-20">
      {/* Overlay with slight light tint for contrast */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Column 1: Logo + Description */}
        <div>
          <div className="flex items-center mb-4">
            <Link to={"/"}>
            <img
              className="h-10 w-12 ml-3"
              src="https://i.ibb.co.com/q3SHZrK5/BOOK-HEAVEN.png"
              alt=""
            />
          </Link>
            <Link to={"/"}>
            <h1 className="flex text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">
              The <span className="font-light">Book</span>{" "}
              <span className="italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                Hoven
              </span>
            </h1>
          </Link>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your digital library to explore, read, and grow your mind.  
            Discover thousands of books and journals at your fingertips.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Books", "Categories", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-pink-400 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact + Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">Connect With Us</h3>
          <p className="text-gray-300 text-sm mb-3 flex items-center">
            <Mail className="mr-2" size={18} /> support@bookhaven.com
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#0bc3d1cc] hover:text-white transition duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#0bc3d1cc] hover:text-white transition duration-300"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#0bc3d1cc] hover:text-white transition duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 text-center text-gray-400 border-t border-white/10 pt-6 z-10">
        <p className="text-sm">
          © {new Date().getFullYear()} The Book Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
