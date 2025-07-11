"use client";
import {
  getProducts,
  PRODUCT_API_URL,
  updateProduct,
} from "@/services/product";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWR from "swr";

const useEditProduct = () => {
  const route = useRouter();

  const { id } = useParams();

  console.log(id ? `${PRODUCT_API_URL}/${id}` : null);

  const { data, isLoading, error } = useSWR(
    id ? `${PRODUCT_API_URL}/${id}` : null,
    getProducts
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleEditProduct = async (data) => {
    console.log(data);

    try {
      const editingProductToastId = toast.loading("Editing in...");

      const res = await updateProduct(id, data);
      const json = await res.json();
      if (res.ok) {
        reset();
        toast.success("Product edited successfully!", {
          id: editingProductToastId,
        });
        route.push("/dashboard/product");
      } else {
        toast.error("Edited failed.", { id: editingProductToastId });
      }
    } catch (error) {
      toast.error("Failed to edit product. Please try again.");
    }
  };

  return {
    register,
    handleSubmit,
    handleEditProduct,
    isSubmitting,
    reset,
    errors,
    data,
    isLoading,
  };
};

export default useEditProduct;
