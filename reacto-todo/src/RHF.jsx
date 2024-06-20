import { useState } from "react"
import {useForm } from "react-hook-form"
import clsx from "clsx"


export default function App () {

const [todos,setTodos] = useState([])
// const [text, setText] = useState("")

const {register, handleSubmit, formState: {errors, isValid, isSubmitted},
reset}
 = useForm()
 


function removeTodo (idxToRemove, ) {
  // todos.splice(idxToRemove, 1)
  // setTodos([...todos])
  const newTodos = todos.filter((todo,idx)=> idx !== idxToRemove)
  setTodos(newTodos)
}
// data es un objeto que contiene en cada propiedad el valor de cada input del formulario
function onSubmit (data) {
setTodos([
    ...todos, data
    
])
reset()
}

  return (
    <main className="w-full min-h-screen flex flex-col">
    <p className="W-full bg-teal-600 text-black font-bold text-center p-2">TO-DO react-hook-form</p>
      <form className=" flex flex-row gap-2 justify-center p-5" onSubmit={handleSubmit(onSubmit)}>

    <input className={clsx("p-2 rounded-md text-black w-60 max-w-screen-sm", {
    "border-2 border-red-500 bg-red-300": errors.Nombre
    })} 
    type="text" 
    placeholder="Nombre" 
    required
    {...register("Nombre", {
        required: {value: true, message: "campo requerido"},
        minLength: {value: 3, message: "Minimo 3 caracteres"},
        maxLength: {value: 180, message: "Maximo 180 caracteres"},


    })}
    
    />
     <input className={clsx("p-2 rounded-md text-black w-60 max-w-screen-sm", {
    "border-2 border-red-500 bg-red-300": errors.Apellido
    })} 
    type="text" 
    placeholder="Apellido" 
    required
    {...register("Apellido", {
        required: {value: true, message: "campo requerido"},
        minLength: {value: 3, message: "Minimo 3 caracteres"},
        maxLength: {value: 180, message: "Maximo 180 caracteres"},


    })}
    
    />
     <input className={clsx("p-2 rounded-md text-black w-60 max-w-screen-sm", {
    "border-2 border-red-500 bg-red-300": errors.email
    })} 
    type="text" 
    placeholder="Email" 
    required
    {...register("Email", {
        required: {value: true, message: "campo requerido"},
        minLength: {value: 3, message: "Minimo 3 caracteres"},
        maxLength: {value: 180, message: "Maximo 180 caracteres"},


    })}
    
    />
    <button 
    className=" text-black px-4 rounded-md bg-white disabled:bg-stone-400"
        // "bg-stone-400": isSubmitted ? !isValid: false,
        // "bg-white": isSubmitted ? isValid: true,
    
   disabled={isSubmitted ? !isValid: false} 
   
   >+ Add</button>

     </form>

     {errors.Nombre && (
    <p className=" text-red-500 text-center text-sm font-semibold">{errors.Nombre?.message}</p>
      )}

     {errors.Apellido && (
    <p className=" text-red-500 text-center text-sm font-semibold">{errors.Apellido?.message}</p>
      )}

      {errors.Email && (
    <p className=" text-red-500 text-center text-sm font-semibold">{errors.Email?.message}</p>
      )}

      <div className="max-w-screen-sm mx-auto w-full p-4 flex flex-col gap-1">
        {
          todos.length === 0 && <p className="text-white/50">No hay tareas pendientes 🤓 </p>
        }
         {todos.length > 0 &&
          todos.map((todo, idx) => {
            return (
                <div
                key={`todo-${idx}`}
                className="bg-white/5 rounded-sm p-4 flex flex-row justify-between"
              >
                <span className="select-none">
                   {todo.Nombre}  {todo.Apellido} - {" "}
                  {todo.Email}
                </span>
                <span
                  className="text-red-500 hover:bg-white rounded-md cursor-pointer p-1 size-7 text-center items-center"
                  onClick={() => removeTodo(idx)}
                >
                  X
                </span>
              </div>
            )
          })}
      </div>
    </main>
  )
  
}