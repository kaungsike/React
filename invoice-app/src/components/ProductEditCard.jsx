import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useSWR, { useSWRConfig } from "swr";
import ProductEditSkeletonLoader from "./ProdutEditSkeletonLoader";

const ProductEditCart = () => {
  const [sending, setSending] = useState(false);

  const {id} = useParams();

  const {mutate} = useSWRConfig();

  const navigate = useNavigate();

const fetcher = (...args) => fetch(...args).then(res => res.json())
  

    const {data,isLoading} = useSWR(import.meta.env.VITE_API_URL + "/products/"+id,fetcher)

    !isLoading&& console.log(data) 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditProduct = async (data) => {
    setSending(true);

    await toast.promise(
      fetch(import.meta.env.VITE_API_URL + `/products/` + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: data.product_name,
            price: parseFloat(data.product_price),
            created_at: new Date().toISOString()
        }),
      }).then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      }),
      {
        loading: "Editing...",
        success: <b>Product edit successfully!</b>,
        error: <b>Could not edit product.</b>,
      }
    );

      navigate("/product");


    setSending(false);
    mutate(import.meta.env.VITE_API_URL + "/products");
  };

  return (
    isLoading ? <ProductEditSkeletonLoader/> :     <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg">Product Edit Cart</h3>
      <p className="text-sm text-gray-500">
        This is the product edit cart component.
      </p>

      <form onSubmit={handleSubmit(handleEditProduct)} action="">
        <div className="mt-3">
          <div>
            <div className="mb-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                {...register("product_name", {
                  required: "Product name is required",
                  minLength: {
                    value: 3,
                    message: "Product name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 50,
                    message: "Product name must be at most 50 characters long",
                  },
                })}
                defaultValue={data.name}
                type="text"
                id="first_name"
                className={`bg-gray-50 border border-gray-300 ${
                  errors.product_name
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Apple"
              />
              {errors.product_name && (
                <p className="text-red-500 text-sm mt-0.5">
                  {errors.product_name.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="product_price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>

              <input
                {...register("product_price", {
                  required: "Product price is required",
                  min: {
                    value: 100,
                    message: "Product price must be at least $100",
                  },
                  max: {
                    value: 1000,
                    message: "Product price must be at most $1000",
                  },
                })}
                defaultValue={data.price}
                type="number"
                id="product_price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="399"
              />

              {errors.product_price && (
                <p className="text-red-500 text-sm mt-0.5">
                  {errors.product_price.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="all_correct"
                type="checkbox"
                {...register("all_correct")}
                value=""
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="all_correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure you have {" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                 correct data
              </a>
              .
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={"/product"}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="text-white w-[75px] h-[40px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  flex items-center justify-center text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {sending ? <ClipLoader size={20} color={"#fff"} /> : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductEditCart;
