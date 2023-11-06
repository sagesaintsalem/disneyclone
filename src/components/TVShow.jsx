import Overlay from "./Overlay";
import { useState } from "react";

const IMAGE_URL="https://image.tmdb.org/t/p/original";

function TVShow({show}) {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
        <img onClick={()=>setIsOverlay(!isOverlay)} src={IMAGE_URL+show.poster_path} className='grow hover:scale-110 hover:outline outline-3-grey/5 w-screen h-[345px] rounded-2xl bg-cover' />
        <Overlay isOpen={isOverlay} onClose={() => setIsOverlay(!isOverlay) } children={show} /> 
    </>
  )
}

export default TVShow