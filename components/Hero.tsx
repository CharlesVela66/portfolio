import Image from 'next/image'
import Chip from './Chip';

const labels = ['Next.Js', 'React', 'Typescript', 'PostgreSQL'];

const Hero = () => {
  return (
    <div className='w-full flex flex-row mt-5'>
      <div className='w-2/3 space-y-2'>
        <h1 className='text-3xl text-accent-dark font-medium'>Hello there 👋</h1>
        <h2 className='text-7xl/tight tracking-wide'>I&apos;m Carlos Velasco, software engineer & full-stack developer</h2>
        <p className='text-2xl font-normal'>Leading remote tech teams for 3 years, building end-to-end systems</p>
        <div className='flex flex-row gap-3 mt-6'>
          {labels.map((label, index) => (
            <Chip 
              key={index}
              label={label}
            />
          ))}
        </div>
      </div>
      <div className='w-1/3 flex items-center justify-center'>
        <Image 
          src="/images/profile_picture.png"
          height={450}
          width={450}
          alt='profile picture'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Hero