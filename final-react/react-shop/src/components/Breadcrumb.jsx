import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({current}) => {
  return (
    <ol className="flex mt-5 items-center whitespace-nowrap">
      <li className="inline-flex items-center">
        <Link to={"/"}
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
          href="#"
        >
          Home
        </Link>
        <svg
          className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li
        className="inline-flex items-center text-sm font-semibold text-gray-400 truncate "
        aria-current="page"
      >
        {current}
      </li>
    </ol>
  );
};

export default Breadcrumb;
