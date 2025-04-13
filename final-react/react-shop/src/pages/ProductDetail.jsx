import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "../data/products";
import ProductRate from "../components/ProductRate";

const ProductDetail = () => {
  const { id } = useParams();

  const count = 5;

  const currentProduct = products.find((product) => product.id == id);

  return (
    <div className="mb-5 mt-5 flex-grow">
      <Breadcrumb current={"Product Detail"} />
      <div className="border p-3 md:justify-between md:flex-row lg:flex-row border-black rounded md:h-96 gap-5 w-full mx-auto mt-10 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center h-full w-full md:w-[35%]">
          <img className="w-[60%]" src={currentProduct.image} alt="" />
        </div>
        <div className="md:w-[65%] w-full h-full flex flex-col items-start gap-5 p-5">
          <p className="text-2xl mb-5">{currentProduct.title}</p>
          <div className="flex gap-2 mb-5">
            {Array.from({ length: count }).map((_, index) => (
              <ProductRate
                index={index}
                key={index}
                rate={currentProduct.rating.rate}
              />
            ))}
          </div>
          <p>{currentProduct.description}</p>
          <div className="flex w-full mt-auto justify-between items-center">
            <p>$ {currentProduct.price}</p>
            <button className="border active:scale-95 duration-150 border-black rounded px-4 py-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
