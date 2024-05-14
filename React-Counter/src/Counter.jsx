import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddBtn = () => {
    setCount(count + 1);
  };
  const handleSubBtn = () => {
    count > 0 &&  setCount(count - 1);
  };
  return (
    <div className="grid grid-cols-2 p-5 gap-3">
      <p className="col-span-2 border text-center py-4 font-bold text-4xl rounded">
        {count}
      </p>
      <button
        onClick={handleAddBtn}
        className="col-span-1 border text-center bg-gray-300 py-2 rounded active:scale-95 duration-150"
      >
        Add
      </button>
      <button
        onClick={handleSubBtn}
        className="col-span-1 border text-center bg-gray-300 py-2 rounded active:scale-95 duration-150"
      >
        Sub
      </button>
    </div>
  );
};

export default Counter;
