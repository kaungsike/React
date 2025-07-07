import { isoStringToDate } from "@/services/time";
import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const ProductTableRow = ({ data }) => {
  return (
    <>
      <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        <td className="size-px whitespace-nowrap">
          <button
            type="button"
            className="block"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-ai-invoice-modal"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span className="block px-6 py-2">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                {data.id}
              </span>
            </span>
          </button>
        </td>
        <td className="size-px whitespace-nowrap">
          <button
            type="button"
            className="block"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-ai-invoice-modal"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span className="block px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                {data.product_name}
              </span>
            </span>
          </button>
        </td>
        <td className="size-px whitespace-nowrap">
          <button
            type="button"
            className="block"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-ai-invoice-modal"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span className="block px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                $ {data.price}
              </span>
            </span>
          </button>
        </td>
        <td className="size-px whitespace-nowrap">
          <button
            type="button"
            className="block"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-ai-invoice-modal"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span className="block px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                {isoStringToDate(data.created_at)}
              </span>
            </span>
          </button>
        </td>
        <td className="size-px whitespace-nowrap">
          <button
            type="button"
            className="block"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-ai-invoice-modal"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span className="block px-6 py-2">
              <span className="text-sm text-gray-600 dark:text-neutral-400">
                {isoStringToDate(data.updated_at)}
              </span>
            </span>
          </button>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="inline-flex rounded-lg shadow-2xs">
            <button
              type="button"
              className="py-1.5 px-2 inline-flex justify-center items-center text-center gap-1 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Small
            </button>
            <button
              type="button"
              className="py-1.5 px-2 inline-flex justify-center items-center text-center gap-1 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <IoTrashOutline />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductTableRow;
