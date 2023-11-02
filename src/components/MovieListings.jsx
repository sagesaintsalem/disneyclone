import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieListCard from './MovieListCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function MovieListings({genreId}) {

  const [movieListing, setMovieListing] = useState([])

  useEffect(()=>{
    getMovieByGenreId();
  },[])

  const elementPoint = useRef(null);

  const shiftLeft=(element)=>{
    element.scrollLeft-=500;
  }

  const shiftRight=(element)=>{
    element.scrollLeft+=500;
    
  }

  const getMovieByGenreId=()=> {
    GlobalApi.getMovieByGenreId(genreId)
    .then(resid=>{
      // console.log(resid.data.results)
      setMovieListing(resid.data.results.slice(0,20))
    })
  }
  return (
    <div className='relative overflow-x-auto'>
    
        <HiChevronLeft className=' bg-black/20 absolute top-40 z-10 w-11 h-11
  left-3 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftLeft(elementPoint.current)}/>
        
    
    <div ref={elementPoint} className='flex flex-row gap-4 overflow-x-auto scrollbar-none scroll-smooth px-3 py-6 mx-4 transition-all duration-200 ease-in cursor-pointer'>
      {movieListing.map((item, index)=>(
        <MovieListCard  movie={item} />
      ))}
    </div>

    
      <HiChevronRight className=' bg-black/20 absolute right-0 top-40 w-11 h-11 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftRight(elementPoint.current)} />
        
    </div>
  )
}

export default MovieListings