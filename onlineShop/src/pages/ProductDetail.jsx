import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);
  return (
    <div className="p-[20px]">
      <Container>
        <Breadcrumb currentPageTitle={'Product Details'}/>
        <div className="border border-black p-10 ">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                className="w-3/5 block mx-auto"
                alt=""
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4 h-full">
              <h3 className="text-3xl font-bold line-clamp-2">
                {currentProduct.title}
              </h3>
              <p className="bg-gray-300 mb-3 mt-2 text-gray-700 inline-block px-3 py-1">
                {currentProduct.category}
              </p>
              <p className="mb-6">{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} />
              <div className="flex justify-between items-center">
                <p>Price : {currentProduct.price}</p>
                <button className="border border-black px-3 py-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
