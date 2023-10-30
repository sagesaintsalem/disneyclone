const IMAGE_URL="https://image.tmdb.org/t/p/original";

function MovieListCard({movie}) {
  return (
    <>
        <img src={IMAGE_URL+movie.backdrop_path} className='grow hover:scale-110 hover:outline outline-3-grey/5 w-screen h-[235px] rounded-2xl bg-cover' />
    </>
  )
}

export default MovieListCard