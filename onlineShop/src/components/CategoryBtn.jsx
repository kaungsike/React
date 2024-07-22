import React from "react";

const CategoryBtn = ({name,current,}) => {
  return (
    <button className={`border border-gray-600 px-3 text-nowrap py-1 rounded ${current && 'bg-black text-white'}`}>

      {name}
    </button>
  );
};

export default CategoryBtn;
