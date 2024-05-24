import React from "react";
import Navbar from "../components/Navbar";
import MoviesComponent from "../components/MoviesComponent";
import Footer from "../components/Footer";
import '../App.css';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function MoviesPage(){
    return (
        
            <div className="body">
                
                <Navbar />
                
                <MoviesComponent />
                <Footer />
            </div>
        
    )
}