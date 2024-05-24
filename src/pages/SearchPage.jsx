import React from "react";
import SearchMovieComponent from "../components/SearchMovieComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/general.css'

export default function SearchPage() {
    return(
        <div className="body ">
            <div className="mx-2" id="content">

                <Navbar />
                <SearchMovieComponent />  
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
