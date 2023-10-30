import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {GoDotFill} from "react-icons/go"
import { useState, useEffect } from 'react';

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function TVSeries() {


    const [myTVList, setMyTVList] = useState([]);

    const [myCurrentIndex, setMyCurrentIndex] = useState(1);

    const[myNextIndex, setMyNextIndex] = useState(1)
    
    const[myPrevIndex, setMyPrevIndex] = useState(19)

    const[myFourthIndex, setMyFourthIndex] = useState(4)

    

    useEffect(() => {
        getTV();
    }, [])

    const allMyTV = []

    

    const getTV = () => {
        GlobalApi.getMyTV.then(res=>{
            console.log(res.data.results);
            allMyTV.push(...res.data.results)
        }).then(
            setMyTVList(allMyTV)
        )
    }

    const myImgArray = myTVList.map(show => IMAGE_URL + show.backdrop_path)
    const myImgArrayShort = myImgArray.slice(0, 10)

    console.log(allMyTV)
    console.log(myImgArray)

  
    const prevSlide = () => {
        const isFirstSlide = myCurrentIndex === 0;
        const newIndex = isFirstSlide ? myImgArray.length-1: myCurrentIndex-1;
        setMyCurrentIndex(newIndex);
        setMyPrevIndex(newIndex-1)
        setMyNextIndex(newIndex+1)
        setMyFourthIndex(newIndex+2)
    }


    const nextSlide = () => {
        const isLastSlide = myCurrentIndex === myImgArray.length -1;
        const newIndex = isLastSlide ? 0: myCurrentIndex+1;
        setMyCurrentIndex(newIndex);
        setMyPrevIndex(newIndex-1)
        setMyNextIndex(newIndex+1)
        setMyFourthIndex(newIndex+2)

    }
    
  
    

  return (
    <>
    <div className='text-3xl text-white font-semibold m-auto px-3 py-3'>
        <h2>TV Series</h2>
    </div>



    <div className='flex h-[410px] w-screen  py-6 px-3 '>

    <div className='bg-black/20 absolute bottom-[-74%]  -translate-x-0 translate-y-[-5%] left-3 text-3xl rounded-full p-2 text-white  cursor-pointer z-50' onClick={prevSlide}>
                <HiChevronLeft />
            </div>

            <div className="flex absolute right-[1%] top-[90%] py-7 z-50">
              <div className='flex text-xl cursor-pointer'>
              {myImgArrayShort.map((item, index) => (
                <GoDotFill className={`${
                    index === myCurrentIndex ? "text-white" : "text-gray-500"
                  }`}/>
              ))}
              </div>
            </div>
            
            
            <div className='bg-black/20 absolute bottom-[-74%] -translate-x-0 translate-y-[-5%] right-3 text-3xl rounded-full p-2 text-white  cursor-pointer z-50' onClick={nextSlide}>
                <HiChevronRight />
            </div>

            <div className='flex gap-3 transition-all duration-500 w-screen z-0'>

            <div  className='relative '>
                    <img src={myImgArrayShort[myPrevIndex]} className='w-screen h-[235px] rounded-2xl bg-cover '/>

                    <div className='hover:bg-black/40 hover:text-white text-center font-semibold absolute top-0 py-5 h-[235px] text-white/0 bg-black/0 w-full text-xl rounded-xl' > 
                    <h2 className='py-24'>{myTVList[myPrevIndex].name}</h2>
                    </div>
                </div>

                <span  className='relative '>
                    <img src={myImgArrayShort[myCurrentIndex]} className='w-screen h-[235px] rounded-2xl bg-cover '/>

                    <div className='hover:bg-black/40 hover:text-white text-center font-semibold absolute top-0 py-5 h-[235px] text-white/0 bg-black/0 w-full text-xl rounded-xl' > 
                    <h2 className='py-24'>{myTVList[myCurrentIndex].name}</h2>
                    </div>
                </span>

                <span  className='relative '>
                    <img src={myImgArrayShort[myNextIndex]} className='w-screen h-[235px]  rounded-2xl bg-cover '/>

                    <div className='hover:bg-black/40 hover:text-white text-center font-semibold absolute top-0 py-5 h-[235px] text-white/0 bg-black/0 w-full text-xl rounded-xl' > 
                    <h2 className='py-24'>{myTVList[myNextIndex].name}</h2>
                    </div>
                </span>

                <span  className='relative '>
                    <img src={myImgArrayShort[myFourthIndex]} className='w-screen h-[235px] rounded-2xl bg-cover '/>

                    <div className='hover:bg-black/40 hover:text-white text-center font-semibold absolute top-0 py-5 h-[235px] text-white/0 bg-black/0 w-full text-xl rounded-xl' > 
                    <h2 className='py-24'>{myTVList[myFourthIndex].name}</h2>
                    </div>
                </span>

            </div>
        </div>

        

    </>
  )
}

export default TVSeries