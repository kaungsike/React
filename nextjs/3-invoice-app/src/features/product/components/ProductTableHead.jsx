import React from "react";

const ProductTableHead = () => {
  return (
    <>
      <thead className="bg-gray-50 dark:bg-neutral-900">
        <tr>
          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                ID
              </span>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Invoice number related popup
                  </span>
                </div>
              </div>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                Name
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                Price
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                Created
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                Updated
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-end"></th>
        </tr>
      </thead>
    </>
  );
};

export default ProductTableHead;
