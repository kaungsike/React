import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const ProductEditSkeletonLoader = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg mb-4">
        <Skeleton width={200} height={24} />
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        <Skeleton width={300} height={16} />
      </p>

      <form>
        <div className="mt-3 space-y-4">
          {/* Product Name */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Skeleton width={100} height={16} />
            </label>
            <Skeleton height={40} />
          </div>

          {/* Product Price */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Skeleton width={80} height={16} />
            </label>
            <Skeleton height={40} />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-2">
            <Skeleton width={20} height={20} />
            <Skeleton width={200} height={16} />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton width={20} height={20} />
            <Skeleton width={220} height={16} />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <Skeleton width={75} height={40} />
            <Skeleton width={75} height={40} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductEditSkeletonLoader;
