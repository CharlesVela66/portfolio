import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className='w-full fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-4/5 mx-auto h-full'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                WEB
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>About</div>
            <div className='nav-link'>Services</div>
            <div className='nav-link'>Projects</div>
            <div className='nav-link'>Contact</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-8 cursor-pointer text-yellow-300'/>
            </div>
        </div>
    </div>
  )
}

export default Nav