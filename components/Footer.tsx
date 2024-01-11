import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-32 pb-16 bg-[#02050a]'>
        <div className='grid border-b-[1px] pb-24 border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-4/5 mx-auto gap-12 '>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <MapIcon className='md:w-24 md:h-24 w-12 h-12 text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Address</h1>
                    <p className='text-[17px] w-11/12 text-white opacity-60'>Queretaro, Mexico</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <DevicePhoneMobileIcon className='md:w-24 md:h-24 w-12 h-12 text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Phone</h1>
                    <p className='text-[17px] w-11/12 text-white opacity-60'>+526461014839</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <EnvelopeIcon className='md:w-24 md:h-24 w-12 h-12 text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Send Me An Email</h1>
                    <p className='text-[17px] w-11/12 text-white opacity-60'>carlosed.velasco@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='w-4/5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-8 md:mb-0 text-white opacity-20'>
                Carlos Velasco 2024 | All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer