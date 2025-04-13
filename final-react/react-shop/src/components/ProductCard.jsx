import React from "react";
import ProductRate from "./ProductRate";
import { Link } from "react-router-dom";
import { carts } from "../data/carts";

const ProductCard = ({ product }) => {
  const counts = 5;

  return (
    <Link
      to={`/productDetail/${product.id}`}
      className="border border-black rounded p-4 flex flex-col items-center w-full md:w-[300px] xl:w-[350px]"
    >
      <p className="text-lg line-clamp-2 font-bold">{product.title}</p>
      <div className="flex-grow flex h-[200px] items-center justify-center py-3">
        <img className="h-[90%]" src={product.image} alt="" />
      </div>
      <div className="rounded flex h-[150px] w-full flex-col items-center">
        <p className="text-gray-500 line-clamp-3">{product.description}</p>
        <div className="w-full flex gap-1">
          {Array.from({ length: counts }).map((_, index) => (
            <ProductRate index={index} key={index} rate={product.rating.rate} />
          ))}
        </div>
        <div className="flex justify-between w-full items-center mt-auto">
          <p>$ {product.price}</p>
          {carts.find((cart) => cart.product.id == product.id) ? (
            <button className="border bg-gray-800 text-white active:scale-95 duration-150 border-black rounded px-4 py-2">
              Added
            </button>
          ) : (
            <button className="border active:scale-95 duration-150 border-black rounded px-4 py-2">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
