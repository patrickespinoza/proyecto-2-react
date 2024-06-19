import { useState } from "react"

export default function App () {

const [todos,setTodos] = useState([])
const [text, setText] = useState("")

function addTodo () {
  setTodos([
    ...todos, text ])
}

function removeTodo (idxToRemove, ) {
  // todos.splice(idxToRemove, 1)
  // setTodos([...todos])
  const newTodos = todos.filter((todo,idx)=> idx !== idxToRemove)
  setTodos(newTodos)
}

function onSubmit (event) {
  event.preventDefault()
  addTodo()
  setText("")
}

  return (
    <main className="w-full min-h-screen flex flex-col">
      <form className=" flex flex-row gap-2 justify-center p-5" onSubmit={onSubmit}>

    <input className="p-2 rounded-md text-black w-full max-w-screen-sm" 
    type="text" 
    placeholder="ingresa una tarea" 
    value={text}
    required
    onChange={(event) => setText(event.target.value)}
    />
    <button 
    className="bg-white text-black px-4 rounded-md"
    >+ Add</button>

      </form>

      <div className="max-w-screen-sm mx-auto w-full p-4 flex flex-col gap-1">
        {
          todos.length === 0 && <p className="text-white/50">No hay tareas pendientes 🤓 </p>
        }
        {todos.length > 0 && todos.map((todo, idx) => {
            return (
              <div key={`todo-${idx}`} className="bg-white/5 rounded-sm p-4 flex flex-row justify-between">
                <span className="select-none">{todo}</span>
                <span className="text-red-500  hover:bg-white  rounded-md cursor-pointer p-1 size-7 text-center items-center " onClick={() => removeTodo(idx)}>X</span> 
                </div>
            )
          })}
      </div>
    </main>
  )
  
}