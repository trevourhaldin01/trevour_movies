import { Link } from 'react-router-dom'
import '../styles/landing.css'
import '../styles/general.css'
import svgImage from '../assets/vector/default-monochrome.svg'
export default function LandingSection() {
    return (
        <div className="headerSection d-flex align-items-center  flex-column p-5">
            <img src={svgImage} alt="" style={{width:"15rem"}} />
            <h1 className='main-color fw-bold text-center pt-5 pb-3'>Watch HD Movies Online for free  </h1>
            <Link to={'/search_movie'}>
            <button className='main-color-bg text-light border-0 rounded p-2'>SEARCH MOVIE</button>
            </Link>
            
        </div>
    )
}