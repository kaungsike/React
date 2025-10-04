import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { useSWRConfig } from "swr";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductRow = ({ product }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useSWRConfig();

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await toast.promise(
      fetch(import.meta.env.VITE_API_URL + `/products/${product.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.json(); // optional if API returns JSON
      }),
      {
        loading: "Deleting...",
        success: <b>Product deleted!</b>,
        error: <b>Could not delete product.</b>,
      }
    );

    mutate(import.meta.env.VITE_API_URL + "/products"); // refresh data
    setIsDeleting(false);
  };

  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{product.id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.name}
      </th>
      <td className="px-6 py-4">${product.price}</td>
      <td className="px-6 py-4">
        {new Date(product.created_at).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="inline-flex rounded-md shadow-xs" role="group">
          <Link
            to={`/product/edit/${product.id}`}
            className="h-[40px] w-[45px] flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <MdModeEdit size={15} />
          </Link>
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="h-[40px] w-[45px] flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <ClipLoader size={15} />
            ) : (
              <LuTrash2 className="text-red-500" size={15} />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
