import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <Navbar/>
      <div className='container mx-auto my-5 p-5'>
         <div className="">
          <h1>My Tasks</h1>
         </div>
      </div>
    </>
  )
}

export default App
