import { useState,useEffect } from "react";

import ShowCardComponent from "../ShowCardComponent";
import { fetchAllData } from "../../server/server";
import '../../styles/general.css';

export default function TrendingShows() {
    const [trendingShows, setTrendingShows ]=useState([]);

    useEffect(() => {
      const cachedTrendingShows = localStorage.getItem('trendingShows')
      if (cachedTrendingShows){
        setTrendingShows(JSON.parse(cachedTrendingShows))
      } else {
      const fetchData = async ()=>{
        try {
            const data = await fetchAllData();
            setTrendingShows(data[5].movies);
            //cache
            localStorage.setItem('trendingShows',JSON.stringify(trendingShows))
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
      };
      fetchData(); 
    }
    }, [])
    
    return (
        <div>
        <h3 className="main-color mx-5 text-center">TRENDING SHOWS</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
                <ShowCardComponent movies={trendingShows}/>
            </div>    
        </div>
       
            
        
    </div>
    )
}