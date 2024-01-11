import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Red')

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
<div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'>
<button 
onClick={()=>{setColor("green")}}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>Green</button>
<button 
onClick={()=>{setColor("blue")}}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>
<button
onClick={()=>{setColor("black")}}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}>Black</button>
<button 
onClick={()=>{setColor("brown")}}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'brown'}}>Brown</button>
</div>
</div>
      </div>
  
    </>
  )
}

export default App
