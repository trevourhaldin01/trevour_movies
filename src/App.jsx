import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchPage from "./pages/SearchPage";
import TestPage from "./pages/Test";
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/search_movie" element={<SearchPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
