import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterProvider'

const Counter = () => {
  
  const {count}  = useContext(CounterContext);
  // console.log(obj);

  return (
    <h1>{count}</h1>
  )
}

export default Counter