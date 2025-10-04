import React from "react";

const ProductListSkeletonLoader = () => {
  return (
    <tr
      className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
      role="row"
    >
      <td className="px-6 py-4">
        <div
          className="h-4 w-6 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"
          role="status"
          aria-label="loading"
        />
      </td>

      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-4 max-w-[10rem] rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </th>

      <td className="px-6 py-4">
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </td>

      <td className="px-6 py-4">
        <div className="h-4 w-36 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </td>

      <td className="px-6 py-4 text-right">
        <div className="inline-flex gap-2" role="group" aria-hidden>
          <div className="h-8 w-14 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="h-8 w-14 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </td>
    </tr>
  );
};

export default ProductListSkeletonLoader;
