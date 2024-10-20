import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinshed, setshowFinshed] = useState(true)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      setTodos(JSON.parse(todostring))
    }
  }, [])


  const saveToLS = (pramas) => {
    localStorage.setItem("todos", JSON.stringify(pramas))
  }

  const handleAdd = () => {
      setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }])
      setTodo("")
      saveToLS([...todos, { todo, id: uuidv4(), isCompleted: false }])
  }

  const handleEdit = (e, id) => {
    let newTodo = todos.filter(item => item.id === id)
    setTodo(newTodo[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS(newTodos)
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
    saveToLS(newTodos)
  }

  const showHide=(e)=>{
      setshowFinshed(!showFinshed)
      
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto bg-violet-100 rounded-xl my-5 p-5 min-h-[80vh] w-full lg:w-1/2'>
      <h1 className='font-bold text-xl text-center'>Noto Your Daily Tasks Here</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold text-center'>Add a Todo</h2>
          <input type="text" className='w-full placeholder:text-black placeholder:text-bold placeholder:text-center hover:border border-blue-800'  placeholder='Enter Task Here' onChange={handleChange} value={todo} />
          <button onClick={handleAdd} disabled={todo.length<3}  className='disabled:bg-violet-500 bg-violet-800 hover:bg-violet-950 p-2 rounded-md text-sm text-white w-full'>Add</button>
        </div>
        <input type="checkbox" onChange={showHide} checked={showFinshed}/> Show Finished
        <h2 className='text-lg font-bold'>My Tasks</h2>
        <div className="todos">
          {todos.length === 0 && <div>No todos to show</div>}
          {todos.map(items => {
            return (showFinshed || !items.isCompleted) && <div key={items.id} className="todo flex w-full   lg:w-1/2 justify-between my-3">
              <div className='flex gap-5'>
                <input className='' type="checkbox" checked={items.isCompleted} onChange={toggleCheck} name={items.id} id={items.id} />
                <label htmlFor={items.id}>
                  <div className={items.isCompleted ? "line-through" : ""}>{items.todo}</div>
                </label></div>
              <div className="buttons flex h-full">
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
