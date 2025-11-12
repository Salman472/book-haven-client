import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router";
import DetailsPage from "./loading/DetailsPage";
import { Tooltip } from "react-tooltip";
import { NotebookPen, Trash } from "lucide-react";
import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";
import EmptyBook from "../components/EmptyBook";
import UpdateBook from "../components/UpdateBook";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [sortOption, setSortOption] = useState("normal"); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {user}=use(AuthContext)
//   console.log(books);
  // data load
  
  useEffect(() => {
    axios
      .get(`http://localhost:3002/my-books?email=${user?.email}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBooks(res.data);
          setOriginalBooks(res.data);
        }
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, [user?.email]);

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    setDropdownOpen(false);

    let sorted = [...books];
    if (option === "asc") {
      sorted.sort((a, b) => (parseFloat(a.rating) || 0) - (parseFloat(b.rating) || 0));
    } else if (option === "desc") {
      sorted.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else {
      sorted = [...originalBooks]; 
    }

    setBooks(sorted);
  };

  const hendleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    console.log('hendle delete btn clicked', id);
    axios.delete(`http://localhost:3002/delete-book/${id}`)
    .then(data=>{
        console.log('after delete data',data);
        if(data.data.deletedCount){

             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const exitingBooks=books.filter(book=>book._id!==id)
    setBooks(exitingBooks)
        }
    })
    .catch(error=>{
        console.log(error);
    })
   
  }
});
  }

  // modal open button function
  const modalRef=useRef(null)
  const hendleOpenModal=()=>{
    modalRef.current.showModal()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-14">
      {/* Title */}
      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mb-6 text-center text-3xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Book Collection
      </motion.h2>

      {/* Dropdown Sort Button */}
     <div className=" flex justify-between items-center">
         
<div class="text-center my-12">
  <h1 class="text-2xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hidden sm:flex">
    My Books Collection : {books.length}
  </h1>
  <h1 class="text-xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:hidden">
    My Books  : {books.length}
  </h1>
 
</div>


      <div className="flex justify-end mb-4 relative">
        <motion.button
        data-tooltip-id="sortBtn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition"
        >
          {sortOption === "asc"
            ? "Sort: Rating ↑"
            : sortOption === "desc"
            ? "Sort: Rating ↓"
            : "Sort: Normal"}
        </motion.button>
            <Tooltip id="sortBtn" place="top" delayShow={100} delayHide={500}  border={'2px solid black'} style={{color:'black',backgroundColor:'white',fontWeight:'bold'}}>Sort By Rating</Tooltip>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 z-10"
          >
           
            <ul>
              <li
                onClick={() => handleSort("normal")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-t-lg"
              >
                🟢 Normal
              </li>
              <li
                onClick={() => handleSort("asc")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                🔼 Rating Ascending
              </li>
              <li
                onClick={() => handleSort("desc")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-b-lg"
              >
                🔽 Rating Descending
              </li>
            </ul>
          </motion.div>
        )}
      </div>
     </div>

     {
        books.length===0 ? <EmptyBook/>:<div className="overflow-x-auto">
        <table className="min-w-full text-white border border-gray-700 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="px-4 py-3">Cover</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Genre</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <motion.tr
                  key={book._id || index}
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="border-b border-gray-700  hover:bg-gray-800 transition "
                >
                  <td className="px-4 py-3">
                    <motion.img
                      src={book?.coverImage}
                      alt={book?.title}
                      className="w-16 h-20 object-cover rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold text">{book?.title}</td>
                  <td className="px-4 py-3 text">{book?.author}</td>
                  <td className="px-4 py-3 text">{book?.genre}</td>
                  <td className="px-4 py-3 text" >{book?.rating}</td>
                  <td className="px-4 py-3 text ">
                    <div className="flex justify-center items-center gap-2 h-full">
                        <Link onClick={hendleOpenModal}>
                    <motion.button
                    
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 10px rgba(147, 51, 234, 0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 py-1 px-4 rounded-lg font-medium hover:opacity-90 transition text-white flex items-center gap-1 "
                    ><NotebookPen className="h-4 w-4" />
                     Update
                    </motion.button></Link>

                    {/* open model to update product */}

                      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-white">
    {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p> */}
   
    <UpdateBook/>
  </div>
</dialog>



                    <Link onClick={()=>hendleDelete(book?._id)}>
                    <motion.button
                    
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 10px rgba(147, 51, 234, 0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 py-1 px-4 rounded-lg font-medium hover:opacity-90 transition text-white flex items-center gap-1 "
                    ><Trash className="h-4 w-4" />
                      Delete
                    </motion.button></Link>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr >
                
                  <td
                  colSpan="6"
                  className="text-centerpy-6 text-gray-400 font-medium"
                >
                  <h1 className="text-center  flex justify-center items-center h-[50vh]"><DetailsPage/></h1>
                </td>
               
                
              </tr>
            )}
          </tbody>
        </table>
      </div>
     }
    </div>
  );
};

export default MyBooks;
