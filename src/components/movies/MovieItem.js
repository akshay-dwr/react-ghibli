import React from 'react'

const MovieItem = ({movie}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <div className='title'>
                        <h1><strong>{movie.title}</strong></h1>
                    </div>                    
                    <div className='synopsis'>
                        <p><strong>Synopsis: </strong>{movie.description.substring(0, 290)}...</p>
                    </div>
                </div>
                <div className='card-back'>
                <h1>{movie.title}</h1>
                <ul>
                    <li>
                    <strong>{movie.original_title}</strong> 
                    </li>
                    <li>
                    <strong>Released in:</strong> {movie.release_date}
                    </li>
                    <li>
                    <strong>Rotten Tomatoes:</strong> {movie.rt_score}%
                    </li>
                    <li>
                    <strong>Runtime:</strong> {movie.running_time} mins
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieItem
