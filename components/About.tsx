import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#121121] pb-12 pt-16 md:pt-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-12 items-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-4'> 
                    ABOUT ME
                </h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-12 leading-8 capitalize mb-12 font-bold text-white'> 
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
                <div className='mb-12 flex items-center md:space-x-10'>
                    <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                    <p className='text-[19px] text-slate-300 w-4/5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde aut porro distinctio nulla eum architecto pariatur repellat maiores totam facilis, laboriosam mollitia. Totam voluptas, dolorem consequuntur illo odit esse!
                    </p>
                </div>
                <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                    <p> Download CV</p>
                    <ArrowDownTrayIcon className='w-[1.6rem]h-[1.7rem] text-black'/>
                </button>
            </div>
            <div className='lg:w-[500px] mx-auto md:mx-0 mt-8 lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image src= "/images/about.jpg" alt='user' layout='fill' objectFit='contain' className='relative z-[11] w-full h-full object-contain'/>
                <div className='absolute w-full h-full z-[10] bg-[#55e6a5] -top-8 -right-8'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About