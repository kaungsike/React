import React from "react";
import useProductStore from "../store/useProductsStore";
import useCartsStore from "../store/useCartsStore";

const Cart = ({ cart }) => {

  const {products} = useProductStore();

  const {increaseQuantity,decreaseQuantity} = useCartsStore();

  const currentProduct = products.find((product) => product.id == cart.productId);

  const handleIncreaseQuantity = () => {
    increaseQuantity(cart.id);
  }

  const handleDecreaseQuantity = () => {
    decreaseQuantity(cart.id);
  }

  return (
    <div className="border rounded flex-col md:flex-row flex items-center justify-between border-gray-400  w-full p-3 px-5 md:h-[100px]">
      <div className="md:w-[65%] w-full flex md:flex-row flex-col gap-14 items-center h-full">
        <div className="h-full md:w-auto w-full flex md:justify-between justify-center items-center">
          <img className="md:h-full md:w-auto w-[60%]" src={currentProduct.image} alt="" />
        </div>
        <div>
          <p className="text-lg">{currentProduct.title}</p>
          <p>Price : $ {currentProduct.price}</p>
        </div>
      </div>
      <div className="md:w-[35%] w-full md:mt-0 mt-5 flex justify-between items-center">
        <div className="h-full flex gap-3 justify-center items-center">
          <button onClick={handleDecreaseQuantity} className="text-lg border active:scale-90 duration-150 border-black rounded w-6 h-6 flex items-center justify-center">
            -
          </button>
          <p>{cart.quantity}</p>
          <button onClick={handleIncreaseQuantity} className="text-lg border active:scale-90 duration-150 border-black rounded w-6 h-6 flex items-center justify-center">
            +
          </button>
        </div>
        <div>
          <p>Cost : $ {(cart.quantity*currentProduct.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
