import React from "react";
import ProductRate from "./ProductRate";

const ProductCard = ({ product }) => {
  const counts = 5;

  return (
    <div className="border border-black rounded p-4 flex flex-col items-center">
      <p className="text-lg line-clamp-2 font-bold">{product.title}</p>
      <div className="flex-grow flex items-center justify-center py-3">
        <img className="w-[60%]" src={product.image} alt="" />
      </div>
      <div className="rounded flex h-[150px] w-full flex-col items-center">
        <p className="text-gray-500 line-clamp-3">{product.description}</p>
        <div className="w-full flex gap-1">
          {Array.from({length:counts}).map((_,index) => (
             <ProductRate index={index} key={index} rate={product.rating.rate} />
          ))}
        </div>
        <div className="flex justify-between w-full items-center mt-auto">
          <p>$ {product.price}</p>
          <button className="border active:scale-95 duration-150 border-black rounded px-4 py-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
