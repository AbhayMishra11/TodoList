import React from 'react'

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between  p-5 bg-slate-800 text-white">
      <div className="logo font-bold mx-9 text-xl">Let's Go</div>
      <ul className='flex gap-[20px] mx-9'>
        <li className='cursor-pointer p-2 text-lg hover:font-bold transition-all duration-400'>Home</li>
        <li className='cursor-pointer p-2 text-lg hover:font-bold  transition-all duration-400'>My Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
