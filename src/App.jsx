import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  
  const handleAdd=()=>{

  } 

  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto bg-violet-100 rounded-xl my-5 p-5 min-h-[80vh]'>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='w-2/5' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>My Tasks</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet.</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
