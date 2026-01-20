import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories,setCategories]=useState([])
    console.log(categories);
     useEffect(() => {
    axios
      .get("https://book-haven-server-bay.vercel.app/all-books")
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        All Category
      </h2>

      <marquee behavior="" direction="">
        <div className="flex  gap-50 mt-10">
        {categories.map((category) => (
          <Category key={category._id} category={category}/>
        ))}
      </div>
      </marquee>
    </section>
    );
};

export default Categories;