import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="border border-black p-5 grid-cols-6 grid">
      <div className="col-span-1">
        <img src={cart.product.image} className="h-16" alt="" />
      </div>
      <div className="col-span-3">
        <p className="mb-3 text-xl">{cart.product.title}</p>
        <p className="text-gray-400">Price ({cart.product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-3">
          <button className="border flex items-center justify-center w-6 h-6"><p>+</p></button>
          <p>{cart.quantity}</p>
          <button className="border flex items-center justify-center w-6 h-6"><p>-</p></button>
        </div>
      </div>
      <div className="col-span-1 h-full flex items-center justify-end">
        <p className="text-xl text-end font-bold">{cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;
