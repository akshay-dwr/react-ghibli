import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import MovieGrid from './components/movies/MovieGrid';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`https://ghibliapi.herokuapp.com/films`)
      console.log(result.data)
      setMovies(result.data)
      setIsLoading(false)
    }
    fetchMovies()
  }, [])

  return <div className='container'>
    <Header/>
    <MovieGrid isLoading={isLoading} movies={movies}/>
  </div>
}

export default App;
