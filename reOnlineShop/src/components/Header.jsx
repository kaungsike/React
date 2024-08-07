import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="flex items-center justify-between mt-5">
        <Link to={'/'} className="text-4xl font-bold">Online Shop</Link>
        <Link to={'/myCart'} className="border relative border-gray-600 px-6 py-2">My Cart <span className="bg-red-500 absolute -right-2 -top-3 w-5 h-5 text-white flex justify-center items-center  rounded-full">1</span></Link>
      </div>
    </Container>
  );
};

export default Header;
