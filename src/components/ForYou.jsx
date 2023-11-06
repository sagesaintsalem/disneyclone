import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';
import ForYouItem from './ForYouItem';

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function ForYou() {


    const [myMovieList, setMyMovieList] = useState([]);

    

    

    useEffect(() => {
        getFilms();
    }, [])


    

    const getFilms = () => {
        GlobalApi.getDisneyFilms.then(resul=>{

            setMyMovieList(resul.data.results)
        }
        )
    }

    
    
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
        <h2>Recommended For You</h2>
    </div>



    <div className='relative overflow-x-auto'>

        <div className='bg-black/50 absolute top-40 z-10 w-11 h-11
  left-3 text-3xl rounded-full p-2 text-white cursor-pointer' onClick={()=>shiftLeft(elementPoint.current)}>
                    <HiChevronLeft />
        </div>

        <div ref={elementPoint} className='flex flex-row gap-4 overflow-x-auto scrollbar-none scroll-smooth px-3 py-6 mx-4 transition-all duration-200 ease-in cursor-pointer'>
      {myMovieList.map((item, index)=>(
        <ForYouItem film={item} />
      ))}
    </div>
                
                
        <div className='bg-black/50 absolute right-0 top-40 w-11 h-11 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftRight(elementPoint.current)}>
            <HiChevronRight />
        </div>

    </div>
    </>
    )   
  }
  


export default ForYou