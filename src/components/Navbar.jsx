import React from "react";
import {Link} from 'react-router-dom';
import svgImage from '../assets/vector/default-monochrome.svg'
import '../styles/general.css'

export default function Navbar() {
    return (
        <div className="navbar navbar-expand-lg border-bottom border-dark rounded   mx-5 my-2" style={{boxShadow: "0px 25px 19px 0px rgba(0,0,0,0.1)"}}>
            <div className="container-fluid ">
                
                <img src={svgImage} alt="" style={{width:"6rem"}} className=" navbar navbar-brand"/>
                <button className="navbar-toggler main-color-bg bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <div className="">
                <ul className="navbar-nav mb-2  mb-lg-0">
                    <li className="nav-item me-2">
                    <Link to={'/'}  style={{textDecoration:"none"}}>
                        <a className=" active main-color" aria-current="page" style={{textDecoration:"none"}} >Home</a>
                    </Link>
                    </li>
                    <li className="nav-item me-2">
                    <Link to={'/movies'}  style={{textDecoration:"none"}}>
                        <a className="  main-color" aria-current="page" style={{textDecoration:"none"}} >Movies</a>
                    </Link>
                    </li>
                    <li className="nav-item me-2">
                   
                        <a className="  main-color" aria-current="page" style={{textDecoration:"none"}} >Shows</a>
                    
                    </li>
                    <li className="nav-item me-2">
                    <Link to={'/search_movie'}  style={{textDecoration:"none"}}>
                        <a className="  main-color" aria-current="page" style={{textDecoration:"none"}} >Search Movie</a>
                    </Link>
                    </li>    
                </ul>
                </div>
                <div className="ms-auto">
                    <a href="https://github.com/trevourhaldin01/trevour_movies" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github fw-bold main-color fs-2"></i>
                    </a>
                    
                    
                </div>
                
                
                
                </div>
            </div>
        </div>
    )
}