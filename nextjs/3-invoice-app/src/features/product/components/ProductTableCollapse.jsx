import React from "react";

const ProductTableCollapse = () => {
  return (
    <>
      <div className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-900 dark:border-neutral-700">
        <button
          type="button"
          className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800 dark:text-neutral-200"
          id="hs-as-table"
          aria-expanded="false"
          aria-controls="hs-as-table-label"
          data-hs-collapse="#hs-as-table-label"
        >
          <svg
            className="hs-collapse-open:rotate-90 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          Insights
        </button>
        <div
          id="hs-as-table-label"
          className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-as-table"
        >
          <div className="pb-4 px-6">
            <div className="flex items-center space-x-2">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-800 dark:text-neutral-400">
                There are no insights for this period.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTableCollapse;
