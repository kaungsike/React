import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";

const CartSection = () => {
  return (
    <Container>
        <Breadcrumb currentPageTitle={"My Cart"}/>
      <div className="flex flex-col gap-2 mt-6 h-[705px]">
        <Cart />
        <div className="w-full border-t-2 border-t-gray-600 h-[150px] flex flex-col items-end px-[20px] justify-end gap-4">
            <div className="flex gap-[90px]">
                <div>
                    <p className="text-gray-600 text-lg font-bold">Total</p>
                    <p className="text-xl font-bold">$ 66.9</p>
                </div>
                <div>
                    <p className="text-gray-600 text-lg font-bold">Tax ( 2 % )</p>
                    <p className="text-xl font-bold text-end">$ 1.9</p>
                </div>
                <div>
                    <p className="text-gray-600 text-lg font-bold text-end"> Net Total</p>
                    <p className="text-4xl font-bold text-end">$ 68.3</p>
                </div>
            </div>
            <button className="border border-gray-600 py-2 px-6 text-lg font-bold">Order Now</button>
        </div>
      </div>
    </Container>
  );
};

export default CartSection;
