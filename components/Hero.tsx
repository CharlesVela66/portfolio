import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    <div className='h-[88vh] mt-[10vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
        <Particle />
        <div className='w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
          <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'> 
                HI, I'M <span className='text-yellow-400'> CHARLIE </span>
            </h1>
            <TextEffect />
            <p className='mt-6 text-[18px] text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur explicabo iusto at enim perferendis, sunt quisquam numquam facere voluptates, ut architecto alias voluptatem blanditiis dicta eligendi quam, ratione veritatis possimus.
            </p>
            <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
              <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                <p> Download CV</p>
                <ArrowDownTrayIcon className='w-[1.6rem]h-[1.7rem] text-black'/>
              </button>
              <button className='flex items-cemter space-x-2'>
                <PlayCircleIcon className='w-16 h-16 hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
                <p className='text-[20px] font-semibold text-white mt-4'>Watch The Video</p>
              </button>
            </div>
          </div>
          <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex item-center rounded-full h-[500px]'>
            <Image src='/images/u1.jpg' alt='user' layout='fill' className='object-cover rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default Hero