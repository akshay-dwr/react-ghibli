import React from 'react'
import MovieItem  from './MovieItem'

const MovieGrid = ({ movies, isLoading}) => {
    return isLoading ? (    
        <h1>Loading...</h1>
    ) : (        
        <section className="cards">
        {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
    </section>
    )
}

export default MovieGrid
