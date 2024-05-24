import React, { useState } from "react"
import Slider from 'react-slick';
import {Link } from 'react-router-dom';
import '../styles/general.css'
import { searchMovie } from "../server/server";
import Loader from "./Loader";


export default function SearchMovieComponent() {
    const [query , setQuery] = useState("");
    const [movies , setMovies] =useState([]);
    const [searchedQuery, setSearchedQuery]=useState("");
    const [loading, setLoading] = useState(false);
    console.log("query:",query)
    console.log("movie search:",movies);

    const handleInputChange = (e)=>{
        setQuery(e.target.value)
    };
     
    const handleKeyPress = (e)=>{
        if (e.key ==='Enter') {
            handleSearch();
        }
    }

    const handleSearch =  async() =>{
            setLoading(true);
            try {
                const data = await searchMovie(query);
                setMovies(data.contents);
                setSearchedQuery(data.query)
                setQuery("");
            } catch (error) {
                console.error('Error fetching movies:', error);
                // Handle error state if needed
            } finally {
                setLoading(false);
               
            }
        
    }
    // Settings for react-slick carousel
     const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: false,

        centerPadding: "50px",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 1,
       
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
            variableWidth: true
            }
        }
        ]
    };

    return (
        <div className=" mx-2" >
            <div className=" m-5 d-flex flex-column  justify-content-center align-items-center "  >
                
                <input className="input p-3 rounded-3 " type="search" placeholder="Search Movie" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
                <button className=" mt-2 main-btn " type="submit" onClick={handleSearch} style={{width:'50%', borderColor:"#D3316B"}}>Search</button>
            
            </div>
            <p className="text-center main-color">You can search for movie by Title, Actor, Director or genre to get appropriate results. Enjoy!! </p>
            {loading && 
            <div className="d-flex align-items-center justify-content-center"><Loader /></div>
            }
            {!searchedQuery ? <p className="main-color text-center">Input query</p>:(
            <div className="mx-2">
            {/*slider*/}
            <h1 className="main-color text-center">{`Search Results for ${searchedQuery}`}</h1>
            <div className=' slider-container' style={{maxWidth:'100%'}}>
            <Slider {...settings}>
                {movies.map((movie)=>(
                <Link to={`/movie/${movie._id}`}>
                    <div className='slick-slide-wrapper  m-2 rounded hover' key={movie._id}>
                    <div  className="slick-slide mx-1 p-2" style={{width: '180px' }}>
                        <img src={movie.poster_path} className="img-fluid rounded " alt="..." style={{width:'100%', height:'16rem'}} />
                        <div className="mt-3">
                            <h6 className="main-color" >{movie.title}</h6>
                            <p className="main-color">{movie.contentType}</p>
                            
                        </div>
                    </div> 
                </div>
                </Link>
                )
                )
                }
            </Slider>
            
        </div>
                </div>
            )}
            
        </div>
    )
}