import React, { useState } from "react";

const Box = () => {
  const [hide, setHide] = useState(true);

  const openBtn = () => {
    setHide(false);
  };
  const closeBtn = () => {
    setHide(true);
  };

  const toggleBtn = () => {
    setHide(!hide);
  };

  return (
    <div className="grid grid-cols-2 p-5 gap-3">
      <button
        onClick={toggleBtn}
        className="col-span-1 flex items-center justify-center border text-center bg-gray-300 py-2 gap-3 rounded active:scale-95 duration-150"
      >
        Toggle 
        {hide ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 duration-200 rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        )}
        
      </button>
      {/* <button
        onClick={openBtn}
        className="col-span-1 border text-center bg-green-500 py-2 rounded active:scale-95 duration-150"
      >
        Open
      </button>
      <button
      onClick={closeBtn}
        className="col-span-1 border text-center bg-red-500 py-2 rounded active:scale-95 duration-150"
      >
        Close
      </button> */}
      <div
        className={` w-full rounded text-center border col-span-2 p-5 ${
          hide && "hidden"
        }`}
      >
        <h1 className="w-full text-center py-4 font-bold text-4xl rounded">
          Content Box
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae harum
          suscipit soluta eum. Nisi, molestias omnis dignissimos deleniti
          tempore itaque ipsa architecto illo magnam officiis. Illo, pariatur
          rem? Minima, fuga?
        </p>
      </div>
    </div>
  );
};

export default Box;
