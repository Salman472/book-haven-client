import axios from "axios";
import React, { useEffect, useState } from "react";
import Contributor from "./Contributor";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  console.log(contributors);
  useEffect(() => {
    axios("https://book-haven-server-bay.vercel.app/all-books")
      .then((data) => {
        console.log(data.data);
        setContributors(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
    <div>
      <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }} className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
        All Contributors
      </h2>
    </div>
    
    <marquee behavior="" direction="right">
      <div className="flex  gap-50 mt-10">
      {contributors.map((contributor) => (
        <Contributor key={contributor._id} contributor={contributor} />
      ))}
    </div>
    </marquee>
    </div>
  );
};

export default Contributors;
