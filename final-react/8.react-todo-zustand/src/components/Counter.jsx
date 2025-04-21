import React, { useState } from 'react'
import useCounterStore from '../store/useCounterStore';

const Counter = () => {

    // const [count, setCount] = useState(0);

    console.log(useCounterStore());

    const {count,resetCount,increaseCount,decreaseCount} = useCounterStore();

    const handleReset = () => {
        resetCount();
    }

    const handleIncrement = () => {
        // setCount(count + 1);
        increaseCount();
    }

    const handleDecrement = () => {
        // setCount(count - 1);
        decreaseCount();
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <div className="text-5xl font-semibold text-gray-800 mb-6">{count}</div>
        <div className="flex justify-between gap-4">
          <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
            -
          </button>
          <button onClick={handleReset} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400 transition">
            Reset
          </button>
          <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter