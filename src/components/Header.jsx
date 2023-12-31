import React, {useState} from 'react'
import HeaderItem from './HeaderItem';
import dislogo from '../assets/images/dislogo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import cartoonme from '../assets/images/cartoonme.png'

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu=[
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5 w-[100vw]'>
        <div className='flex gap-8 items-center'>
            <img src={dislogo} className='w-[80px] md:w-[115px] object-cover'></img>
            <div className='hidden md:flex gap-8'>
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, index) => index<3 && (
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.map((item, index) => index>2 && (
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
                </div>:null }
            </div>
            </div>
        </div>
        <img src={cartoonme} className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header