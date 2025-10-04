import React from "react";
import { IoSearch } from "react-icons/io5";
import { RiAddLargeLine } from "react-icons/ri";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyState from "./ProductListEmptyState";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
const ProductList = () => {

const fetcher = (...args) => fetch(...args).then(res => res.json())

  console.log(import.meta.env.VITE_API_URL);
  
  const {data,isLoading} = useSWR(import.meta.env.VITE_API_URL + "/products",fetcher)

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-5 gap-1.5">
        <div className="w-full md:w-1/3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <IoSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Link
          to={"/product/create"}
            type="button"
            className="text-white bg-blue-700 lg:w-auto w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 justify-center flex gap-3 items-center h-[40px]"
          >
            Add New Product <RiAddLargeLine className="" />
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            
            {
              isLoading? (<ProductListSkeletonLoader/>) : 
                data.length === 0 ? (<ProductListEmptyState/>) : data.map((product) => 
                  <ProductRow product={product} key={product.id}/>
                ) 
              
            }
            


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
