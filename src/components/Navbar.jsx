import {
  ArrowDownLeft,
  BadgePlus,
  BookOpenText,
  BookText,
  House,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { use, useState } from "react";
import { Link, Navigate, NavLink } from "react-router";
import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";


const Navbar = () => {
  const { user, logOutUser,loading } = use(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdownBtn = () => setDropdownOpen(!dropdownOpen);

  const links = (
    <>
      <li className="list ">
        <NavLink className={"flex items-center gap-[2px]"} to="/">
          <House className="h-4 w-4" /> Home
        </NavLink>
      </li>
      <li className="list">
        <NavLink className={"flex items-center gap-[2px]"} to={"/all-books"}>
          <BookOpenText className="h-4 w-4" />
          All Books
        </NavLink>
      </li>
      <li className="list">
        <NavLink className={"flex items-center gap-[2px]"} to={"/add-book"}>
          <BadgePlus className="h-4 w-4" />
          Add Book
        </NavLink>
      </li>
      <li className="list">
        <NavLink className={"flex items-center gap-[2px]"} to="/my-books">
          <BookText className="h-4 w-4" />
          My Books
        </NavLink>
      </li>
    </>
  );
  const linkss = (
    <>
      <li className="linkss">
        <NavLink className={"flex items-center gap-[2px]"} to="/">
          <House className="h-4 w-4" />
          Home
        </NavLink>
      </li>
      <li className="linkss">
        <NavLink className={"flex items-center gap-[2px]"} to={"/all-books"}>
          <BookOpenText className="h-4 w-4" />
          All Books
        </NavLink>
      </li>
      <li className="linkss">
        <NavLink className={"flex items-center gap-[2px]"} to="/add-book">
          <BadgePlus className="h-4 w-4" />
          Add Book
        </NavLink>
      </li>
      <li className="linkss">
        <NavLink className={"flex items-center gap-[2px]"} to="/my-books">
          <BookText className="h-4 w-4" />
          My Books
        </NavLink>
      </li>
    </>
  );

  // log out user
  const hendleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error.message);
          });
        Swal.fire({
          title: "Logged out successfully!",
          text: "You have safely signed out.",
          icon: "success",
        });
      }
    });
    
  };
  if(loading){
    return <div className="flex justify-center items-center"><span className="loading loading-dots loading-xl text-error"></span>
</div>
  }

  return (
    <div className=" ">
      <nav className="navbar  mx-auto fixed top-0   z-10 flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-3 items-center relative lg:hidden">
            {/* Profile Button */}
            <button
              onClick={toggleDropdownBtn}
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-[-4px]"
            >
              <span className="sr-only">Open user menu</span>
              {dropdownOpen ? <X /> : <Menu />}
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute top-12 left-0 z-50 w-44 text-base list-none divide-y divide-gray-100 rounded-lg shadow-sm bg-white/30 backdrop-blur-3xl ">
                <h1 className=" text-xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">
                  The <span className="font-light">Book</span>{" "}
                  <span className="italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                    Hoven
                  </span>
                </h1>
                <ul className="py-4 space-y-5">{linkss}</ul>
              </div>
            )}
          </div>

          <Link to={"/"}>
            <img
              className="h-10 w-12 ml-3"
              src="https://i.ibb.co.com/q3SHZrK5/BOOK-HEAVEN.png"
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <h1 className="hidden lg:flex text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">
              The <span className="font-light">Book</span>{" "}
              <span className="italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                Hoven
              </span>
            </h1>
          </Link>
        </div>

        <ul className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hidden lg:flex">
          {links}
        </ul>

        <div className="flex gap-3 items-center relative">
          {/* Profile Button */}
          {user ? (
            <>
              <button
                onClick={toggleDropdown}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt="user"
                />
              </button>
              <Link
                onClick={hendleLogOut}
                className="btn-primary flex items-center hidden sm:flex "
              >
                Log Out
                <LogIn className="h-5 w-5" />
              </Link>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-12 right-0 z-50 w-44 text-base list-none divide-y divide-gray-100 rounded-lg shadow-sm bg-white/30 backdrop-blur-3xl ">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.displayName}
                    </span>
                    <span className="block text-sm text-gray-700 truncate dark:text-gray-200">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-indigo-600 hover:bg-gray-100 dark:hover:bg-[#0bc3d1cc] dark:text-gray-200 dark:hover:text-black"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#0bc3d1cc] dark:text-gray-200 dark:hover:text-black"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link
                        onClick={hendleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#0bc3d1cc] dark:text-gray-200 dark:hover:text-black flex items-center gap-[2px] sm:hidden "
                      >
                        Log Out
                        <LogIn className="h-5 w-5" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 ">
                <Link to={"/login"} className="btn-primary flex items-center ">
                  LogIn
                  <ArrowDownLeft className="h-4 w-5 rotate-180 font-semibold" />
                </Link>
                <Link
                  to={"/register"}
                  className="btn-primary flex items-center "
                >
                  Register
                  <ArrowDownLeft className="h-4 w-5 rotate-180 font-semibold" />
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
