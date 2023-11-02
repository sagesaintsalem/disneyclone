import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';
import TVShow from './TVShow';

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function TVSeries() {


    const [myTVList, setMyTVList] = useState([]);

    

    

    useEffect(() => {
        getTV();
    }, [])

  

    

    const getTV = () => {
        GlobalApi.getMyTV.then(res=>{
            setMyTVList(res.data.results)}
        )
    }

    const myImgArray = myTVList.map(show => IMAGE_URL + show.backdrop_path)
   
    const elementPoint = useRef(null);

  const shiftLeft=(element)=>{
    element.scrollLeft-=500;
  }

  const shiftRight=(element)=>{
    element.scrollLeft+=500;
    
  }
    
  
    

  return (
    
     <>
     <div className='text-3xl text-white font-semibold m-auto px-3 py-2'>
     <h2>TV Series</h2>
    </div>



    <div className='relative overflow-x-auto '>

    <div className='bg-black/20 absolute top-40 z-10 w-11 h-11
  left-3 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftLeft(elementPoint.current)}>
                <HiChevronLeft />
            </div>

            <div ref={elementPoint} className='flex flex-row gap-4 overflow-x-auto scrollbar-none px-3 py-6 transition-all duration-200 ease-in cursor-pointer'>
      {myTVList.map((item, index)=>(
        <TVShow show={item} />
      ))}
    </div>
            
            
            <div className='bg-black/20 absolute right-0 top-40 w-11 h-11 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftRight(elementPoint.current)} >
                <HiChevronRight />
            </div>

            
        </div>

        

 </>
 
  )
}

export default TVSeries