import { useState,useEffect } from "react";
import CardComponent from "../CardComponent";
import { fetchAllData } from "../../server/server";
import '../../styles/general.css';

export default function TrendingMovies() {
    const [trendingMovies, setTrendingMovies ]=useState([]);

    useEffect(() => {
      const cachedTrendingMovies = localStorage.getItem('trendingMovies');
      if (cachedTrendingMovies) {
        setTrendingMovies(JSON.parse(cachedTrendingMovies));
      } else {
        const fetchData = async ()=>{
            try {
                const data = await fetchAllData();
                const trendingMoviesData = data[0].movies;
                setTrendingMovies(trendingMoviesData);
                // Cache the fetched trending movies in local storage
                localStorage.setItem('trendingMovies', JSON.stringify(trendingMoviesData));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
          };
          fetchData(); 
      }
      
    }, [])
    console.log('Trending Movies:', trendingMovies); // Log the movies state
    return (
        <div>
        <h3 className="main-color mx-5 text-center">TRENDING MOVIES</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                <CardComponent movies={trendingMovies}/>
            </div>    
        </div>
       
            
        
    </div>
    )
}