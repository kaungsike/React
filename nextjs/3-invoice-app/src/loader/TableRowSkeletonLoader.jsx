import React from "react";

const TableRowSkeletonLoader = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <tr key={index} className="animate-pulse bg-white dark:bg-neutral-900">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <td key={i} className="size-px whitespace-nowrap">
                <div className="px-6 py-2">
                  <div className="h-4 w-24 bg-gray-200 dark:bg-neutral-700 rounded"></div>
                </div>
              </td>
            ))}
        </tr>
      ))}
    </>
  );
};

export default TableRowSkeletonLoader;
