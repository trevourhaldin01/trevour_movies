import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../styles/slider.css'
import '../styles/general.css'
import Skeleton from 'react-loading-skeleton'
export default function CardComponent(props) {

    const movies = props.movies

    const yearConverter= (date) =>{
        const releasedDate = date;
        const year = (new Date(releasedDate)).getFullYear();
        return year;
    }

     // Settings for react-slick carousel
    const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: false,

            centerPadding: "50px",
            speed: 500,
            slidesToShow: 7,
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
                slidesToScroll: 1,
                variableWidth: true,
                rows: 2,
                }
            }
            ]
        };

    return(
        <div className='mx-5 slider-container' style={{maxWidth:'100%'}}>
            <Slider {...settings}>
                {movies.map((movie)=>(
                <Link to={`/movie/${movie._id}`}>
                    <div className='slick-slide-wrapper  m-2 rounded hover' key={movie._id}>
                    <div  className="slick-slide mx-0  p-2" style={{width: '160px' }}>
                        <img src={movie.poster_path || <Skeleton />} className="img-fluid rounded " alt="..." style={{width:'100%', height:'12rem'}} />
                        <div className="mt-1">
                            <h6 className="main-color fs-6" >{movie.title || <Skeleton />}</h6>
                            <p className="main-color fw-light">{movie.contentType || <Skeleton />} . {yearConverter(movie.release_date || movie.first_aired)}</p>
                            
                        </div>
                    </div> 
                </div>
                </Link>
                )
                )
                }
            </Slider>
            
        </div>
        
        
    )
}