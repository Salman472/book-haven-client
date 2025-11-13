import axios from "axios";
import React, { useEffect, useState } from "react";
import Contributor from "./Contributor";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  console.log(contributors);
  useEffect(() => {
    axios("http://localhost:3002/all-books")
      .then((data) => {
        console.log(data.data);
        setContributors(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {contributors.map((contributor) => (
        <Contributor key={contributor._id} contributor={contributor} />
      ))}
    </div>
  );
};

export default Contributors;
