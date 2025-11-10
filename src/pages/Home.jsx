import React from 'react';
import Hero from '../components/Hero';
import LatestBooks from '../components/LatestBooks';
import TopRating from '../components/TopRating';
import AboutSection from '../components/AboutProject';
import { Toaster } from 'react-hot-toast';


const Home = () => {
    return (
        <div>
           
            <Hero/>
            
            <LatestBooks/>
            <TopRating/>
            <AboutSection/>
            
        </div>
    );
};

export default Home;