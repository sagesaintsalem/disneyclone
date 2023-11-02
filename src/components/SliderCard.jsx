const IMAGE_URL="https://image.tmdb.org/t/p/original";

function SliderCard({sliderfilm}) {
  return (
    <div className="grow hover:scale-110 transition duration-300 relative justify-center items-center ">
       <h1 className="opacity-0 hover:opacity-100 absolute text-3xl z-10 top-0 inset-0.5 rounded-2xl font-bold bg-cover bg-black/50 text-center w-full py-60">{sliderfilm.title}</h1>
        
        <img src={IMAGE_URL+sliderfilm.backdrop_path} className=' rounded-2xl border-[2px] border-gray-600
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800 bg-cover h-[500px] w-[700px] max-w-none max-h-none'  />
    </div>
  )
}

export default SliderCard