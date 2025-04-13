import React from "react";
import CategoriesBtn from "./CategoriesBtn";

const CategoriesSection = () => {
  const title = "Product Categories";

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section className="">
      <p className="text-xl mb-5">{title}</p>
      <div className="flex gap-2 overflow-x-scroll">
        <CategoriesBtn catergory={"All"} current={true} />
        {categories.map((catergory) => (
          <CategoriesBtn
            catergory={catergory}
            current={false}
            key={catergory}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
