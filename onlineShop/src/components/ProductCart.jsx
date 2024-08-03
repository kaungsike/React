import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className="border border-black p-5 flex flex-col items-start gap-3"
    >
      <img src={image} alt="" className="h-40" />
      <p className="line-clamp-2">{title}</p>

      <Rating rate={rate} />

      <div className="flex justify-between items-center w-full">
        <p>{price}</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <button className="border text-white bg-black border-black px-4 py-1 text-sm">
            Added
          </button>
        ) : (
          <button className="border border-black px-4 py-1 text-sm">
            Add to cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCart;
