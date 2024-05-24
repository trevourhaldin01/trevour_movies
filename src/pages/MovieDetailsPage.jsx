import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../server/server';
import Navbar from '../components/Navbar';
import '../styles/general.css'
import MovieDetailsComponent from '../components/MovieDetailsComponent';

import Footer from '../components/Footer';
import Loader from '../components/Loader';


export default function MovieDetailsPage() {
const {id} = useParams();
console.log(id)


const [movieDetails, setMovieDetails] = useState();
const [similarMovies, setSimilarMovies] = useState();

useEffect(()=>{
  const fetchMovieDetails =async ()=> {
    try {
       const data = await getMovieById(id)
       
       console.log('movie data:',data)
       setMovieDetails(data.movie)
       setSimilarMovies(data.similarMovies)
    } catch (error) {
      console.log("error fetching movie:",error);
    }
  }
   fetchMovieDetails();
},[id])

  return(
    <div>
      {movieDetails ? (
        <div>
          <Navbar />
          <MovieDetailsComponent details={movieDetails} similarMovies={similarMovies}/>
          
          
         
        </div>
      ) : (
        <div className='d-flex justify-content-center '>
          <Loader />
        </div>
      )}
      <Footer />
    </div>
  )
}