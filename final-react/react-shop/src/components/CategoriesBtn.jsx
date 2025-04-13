import React from "react";

const CategoriesBtn = ({catergory, current}) => {
  return (
    <button
      className={` ${current && 'bg-gray-800 text-white'} border text-nowrap active:scale-95 rounded duration-150 border-black px-6 py-2 h-42`}
    >
      {catergory}
    </button>
  );
};

export default CategoriesBtn;
