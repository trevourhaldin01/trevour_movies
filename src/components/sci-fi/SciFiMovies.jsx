import { useState,useEffect } from "react";
import ShowCardComponent from "../ShowCardComponent";
import { fetchAllData } from "../../server/server";
import '../../styles/general.css';

export default function SciFiMovies() {
    const [sciFiMovies, setSciFiMovies ]=useState([]);

    useEffect(() => {
      const cachedscifiMovies = localStorage.getItem('scifiMovies')
      if (cachedscifiMovies){
        setSciFiMovies(JSON.parse(cachedscifiMovies))
      } else {
      const fetchData = async ()=>{
        try {
            const data = await fetchAllData();
            setSciFiMovies(data[8].movies);
            //cache the movies
            localStorage.setItem('scifiMovies',JSON.stringify(sciFiMovies))
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
      };
      fetchData(); 
     }
    }, [])
    
    return (
        <div>
        <h3 className="main-color mx-5 text-center">SCI-FI TV</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                <ShowCardComponent movies={sciFiMovies}/>
            </div>    
        </div>
       
            
        
    </div>
    )
}