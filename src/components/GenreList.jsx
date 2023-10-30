import React from 'react'
import MovieGenres from '../TMDBCodes/MovieGenres'
import MovieListings from './MovieListings'

function GenreList() {
  return (
    <>
        {MovieGenres.movieGenres.map((item, index)=>index<=4&&(
            <div>
                <h2 className='text-3xl font-semibold m-auto px-3 py-3 text-white'>{item.name}</h2>
                <MovieListings genreId={item.id}/>
            </div>
        ))}
    
    </>
  )
}

export default GenreList