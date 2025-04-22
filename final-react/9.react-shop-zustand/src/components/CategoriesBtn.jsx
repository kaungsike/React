import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoriesBtn = ({catergory : {id,name,isActive}}) => {

  const {activeCategory} = useCategoryStore();

  const handleCategoriesActive = () => {
    activeCategory(id)
  }

  return (
    <button onClick={handleCategoriesActive}
      className={` ${isActive && 'bg-gray-800 text-white'} border text-nowrap active:scale-95 rounded duration-150 border-black px-6 py-2 h-42`}
    >
      {name}
    </button>
  );
};

export default CategoriesBtn;
