import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/useProductsStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();

  const { categories } = useCategoryStore();

  const currentCategory = categories.find(
    (category) => category.isActive == true
  );

  console.log(products);

  return (
    <section className="my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {currentCategory.name == "all"
          ? products.map((product) => <ProductCard key={product.id} product={product} />)
          : products
              .filter((product) => product.category == currentCategory.name)
              .map((el) => <ProductCard key={el.id} product={el} />)}
      </div>
    </section>
  );
};

export default ProductSection;
