import React from "react";
import carts from "../data/cart";

const Cart = () => {
  return (
    <div className="flex-grow flex flex-col gap-2 overflow-y-scroll">
      {carts.map((cart) => {
        return (
          <div
            key={cart.id}
            className="border p-[15px] border-gray-600 px-[40px] w-full h-[130px] grid grid-cols-12"
          >
            <div className="col-span-1">
              <img className="h-[90px]" src={cart.product.image} alt="" />
            </div>
            <div className="col-span-7 h-full flex flex-col justify-center pl-10 gap-3">
              <p className="text-xl font-bold  line-clamp-1">
                {cart.product.title}
              </p>
              <p>Price ( $ {cart.product.price} )</p>
            </div>
            <div className="col-span-2 h-full flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-bold">Quantity</p>
              <div className="flex gap-3">
                <button className="border border-gray-600 w-[30px] h-[30px] flex items-center justify-center rounded-full active:scale-90 duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <p className="text-lg font-bold">{cart.quantity}</p>
                <button className="border active:scale-90 duration-150 border-gray-600 w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-center gap-2">
              <p className="text-xl font-bold">Cost</p>
              <p className="text-lg font-bold">$ {cart.cost}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
