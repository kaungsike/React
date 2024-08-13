import React from 'react'
import {useState} from 'react'

const App = () => {

  const [count,setCount] = useState(0);



  return (
    <div className='w-full h-screen flex items-center flex-col justify-start pt-[100px] gap-10'>
      <h1 className='text-9xl font-bold'>{count}</h1>
      <div className='flex gap-5'>
      <button onClick={() => setCount(count+1)} className='border border-black rounded py-2 px-6 active:scale-95 duration-150'>Increment</button>
      <button onClick={() => setCount(count-1)} className='border border-black rounded py-2 px-6 active:scale-95 duration-150'>Decrement</button>
      </div>
    </div>
  )
}

export default App
