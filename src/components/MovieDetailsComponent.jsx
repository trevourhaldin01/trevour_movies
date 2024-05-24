import React from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import '../styles/general.css'
import Skeleton , {SkeletonTheme} from "react-loading-skeleton";

export default function MovieDetailsComponent({details, similarMovies}) {
    const movies = similarMovies;
    const yearConverter= (date) =>{
        const releasedDate = date;
        const year = (new Date(releasedDate)).getFullYear();
        return year;
    }

   // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match && match[1];
  };
    const video_id = extractVideoId(details.youtube_trailer);
    const opts = {
       
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
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
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="mx-5">
            <h1 className="text-center main-color mt-3">{details.title || <Skeleton />}</h1>
            
            <div className=" video-responsive">
                <YouTube videoId={video_id} opts={opts} />
            </div>
            <div className="row"> 
                <div className="my-5 col-auto">
                    <img src={details.backdrop_path || <Skeleton />} alt="backdrop image" className="img-fluid d-flex justify-content-center align-items-center" style={{height:"50vh"}}/>
                </div>
                <div className="col my-5 px-2 border border-top-0 border-dark rounded">
                    <h3 className="fw-bold main-color">{details.title || <Skeleton />}</h3>
                    <h6>
                      {details.vote_average ? `${details.vote_average}/10` : 'NO RATING'}
                    </h6>
                    <p className="text-secondary">{details.overview || <Skeleton />}</p>
                    <p className="text-secondary  my-0">Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Movie</p>
                    <p className="text-secondary my-0">Genre:&nbsp;&nbsp;&nbsp;&nbsp;{details.genres.join(', ') || <Skeleton />}</p>
                    <p className="text-secondary my-0">Release Date:&nbsp;&nbsp;&nbsp;&nbsp;{details.release_date || <Skeleton />}</p>
                   <Link to={`${details.sources[0].link}`} style={{textDecoration:"none"}}><p className="main-color my-0">Source 1:&nbsp;&nbsp;&nbsp;&nbsp;{details.sources[0].source || <Skeleton />}</p></Link> 
                    
                </div>
            </div>
            {/*slider*/}
            <h1 className="main-color text-center">Similar Movies</h1>
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
        </SkeletonTheme>
    )

    

}