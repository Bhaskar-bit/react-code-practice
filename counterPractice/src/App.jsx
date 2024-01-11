import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0);
  
  const addValue =()=>{
    if (counter >= 20) {
      setCount(20);
    }
    else{
    counter = counter + 1
    setCount(counter)
    }
  }
  const removeValue =()=>{
    if (counter <= 0) {
      setCount(0)
    }
    else{
    counter = counter - 1
    setCount(counter)
    }
  }
  return (
    <>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br></br>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
