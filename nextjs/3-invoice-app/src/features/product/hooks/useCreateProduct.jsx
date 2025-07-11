"use client";
import { createProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useCreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    
  } = useForm();

  const route = useRouter();

  const handleCreateProduct = async (data) => {

    console.log(data)

    try {
      const creatingProductToastId = toast.loading("Creating in...");

      const res = await createProduct(data);
      const json = await res.json();
      if (res.ok) {
        reset();
        toast.success("Product created successfully!", {
          id: creatingProductToastId,
        });
        route.push("/dashboard/product");
      } else {
        toast.error("Create failed.", { id: creatingProductToastId });
      }
    } catch (error) {
      toast.error("Failed to create product. Please try again.");
    }
  };

  return {
    register,
    handleSubmit,
    handleCreateProduct,
    isSubmitting,
    reset,
    errors,
  };
};

export default useCreateProduct;
