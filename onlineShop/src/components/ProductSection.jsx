import React from "react";
import ProductCart from "./ProductCart";
import Container from "./Container";
import products from "../data/products";

const ProductSection = () => {


  return (
    <section className="px-5">
      <Container>
        <p className="text-2xl mb-3">Available Product List</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
