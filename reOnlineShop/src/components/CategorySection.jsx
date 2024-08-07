import React from "react";
import Container from "./Container";
import Categories from "./Categories";

const CategorySection = () => {
  return (
    <Container>
      <p className="text-xl mt-7 mb-3 text-gray-600">Product Categories</p>
      <div className="flex gap-3 overflow-x-scroll">
        <button className="border border-gray-600 px-6 py-2 bg-black text-white">
          All
        </button>{" "}
        <Categories />
      </div>
    </Container>
  );
};

export default CategorySection;
