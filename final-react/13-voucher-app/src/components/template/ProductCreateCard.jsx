import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

import { dotPulse } from "ldrs";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useSWR from "swr";
const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  dotPulse.register();

  const [isSending, setIsSending] = useState(false);

  const handleCreateProduct = async (data) => {
    setIsSending(true);

    data.created_at = new Date().toISOString();
    console.log(data);

    const res = await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.success("Product has been created", {
      description: data.created_at,
    });

    setIsSending(false);
    reset();
  };

  return (
    <div className="mt-5">
      <form action="" onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="grid w-full items-center gap-1.5 mb-5">
          <Label htmlFor="name">Product Name</Label>
          <Input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            type="text"
            id="name"
            placeholder="Eg - Apple"
            className={`${
              errors.name
                ? "border-red-500 ring-red-500 focus:ring-red-600"
                : ""
            }`}
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Product name is required
            </p>
          )}
          {errors.name?.type === "minLength" && (
            <p role="alert" className="text-red-500 text-sm">
              Product name must be at least 3 characters
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p role="alert" className="text-red-500 text-sm">
              Product name must be less than 20 characters
            </p>
          )}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="price">Price</Label>
          <Input
            {...register("price", {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            type="number"
            id="price"
            placeholder="Eg - 199"
            className={`${
              errors.price
                ? "border-red-500 ring-red-500 focus:ring-red-600"
                : ""
            }`}
          />
          {errors.price?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Product price is required
            </p>
          )}
          {errors.price?.type === "minLength" && (
            <p role="alert" className="text-red-500 text-sm">
              Product price must be at least 2 characters
            </p>
          )}
          {errors.price?.type === "maxLength" && (
            <p role="alert" className="text-red-500 text-sm">
              Product price must be less than 20 characters
            </p>
          )}
        </div>
        <div className="items-top mt-5 flex space-x-2">
          <Checkbox
            id="terms1"
            {...register("allCorrect", { required: true })}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              name="allCorrect"
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept terms and conditions
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-5">
          <Link
            to={"/product"}
            variant="scondary"
            className="bg-slate-200 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-md px-2 h-[36px] flex items-center justify-center"
          >
            Cancle
          </Link>
          <Button>
            {isSending ? (
              <l-dot-pulse size="30" speed="1.3" color="white"></l-dot-pulse>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;
