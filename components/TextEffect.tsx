import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Developer',
        1500,
        'Frontend Developer',
        1500,
        'Backend Engineer',
        1500,
        'Game Developer',
        1500,
        'Mobile Developer',
        1500,
        'Designer',
        1500,
        'Gym Rat',
        1500,
        'Book Lover',
        1500,
        'Sports Fan',
        1500,
        'Content Creator',
        1500,
        'Entrepeneur',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  )
}

export default TextEffect