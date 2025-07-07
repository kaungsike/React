import React from 'react'

const TableFooterSkeletonLoader = () => {
  return (
        <>

        {/* footer */}
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700 animate-pulse">
  <div className='flex items-center gap-x-2'>
    <p className="text-sm flex items-center gap-1 text-gray-600 dark:text-neutral-400">total results{" "}
      <span className="inline-block w-6 h-6 bg-gray-200 dark:bg-neutral-700 rounded"></span>
      
    </p>
        <p className="text-sm flex items-center gap-1 text-gray-600 dark:text-neutral-400">Current Page{" "}
      <span className="inline-block w-6 h-6 bg-gray-200 dark:bg-neutral-700 rounded"></span>
      
    </p>
  </div>

  <div>
    <div className="inline-flex gap-x-2">
      <div className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
        <div className="w-10 h-4 bg-gray-200 dark:bg-neutral-700 rounded"></div>
      </div>

      <div className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
        <div className="w-10 h-4 bg-gray-200 dark:bg-neutral-700 rounded"></div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TableFooterSkeletonLoader