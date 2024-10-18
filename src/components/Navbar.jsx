import React from 'react'

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-around  p-5 bg-slate-500 text-white">
        <div className="logo">Let's Go</div>
        <ul className='flex gap-[20px]'>
            <li className='list-none'>Home</li>
            <li className='list-none'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar
