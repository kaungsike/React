import React from "react";
import Cart from "./Cart";
import useCartsStore from "../store/useCartsStore";
const CartSection = () => {

  const {carts} = useCartsStore();


  return (
    <div className="flex flex-col gap-2 my-5">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
      <div className="hidden first:flex first:flex-col gap-5 items-center justify-center">
        <img className="w-[500px]" src="https://bdcosmeticsbazar.com/assets/images/empty-cart.png" alt="" />
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default CartSection;
