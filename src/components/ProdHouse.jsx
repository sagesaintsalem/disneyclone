import disney from '../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import natGeo from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
import disneyVid from './../assets/videos/disney.mp4'
import marvelVid from './../assets/videos/marvel.mp4'
import natGeoVid from './../assets/videos/national-geographic.mp4'
import pixarVid from './../assets/videos/pixar.mp4'
import starwarVid from './../assets/videos/star-wars.mp4'

function ProdHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyVid
        },
        {
            id:2,
            image:pixar,
            video:pixarVid
        },
        {
            id:3,
            image:marvel,
            video:marvelVid
        },
        {
            id:4,
            image:starwar,
            video:starwarVid
        },
        {
            id:5,
            image:natGeo,
            video:natGeoVid
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-[4px] rounded-md hover:scale-105 left-[7px]
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default ProdHouse

