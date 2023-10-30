import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {GoDotFill} from "react-icons/go";

const IMAGE_URL="https://image.tmdb.org/t/p/original";


function Slider() {

    const [movieList, setMovieList] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(1);

    const[nextIndex, setNextIndex] = useState(1);
    
    const[prevIndex, setPrevIndex] = useState(19);

    

    useEffect(() => {
        getDisney();
    }, []);

    const all3Requests = [];

    

    const getDisney = () => {
        GlobalApi.getDisneyFilms1.then(res1=>{
            console.log(res1.data.results);
            all3Requests.push(...res1.data.results)
        }).then(
            setMovieList(all3Requests)
        )
    }

    const imgArray = movieList.map(movie => IMAGE_URL + movie.backdrop_path)
    const imgArrayShort = imgArray.slice(0, 10)

    console.log(all3Requests)
    console.log(imgArray)

  
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imgArray.length-1: currentIndex-1;
        setCurrentIndex(newIndex);
        setPrevIndex(newIndex-1)
        setNextIndex(newIndex+1)
    }


    const nextSlide = () => {
        const isLastSlide = currentIndex === imgArray.length -1;
        const newIndex = isLastSlide ? 0: currentIndex+1;
        setCurrentIndex(newIndex);
        setPrevIndex(newIndex-1)
        setNextIndex(newIndex+1)
    }

   

  return (
    
        <>
        <div className='flex h-[410px] w-screen m-auto py-12 px-3  '>
            
            <div className=' bg-black/20 absolute top-[35%] -translate-x-0 translate-y-[-50%] left-3 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={prevSlide}>
                <HiChevronLeft />
            </div>

            <div className="flex absolute left-[45%] bottom-[37%] -translate-x-0 translate-y-[-10%] py-8 ">
              <div className='flex text-2xl cursor-pointer'>
              {imgArrayShort.map((item, index) => (
                <GoDotFill className={`${
                    index === currentIndex ? "text-white" : "text-gray-500"
                  }`}/>
              ))}
              </div>
            </div>
            
            <div className=' bg-black/20 absolute top-[35%] -translate-x-0 translate-y-[-50%] right-3 text-3xl rounded-full p-2 text-white  cursor-pointer' onClick={nextSlide}>
                <HiChevronRight />
            </div>

    

            <div className='flex gap-3 transition-all duration-500'>
                <img src={imgArrayShort[prevIndex]} className='grow-0 w-30 h-full rounded-2xl bg center bg-cover duration-200'></img>

                <span  className='grow relative hover:scale-125  '>
                    <img src={imgArrayShort[currentIndex]} className='w-screen h-full hover:outline shadow-lg shadow-white/50 outline-offset-3 outline-50-white/20 rounded-2xl bg-cover '/>

                    <div className='hover:bg-black/40 hover:text-white absolute bottom-0 px-4 py-3 text-white/0 bg-black/0 w-full text-xl rounded-xl' > {movieList[currentIndex].title}
                    </div>
                </span>

                <img src={imgArrayShort[nextIndex]} className='grow-0 w-30 h-full rounded-2xl bg center bg-cover duration-500'></img>
            </div>
        </div> 

        

            
        </>
  )
  
}

export default Slider