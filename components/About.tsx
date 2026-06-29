import SimpleCard from './SimpleCard'

const About = () => {
  return (
    <div className='bg-bg-secondary w-full px-20 py-10 flex flex-row justify-between gap-8'>
      <div className='w-full flex flex-col space-y-2'>
        <h2 className='text-xl text-muted'>Who I am</h2>
        <SimpleCard 
          title="A bit about myself..."
          description="Just a nerd who wants to make a difference in people&apos;s lives with great software products. A big sci-fi guy who loves to go the gym and read great books."
        />
      </div>
      <div className='w-full flex flex-col space-y-2'>
        <h2 className='text-xl text-muted'>Where I studied</h2>
        <SimpleCard 
          title="Computer Science"
          description="Tecnológico de Monterrey • 2021-2025"
          label='96 GPA  • English C1'
        />
      </div>
    </div>
  )
}

export default About