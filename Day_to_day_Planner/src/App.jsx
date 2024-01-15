import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PlannerProvider } from './Context/PlannerContext'
import { PlannerItem } from './components/PlannerItem'
import { PlannerForm } from './components/PlannerForm'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo=(todo)=>{
      setTodos((oldVal)=>[...oldVal,{id:Date.now(),...todo}])
  }
  const updateTodo =(id,todo)=>{
      setTodos((oldValToUpdate)=> oldValToUpdate.map((v)=> v.id === id ? todo : v))
  }

  const deleteTodo =(id)=>{
    setTodos((oldValToDelete)=>oldValToDelete.filter((del)=>del.id !== id))
  }

  const toggleComplete =(id)=>{
    setTodos((toggleVal)=> toggleVal.map((t)=> t.id === id ? {...t,completed: !t.completed} : t))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <PlannerProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <PlannerForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <PlannerItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </PlannerProvider>
  )
}

export default App
