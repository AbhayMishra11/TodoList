import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const handleAdd=()=>{
    setTodos([...todos,{todo,isCompleted: false}])
    setTodo("")
  } 

  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }
  const handleChange=(e)=>{
     setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto bg-violet-100 rounded-xl my-5 p-5 min-h-[80vh]'>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='w-2/5' onChange={handleChange} value={todo} />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>My Tasks</h2>
        <div className="todos">
          {todos.map(items=>{
          return <div className="todo flex">
            <div >{items.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Remove</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
