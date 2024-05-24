import React from "react";
import Navbar from "../components/Navbar";
import TrendingMovies from "../components/movies/TrendingMovies";
import NewMovies from "../components/movies/NewMovies";
import AnimationMovies from "../components/movies/AnimationMovies";
import TrendingShows from "../components/shows/TrendingShows";
import SciFiMovies from "../components/sci-fi/SciFiMovies";
import Footer from "../components/Footer";
import '../App.css';
import '../styles/general.css';
import LandingSection from "../components/LandingSection";

export default function HomePage(){
    return (
        <div className="body">
            <Navbar />
            <div className="col-md-12" id="content" >
                <LandingSection />
                <TrendingMovies />
                <NewMovies />
                <TrendingShows />
                <AnimationMovies />
                <SciFiMovies />
                
            </div>
            <Footer />
        </div>
    )
}