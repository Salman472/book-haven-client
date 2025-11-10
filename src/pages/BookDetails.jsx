import React, { use,  useState } from "react";
import { useNavigate, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../constext/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Send } from "lucide-react";

// fetching comment 
const userPrommise=fetch('http://localhost:3002/new-comment').then(res=>res.json())
const BookDetails = () => {
  const navigate = useNavigate();
  const book = useLoaderData();
  const {user}=use(AuthContext)
const initData=use(userPrommise)
console.log(initData);
const [comments,setComments]=useState(initData)
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Book not found.
      </div>
    );
  }

  // Add new comment
 const hendleComment=(e)=>{
  e.preventDefault()
  const comment=e.target.comment.value
  console.log(comment);
  const commentInfo={
    text:comment,
    userPhoto:user.photoURL,
    name:user.displayName
  }
  console.log(commentInfo);
  axios.post('http://localhost:3002/new-comment',commentInfo)
  .then(data=>{
    console.log(data.data);
    if(data.data.insertedId){
      toast.success('Your Comment Successfully Receved!');
      commentInfo._id=data.data.insertedId
      const newComment=[commentInfo,...comments]
      setComments(newComment)
    }
  })
  .catch(error=>{
    console.log(error.message);
  })
 }

 
 

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 mt-18">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-lg hover:opacity-90 transition"
      >
        ← Back to Collection
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6"
      >
        {/* Book Cover */}
        <motion.img
          src={book.coverImage}
          alt={book.title}
          className="w-full md:w-64 h-80 object-cover rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Book Info */}
        <div className="flex-1 text-white">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            {book.title}
          </h1>
          <p className="text-gray-400 mb-4">by {book.author}</p>

          <div className="flex gap-4 mb-4">
            <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              {book.genre}
            </span>
            <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {book.rating}
            </span>
          </div>

          <p className="text-gray-300 mb-6">{book.summary}</p>

          <p className="text-gray-400 mb-4">
            Contributed by: <span className="text-white">{book.userEmail}</span>
          </p>

          {/* Actions */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
              Add to Favorites
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
              Share
            </button>
          </div>
        </div>
      </motion.div>

      {/* Comment Section */}
      <div className="mt-10 bg-gray-900 rounded-2xl p-6 shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Comments {comments.length}</h2>

        {/* Add Comment */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6 w-[100%]">
          <form onSubmit={hendleComment} className=" w-full grid grid-cols-12 gap-2">
            <input
            name="comment"
            type="text"
            placeholder="Write a comment..."
            className="flex-1 col-span-9 bg-gray-800 px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none"
            // value={newComment}
            // onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            // onClick={handleAddComment}
            className="col-span-3 bg-gradient-to-r flex justify-center items-center gap-1 from-indigo-500 to-purple-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Submit <Send className="h-5 w-6"/>
          </button>
          </form>
        </div>

        {/* Comments List */}
        {comments.length === 0 ? (
          <p className="text-gray-400">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment._id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img className="h-8 w-8 rounded-full" src={comment.userPhoto} alt="" />
                  <p className="font-semibold">{comment.name}</p>
                </div>
                <p className="text-gray-300">{comment.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
    <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#4ade80',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#f87171',
              color: 'white',
            },
          },
        }}
      />
    </>
   
    
  );
};

export default BookDetails;
