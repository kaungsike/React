import React from "react";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section className="p-5">
      <p className="text-2xl mb-3">Product Categories</p>
      <div className="flex gap-3 overflow-x-scroll">
        <CategoryBtn name='all' current={true}/>
        {categories.map((category) => (
          <CategoryBtn key={category} name={category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
