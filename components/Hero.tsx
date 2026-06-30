import Image from 'next/image'
import Chip from './Chip';

const labels = ['Next.Js', 'React', 'Typescript', 'PostgreSQL'];

const Hero = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row mt-5 px-4 sm:px-10 md:px-20 gap-8' id="">
      <div className='w-full md:w-2/3 space-y-2'>
        <h1 className='text-2xl sm:text-3xl text-accent-dark font-medium'>Hello there 👋</h1>
        <h2 className='text-4xl sm:text-5xl md:text-7xl/tight tracking-wide'>I&apos;m Carlos Velasco, software engineer & full-stack developer</h2>
        <p className='text-lg sm:text-xl md:text-2xl font-normal'>Leading remote tech teams for 3 years, building end-to-end systems</p>
        <div className='flex flex-row flex-wrap gap-3 mt-6'>
          {labels.map((label, index) => (
            <Chip
              key={index}
              label={label}
            />
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/3 flex items-center justify-center'>
        <div className='relative size-40 sm:size-56 md:size-96 rounded-full overflow-hidden shrink-0'>
          <Image
            src="/images/profile_picture.png"
            fill
            alt='profile picture'
            loading='eager'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero