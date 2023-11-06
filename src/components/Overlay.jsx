import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function Overlay({isOpen, onClose, children}) {
    

  return (
   <div onClick={onClose}>
    {
        isOpen ? (
            <div className=" absolute z-10 inset-0 bg-cover bg-gradient-to-r from-sky-950/90 via-blue-800 to-indigo-600/90  w-[1890px] h-[380px]" onClick={onClose} >
                
                <div className='flex flex-row my-4 justify-evenly'>
                    <div>
                        <h1 className='text-3xl font-bold pb-2 '>{children.title} {children.name}</h1>
                       <div className='w-[470px] '>
                       <p className='text-lg'>{children.overview}</p>
                       </div>
                    </div>
                    <div>
                    <img src={IMAGE_URL+children.backdrop_path} className='w-[610px] opacity-80 rounded-xl' />
                    </div>
                    <AiOutlineClose onClick={onClose} className='text-3xl justify-end '/>
                </div>
                
            </div>
        ) : null
    }
   </div>
   

    
  )
}

export default Overlay