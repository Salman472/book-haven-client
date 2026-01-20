import { useEffect, useState } from "react";
import Review from "./Review";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews]=useState([])
    console.log('reviews',reviews);
     useEffect(() => {
    axios
      .get("https://book-haven-server-bay.vercel.app/all-comment")
      .then((res) => {
        setReviews(res.data)
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Readers Say
      </h2>

      <marquee behavior="" direction="">
        <div className="flex  gap-50 mt-10 ">
            
        {reviews.map((review) => 
          <Review key={review._id} review={review}/>
        )}
      </div>
      </marquee>
    </section>
  );
};

export default Reviews;
