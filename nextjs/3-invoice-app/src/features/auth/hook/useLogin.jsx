"use client";
import { login } from "@/services/auth";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const { setToken, setAccount, account, token } = useAccountStore();

  const handleLoginForm = async (data) => {
    console.log("Login form data:", data);

    const loadingToastId = toast.loading("Logging in...");

    try {
      const res = await login(data);
      const json = await res.json();

      if (res.ok) {
        console.log("Login successful:", json);
        setToken(json.token);
        setAccount(json.account);

        toast.success("Login successful!", { id: loadingToastId });

        router.push("/dashboard");
      } else {
        toast.error(json.message || "Login failed.", { id: loadingToastId });
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error("Something went wrong. Try again.", { id: loadingToastId });
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
