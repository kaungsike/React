import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSub = () => {
    setCount(count-1);
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>
  );
};

export default Counter;
