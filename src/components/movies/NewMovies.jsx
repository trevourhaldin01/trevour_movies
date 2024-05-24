import { useState,useEffect } from "react";
import CardComponent from "../CardComponent";
import { fetchAllData } from "../../server/server";
import '../../styles/general.css';

export default function NewMovies() {
    const [newMovies, setNewMovies ]=useState([]);

    useEffect(() => {
      const cachedNewMovies = localStorage.getItem('newMovies');
      if (cachedNewMovies) {
        setNewMovies(JSON.parse(cachedNewMovies));
      } else {
      const fetchData = async ()=>{
        try {
            const data = await fetchAllData();
            setNewMovies(data[1].movies);
            //cache the movies
            localStorage.setItem('newMovies', JSON.stringify(newMovies));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
      };
      fetchData(); 
    }
    }, [])
    console.log('New Movies:', newMovies); // Log the movies state
    return (
        <div>
        <h3 className="main-color mx-5 text-center">NEW MOVIES</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                <CardComponent movies={newMovies}/>
            </div>    
        </div>
       
            
        
    </div>
    )
}