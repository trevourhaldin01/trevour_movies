import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { fetchAllMovies } from "../server/server";
import '../styles/general.css'


export default function MoviesComponent() {
   
    
    const  [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const data = await fetchAllMovies();
                setMovies(data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
                // Handle error state if needed
            }
        };

        fetchData();
        
    },[]);
    console.log('Movies:', movies); // Log the movies state
    return (
    
    <div>
        <h1 className="main-color mx-5">Movies Watchlist</h1>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                
                <CardComponent movies={movies}/>
                
                
            </div>
            
            
                
            
            
            
        </div>
       
            
        
    </div>
  
    )
}