import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import useCategoryStore from "../store/useCategoryStore";

const CategoriesSection = () => {
  const title = "Product Categories";

  // const categories = [
  //   "electronics",
  //   "jewelery",
  //   "men's clothing",
  //   "women's clothing",
  // ];
  const { categories } = useCategoryStore();

  return (
    <section className="">
      <p className="text-xl mb-5">{title}</p>
      <div className="flex gap-2 overflow-x-scroll">
    
        {categories.map((catergory) => (
          <CategoriesBtn
            catergory={catergory}
            current={false}
            key={catergory.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
