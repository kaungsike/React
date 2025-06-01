import React from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  return (
    <section className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <a
          className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Invoice App
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <Link to={'/'}
            className="font-medium text-blue-500 focus:outline-hidden"
            aria-current="page"
          >
            Home
          </Link>
          <Link to={'about-us'}
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          >
            About
          </Link>
          <Link to={'contact-us'}
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"

          >
            Contact Us
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default PublicHeader;
