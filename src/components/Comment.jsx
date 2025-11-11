import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../constext/AuthContext';
import axios from 'axios';
import { useLoaderData } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';

const Comment = () => {
    const {user}=use(AuthContext)
    const [comments,setComments]=useState([])
     const {_id} = useLoaderData();
     console.log(_id);
useEffect(()=>{
  axios(`http://localhost:3002/all-books/new-comment/${_id}`)
  .then(data=>{
    // console.log(data.data);
    setComments(data.data)
  })
  .catch(error=>{
    console.log(error.message);
  })
},[_id])
     // Add new comment
 const hendleComment=(e)=>{
  e.preventDefault()
  const comment=e.target.comment.value
  if(comment===""){
    return toast.success('Please write something before submitting your comment!');
  }
  // console.log(comment);
  const commentInfo={
    userPhoto:user.photoURL,
    name:user.displayName,
    bookId:_id,
    text:comment,
    
    
     
  }
  console.log(commentInfo);
  axios.post('http://localhost:3002/new-comment',commentInfo)
  .then(data=>{
    console.log(data.data);
    if(data.data.insertedId){
      toast.success('Your comment has been submitted successfully!');
      commentInfo._id=data.data.insertedId
      const newComment=[commentInfo,...comments]
      setComments(newComment)
    }
    e.target.reset()
  })
  .catch(error=>{
    console.log(error.message);
  })
 }
    return (
         <>
         <div className="mt-10 bg-gray-900 rounded-2xl p-6 shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Comments {comments?.length}</h2>

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
        {comments?.length === 0 ? (
          <p className="text-gray-400">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments?.map((comment) => (
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
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#ec4899',
              color: 'white',
              duration:1000
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

export default Comment;