"use client";
import { login } from "@/services/auth";
import { useForm } from "react-hook-form";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLoginForm = async (data) => {
    console.log("Login form data:", data);

    try {
      const res = await login(data);
      const json = await res.json();
    } catch (error) {
      console.log("try fail", error);
    }
  };

  return {
    register,
    handleSubmit,
    handleLoginForm,
    errors,
    isSubmitting,
  };
};

export default useLogin;
