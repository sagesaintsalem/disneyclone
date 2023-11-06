const IMAGE_URL="https://image.tmdb.org/t/p/original";

function SliderCard({sliderfilm}) {
  return (
    <div className="grow hover:scale-110 transition duration-300 relative justify-center items-center ">
       <span className="opacity-0 hover:opacity-100 absolute  z-10 top-14 inset-0.5 rounded-2xl w-full h-full py-56">
       <h1 className=" font-bold  bg-black/50 text-center text-3xl ">{sliderfilm.title}</h1>
       <p className="  bg-black/50 text-center ">{sliderfilm.overview}</p>
       </span>
        
        <img src={IMAGE_URL+sliderfilm.backdrop_path} className=' rounded-2xl border-[2px] border-gray-600
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800 bg-cover h-[500px] w-[800px] max-w-none max-h-none'  />
    </div>
  )
}

export default SliderCard