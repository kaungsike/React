import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [num,setNum] = useState(1);

  const handleAdd = () => {
    setCount(count + num);
  }

  const handleSub = () => {
    setCount(count-num);
  }

  const handleIncreaseNum = () => {
    setNum(num+1);
  }

  const handleDecreaseNum = () => {
    setNum(num-1);
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>

      <h2>We are add or sub with : {num}</h2>

      <button onClick={handleIncreaseNum}>Increase value</button>
      <button onClick={handleDecreaseNum}>Decrease value</button>
    </div>
  );
};

export default Counter;
