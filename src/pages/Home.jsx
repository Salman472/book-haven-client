import React from "react";
import Hero from "../components/Hero";
import LatestBooks from "../components/LatestBooks";
import TopRating from "../components/TopRating";
import AboutSection from "../components/AboutProject";
import Contributors from "../components/Contributors";
import WelcomeSection from "../components/WellCome";
import BookCategories from "../components/Categories";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className=" space-y-5 sm:space-y-10 md:space-y-16">
      <Hero />
      <WelcomeSection />
      <LatestBooks />
      <TopRating />
      <Reviews/>
      <Contributors />
      <BookCategories/>
      <AboutSection />
    </div>
  );
};

export default Home;
