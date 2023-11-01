import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import {GoDotFill} from "react-icons/go";
import SliderCard from './SliderCard';

const IMAGE_URL="https://image.tmdb.org/t/p/original";


function Slider() {

    const [movieList, setMovieList] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(1);

    const[nextIndex, setNextIndex] = useState(1);
    
    const[prevIndex, setPrevIndex] = useState(19);

    

    useEffect(() => {
        getDisney();
    }, []);

    const elementPoint = useRef(null);

    const shiftLeft=(element)=>{
        element.scrollLeft-=500;
      }
    
      const shiftRight=(element)=>{
        element.scrollLeft+=500;
      }

    const getDisney = () => {
        GlobalApi.getMyFilms.then(res1=>{
            //console.log(res1.data.results);
            setMovieList(res1.data.results.slice(0,10))
        })
    }

    

 
   

  

  return (
    
    
    
    <div className='relative overflow-x-auto h-[410px] w-screen m-auto px-3  '>
        
        
            <HiChevronDoubleLeft className=' bg-black/20 absolute top-40 z-10 w-11 h-11 left-3 rounded-full p-2 text-white  cursor-pointer text-3xl' onClick={()=>shiftLeft(elementPoint.current)}/>
        

      
        
        <div ref={elementPoint} className='flex flex-row gap-8 px-3 pt-0  overflow-x-auto scrollbar-none  transition-all duration-200 ease-in cursor-pointer pb-10'>
            {movieList.map((item, index)=>(
                <SliderCard sliderfilm={item}/>
            ))}
        </div>
       
            <HiChevronDoubleRight className=' bg-black/20 absolute top-40 w-11 h-11 right-3 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={()=>shiftRight(elementPoint.current)} />
       



    </div> 

    

        
    
            
  )
  
}

export default Slider