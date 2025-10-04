import React from "react";

const ProductListEmptyState = () => {
  return (
    <tr className="bg-white hidden last:table-row dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        colSpan={5}
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white"
      >
        There is no product found.
      </th>
    </tr>
  );
};

export default ProductListEmptyState;
