import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handleEdit = (e, id) => {
    let newTodo = todos.filter(item => item.id === id)
    setTodo(newTodo[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const toggleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
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
          {todos.length === 0 && <div>No todos to show</div>}
          {todos.map(items => {
            return <div key={items.id} className="todo flex w-[45%] justify-between my-3">
              <div className='flex gap-5'>
                <input type="checkbox" value={items.isCompleted} onChange={toggleCheck} name={items.id} id="" />
                <div className={items.isCompleted ? "line-through" : ""}>{items.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e) => { handleEdit(e, items.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Edit</button>
                <button onClick={(e) => { handleDelete(e, items.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm text-white mx-1'>Remove</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
