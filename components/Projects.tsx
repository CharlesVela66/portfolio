import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-16 md:pt-32 pb-4'>
        <h1 className='heading'>
            Proj<span className='text-yellow-400'>ect</span>
        </h1>
        <div className='w-4/5 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src='/images/p1.jpg' alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src='/images/p2.jpg' alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src='/images/p3.jpg' alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src='/images/p4.jpg' alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src='/images/p5.jpg' alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects