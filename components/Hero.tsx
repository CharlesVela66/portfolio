/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import ResumeButton from './ResumeButton'

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
            <ResumeButton />
          </div>
          <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex item-center rounded-full h-[500px]'>
            <Image src='/images/u1.jpg' alt='user' layout='fill' className='object-cover rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default Hero