import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductRate from "../components/ProductRate";
import useProductStore from "../store/useProductsStore";
import useCartsStore from "../store/useCartsStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { slugUrl } = useParams();

  const { products } = useProductStore();

  const { carts ,addNewCart } = useCartsStore();

  const count = 5;

  const currentProduct = products.find((product) => product.slugUrl == slugUrl);

  const handleAddedBtn = () => {
    toast.error("Already added")
  }

  const handleAddToCart = () => {
    const newCart = {
      id : Date.now(),
      productId : currentProduct.id,
      quantity : 1
    };
    addNewCart(newCart);
    toast.success("Added to cart")
  }

  return (
    <div className="mb-5 mt-5 flex-grow">
      <Breadcrumb current={"Product Detail"} />
      <div className="border p-3 md:justify-between md:flex-row lg:flex-row border-black rounded md:h-96 gap-5 w-full mx-auto mt-10 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center h-full w-full md:w-[35%]">
          <img className="w-[60%]" src={currentProduct.image} alt="" />
        </div>
        <div className="md:w-[65%] w-full h-full flex flex-col items-start gap-5 p-5">
          <p className="text-2xl mb-5">{currentProduct.title}</p>
          <div className="flex gap-2 mb-5">
            {Array.from({ length: count }).map((_, index) => (
              <ProductRate
                index={index}
                key={index}
                rate={currentProduct.rating.rate}
              />
            ))}
          </div>
          <p>{currentProduct.description}</p>
          <div className="flex w-full mt-auto justify-between items-center">
            <p>$ {currentProduct.price}</p>
            {carts.find((cart) => cart.productId == currentProduct.id) ? (
              <button onClick={handleAddedBtn} className="border active:scale-95 bg-gray-800 text-white duration-150 border-black rounded px-4 py-2">
                Added
              </button>
            ) : (
              <button onClick={handleAddToCart} className="border active:scale-95 duration-150 border-black rounded px-4 py-2">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
