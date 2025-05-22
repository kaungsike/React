import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { waveform } from "ldrs";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const ProductEditForm = () => {
  const [token] = useCookie("my_token");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading, error } = useSWR(import.meta.env.VITE_API_URL + "/products/"+id,fetcher);

  !isLoading && console.log(data);

  const handleEditProductForm = async (data) => {
    setLoading(true);

    const finalData = {
      product_name: data.product_name,
      price: Number(data.price),
    };

    const res = await fetch(import.meta.env.VITE_API_URL + "/products/"+id, {
      method: "PUT",
      body: JSON.stringify(finalData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    console.log(res, json);

    if (res.status >= 200) {
      toast.success(json.message);
    } else {
      toast.error(json.message);
    }

    setLoading(false);
    reset();
  };

  waveform.register();

  return (
    <div className="w-full mt-5">
      <Typography variant="h4" color="blue-gray">
        Prepare Product
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
      Update product details like name, price, description, and image to keep listings current.
      </Typography>
      <form
        onSubmit={handleSubmit(handleEditProductForm)}
        className="mt-8 mb-2 w-full "
      >
        <div className="mb-1 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5 place-content-between w-full">
          <div
            className={`${
              errors.product_name
                ? "h-[100px] flex flex-col justify-between"
                : "h-[70px] flex flex-col justify-between"
            }`}
          >
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              {...register("product_name", {
                required: true,
                maxLength: 30,
                minLength: 3,
              })}
              defaultValue={data?.data.product_name}
              size="lg"
              placeholder="Sofeware Analysis and Design"
              type="text"
              className={`${
                errors.product_name
                  ? "!border-red-300"
                  : "!border-t-blue-gray-200 focus:!border-t-gray-900"
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.product_name?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name is required.
              </p>
            )}
            {errors.product_name?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name can't be more than 30 words.
              </p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name is aleaste 3 words.
              </p>
            )}
          </div>
          <div
            className={`${
              errors.price
                ? "h-[100px] flex flex-col justify-between"
                : "h-[70px] flex flex-col justify-between"
            }`}
          >
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              {...register("price", {
                required: true,
                maxLength: 10,
                min: {
                  value: 1,
                },
              })}
              size="lg"
              placeholder="299"
              type="number"
              defaultValue={data?.data.price}
              className={`${
                errors.price
                  ? "!border-red-300"
                  : "!border-t-blue-gray-200 focus:!border-t-gray-900"
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.price?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Price is required.
              </p>
            )}
            {errors.price?.type === "min" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Price requires at least 1.
              </p>
            )}
            {errors.price?.type === "min" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Price can't be more than at 10 words.
              </p>
            )}
          </div>
          <Button type="submit" className="mt-6 h-[44px]" fullWidth>
            {loading ? (
              <l-waveform
                size="18"
                stroke="3.5"
                speed="1"
                color="white"
              ></l-waveform>
            ) : (
              "Add"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
