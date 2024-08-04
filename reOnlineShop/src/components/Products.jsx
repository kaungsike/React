import React from "react";
import Rating from "./Rating";
import products from "../data/productsData";

const Products = () => {



  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="border border-gray-700 p-5 flex flex-col items-start gap-3">
            <img src={product.image} alt="" className="h-40" />
            <p className="line-clamp-2">{product.title}</p>

            <div className="mt-auto flex gap-1">
                <Rating rate={product.rating.rate}/>
            </div>

            <div className="flex justify-between items-center w-full">
              <p>Price ( $ {product.price} )</p>
              <button className="border border-black px-4 py-1 text-sm">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
