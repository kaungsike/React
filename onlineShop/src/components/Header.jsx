import React from "react";

const Header = () => {
  return (
    <header className="px-5 pt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <button className="border relative border-black px-6 py-2">
          My Cart <span className="flex items-center justify-center absolute top-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full right-0 bg-red-500 text-white">1</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
