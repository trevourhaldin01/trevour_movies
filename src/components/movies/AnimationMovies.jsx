import { useState,useEffect,useMemo } from "react";
import CardComponent from "../CardComponent";
import { fetchAllData } from "../../server/server";
import '../../styles/general.css';

export default function AnimationMovies() {
    const [animationMovies, setAnimationMovies ]=useState([]);

    useEffect(() => {
      const cachedAnimationMovies = localStorage.getItem('animationMovies');
      if(cachedAnimationMovies) {
        setAnimationMovies(JSON.parse(cachedAnimationMovies));
      }  else {
      const fetchData = async ()=>{
        try {
            const data = await fetchAllData();
            setAnimationMovies(data[2].movies);
            // Cache the fetched trending movies in local storage
            localStorage.setItem('animationMovies', JSON.stringify(animationMovies));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
      };
      fetchData(); 
        }
    }, [])
    
    console.log('Animation Movies:', animationMovies); // Log the movies state
    return (
        <div>
        <h3 className="main-color mx-5 text-center">ANIMATION MOVIES</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                <CardComponent movies={animationMovies}/>
            </div>    
        </div>
       
            
        
    </div>
    )
}