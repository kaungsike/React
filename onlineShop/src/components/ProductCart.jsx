import React from "react";
import Rating from "./Rating";

const ProductCart = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {

  return (
    <div className="border border-black p-5 flex flex-col items-start gap-3">
      <img src={image} alt="" className="h-40" />
      <p className="line-clamp-2">{title}</p>

      <Rating rate={rate}/>

      <div className="flex justify-between items-center w-full">
        <p>{price}</p>
        <button className="border border-black px-4 py-1 text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
