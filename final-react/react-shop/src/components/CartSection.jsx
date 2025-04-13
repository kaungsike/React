import React from "react";
import { products } from "../data/products";
import Cart from "./Cart";
import { carts } from "../data/carts";

const CartSection = () => {

  return (
    <div className="flex flex-col gap-2 my-5">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default CartSection;
