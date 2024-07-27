import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section className="p-5">
      <Container>
        <p className="text-2xl mb-3">Product Categories</p>
        <div className="flex gap-3 overflow-x-scroll">
          <CategoryBtn name="all" current={true} />
          {categories.map((category) => (
            <CategoryBtn key={category} name={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
