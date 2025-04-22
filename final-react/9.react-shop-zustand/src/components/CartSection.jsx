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
    </div>
  );
};

export default CartSection;
