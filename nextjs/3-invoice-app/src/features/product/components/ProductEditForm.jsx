"use client";
import React from 'react'
import useEditProduct from '../hooks/useEditProduct'

const ProductEditForm = () => {

  const {register,handleSubmit,handleEditProduct,errors,data,isLoading} = useEditProduct();

  !isLoading && console.log(data)


  return (
        <>
      {/* Card Section */}
      <div className="max-w-4xl ">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-800">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
              Edit Product
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Update the details below to edit the product in your catalog.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleEditProduct)}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="product_name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Name
                </label>
              </div>
              {/* End Col */}

              <div className="sm:col-span-9">
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  defaultValue={data?.data.product_name || ""}
                  {...register("product_name", {
                    required: "Name is required",
                    pattern: {
                      message: "Enter a valid name.",
                    },
                  })}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  aria-describedby="product_name-error"
                />
                {errors.product_name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.product_name.message}
                  </p>
                )}
              </div>
              {/* End Col */}

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Price
                </label>
              </div>
              {/* End Col */}

              <div className="sm:col-span-9">
                <input
                  type="number"
                  id="price"
                  name="price"
                  defaultValue={data?.data.price || ""}
                  {...register("price", {
                    required: "Price is required",
                    min: {
                      value: 1,
                      message: "Price must be greater than zero.",
                    },
                  })}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  aria-describedby="price-error"
                />
                {errors.price && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.price.message}
                  </p>
                )}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  )
}

export default ProductEditForm