const IMAGE_URL="https://image.tmdb.org/t/p/original";

function SliderCard({sliderfilm}) {
  return (
    <>
        <img src={IMAGE_URL+sliderfilm.backdrop_path} className='grow hover:scale-110 transition-all duration-300 rounded-2xl border-[2px] border-gray-600
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800 bg-cover w-[700px] h-80' />
    </>
  )
}

export default SliderCard