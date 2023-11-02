import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function Overlay({isOpen, onClose, children}) {
    

  return (
   <>
    {
        isOpen ? (
            <div className=" absolute z-10 bg-cover bg-blue-900/95  w-[1860px] h-[360px]" onClick={onClose} >
                
                <div className='flex flex-row my-3 justify-evenly'>
                    <div>
                        <h1 className='text-3xl font-bold '>{children.title}</h1>
                       <div className='w-80 '>
                       <p className='text-lg'>{children.overview}</p>
                       </div>
                    </div>
                    <div>
                    <img src={IMAGE_URL+children.backdrop_path} className='w-[610px] opacity-80'/>
                    </div>
                    <AiOutlineClose onClick={onClose} className='text-3xl justify-end '/>
                </div>
                
            </div>
        ) : null
    }
   </>
   

    
  )
}

export default Overlay