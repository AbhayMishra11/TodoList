import React from 'react'

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between  p-5 bg-blue-700 text-white border-b border-gray-800">
      <div className="logo font-bold mt-2 lg:mx-9 text-xl">Let's Go</div>
      <ul className='flex lg:gap-[20px] lg:mx-9'>
        <li className='cursor-pointer p-2 text-lg hover:font-bold transition-all '>Home</li>
        <li className='cursor-pointer p-2 text-lg hover:font-bold  transition-all '>My Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
