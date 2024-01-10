import React from 'react'

interface Props {
    title:string
    year:string
}

const SkillsItem = ({ title, year}: Props) => {
  return (
    <div className='mb-16 md:mb-32'>
        <span className='px-8 text-[#55e6a5] py-4 font-bol text-[18px] border-[2px] border-[#55e6a5]'>
            {year}
        </span>
        <h1 className='mt-8 font-semibold mb-4 text-[20px] sm:text-[25px] md:text-[30px] text-white uppercase'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-4/5 text-[17px] opacity-80'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, atque voluptates expedita rem quia laudantium similique aliquid! Sit praesentium, repellat optio pariatur unde maiores fugit dolore placeat tenetur, quae doloremque?
        </p>
    </div>
  )
}

export default SkillsItem