
import React from "react";

const ProductSkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm animate-pulse">

      {/* Product Image */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>

      {/* Category */}
      <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>

      {/* Product Title */}
      <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Price and Rating */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Button */}
      <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>

    </div>
  );
};

export default ProductSkeletonCard;
