import { isoStringToDate } from "@/services/time";
import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { deleteProduct, PRODUCT_API_URL } from "@/services/product";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import Link from "next/link";

const ProductTableRow = ({ data }) => {

  const {mutate} = useSWRConfig()

const handleDeleteProduct = async () => {
  try {

    const deletingToastId = toast.loading("Deleting in...");

    const res = await deleteProduct(data.id);

    if (res.ok) {
      console.log("Delete successful:");
      toast.success("Delete successful!", { id: deletingToastId });
      mutate(PRODUCT_API_URL); 
      console.log(PRODUCT_API_URL)
    } else {
      toast.error("Delete failed.", { id: deletingToastId });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    toast.error("Something went wrong.");
  }
};


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
            <Link
            href={`/dashboard/product/edit/${data.id}`}
              type="button"
              className="py-1.5 px-2 group duration-150 inline-flex justify-center items-center text-center gap-1 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <Pencil className="group-hover:text-blue-500" size={16} />
            </Link>
            <button
              onClick={handleDeleteProduct}
              type="button"
              className="py-1.5  group duration-150 px-2 inline-flex justify-center items-center text-center gap-1 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <Trash2 className="group-hover:text-red-500" size={16} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductTableRow;
