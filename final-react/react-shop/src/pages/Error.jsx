import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex gap-5 flex-col justify-center items-center">
      <img className="mb-5" src="../error.svg" alt="" />
      <p className="mb-5">
        We couldn’t find the page you were looking for. It might have been
        moved, deleted, or maybe the link is broken.
      </p>
      <button>
        <Link
          to={"/"}
          className="border mt-5 active:scale-95 duration-150 border-black rounded px-4 py-2 flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Go to Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
