import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-20 py-6'>
      <p className='font-light text-2xl'>CV</p>
      <ul className='flex space-x-3'>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li className='underline'>Download CV</li>
      </ul>
    </nav>
  )
}

export default Navbar