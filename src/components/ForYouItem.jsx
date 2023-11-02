const IMAGE_URL="https://image.tmdb.org/t/p/original";

function ForYouItem({film}) {
  return (
    <>
        <img src={IMAGE_URL+film.poster_path} className='grow hover:scale-110 hover:outline outline-3-grey/5 w-screen h-[345px] rounded-2xl bg-cover' />
    </>
  )
}

export default ForYouItem