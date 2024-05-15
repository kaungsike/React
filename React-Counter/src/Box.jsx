import React, { useState } from "react";

const Box = (props) => {
//   const [hide, setHide] = useState(true);

  const openBtn = () => {
    setHide(false);
  };
  const closeBtn = () => {
    setHide(true);
  };

  const toggleBtn = () => {
    props.clickBox(props.id)
  };

  return (
    <div className="grid grid-cols-2 px-5 pb-2 gap-3">
      <button
        onClick={toggleBtn}
        className="col-span-2 justify-between flex items-center px-5 border text-center bg-gray-300 py-2 gap-3 rounded active:scale-95 duration-150"
      >
                <h1 className="text-center py-4 font-bold text-xl rounded">
          {props.question}
        </h1>           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${props.hide ? '' : 'rotate-90'} duration-200`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        
      </button>
      <div
        className={` w-full rounded text-center border col-span-2 p-5 ${
          props.hide && "hidden"
        }`}
      >
        <p>
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default Box;
