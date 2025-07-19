import React from "react";
import useProduct from "../hooks/useProduct";
import { useSearchParams } from "next/navigation";

const ProductTableFooter = ({
  links = { prev: null, next: null, first: null, last: null },
  meta = {
    total: 0,
    to: 0,
    from: 0,
    per_page: 0,
    current_page: 0,
    last_page: 0,
  },
  handlePaginate
}) => {

  // const searchParams = useSearchParams();
  // const currentLimit = searchParams.get("limit") ?? 5;
  // const pageLimits = [5,10,20,50,100]

  // const { handelPagination } = useProduct()

  return (
    <>
      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
        <div className="flex items-center gap-x-2">
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Total results
            <span className="font-semibold text-gray-800 dark:text-neutral-200">
              {" "}
              {meta.total}
            </span>
          </p>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Current Page
            <span className="font-semibold text-gray-800 dark:text-neutral-200">
              {" "}
              {meta.current_page}
            </span>
          </p>
        </div>

        <div>
          <div className="inline-flex gap-x-2">
            {links.prev && (
              <button
                type="button"
                onClick={() => handlePaginate(links.prev)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <svg
                  className="size-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Prev
              </button>
            )}

            {links.next && (
              <button
                type="button"
                onClick={() => handlePaginate(links.next)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Next
                <svg
                  className="size-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTableFooter;
