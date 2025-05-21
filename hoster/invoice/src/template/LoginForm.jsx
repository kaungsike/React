import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token,setToken] = useCookie('my_token');

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const res = await fetch(import.meta.env.VITE_API_URL+'/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status == 200) {
      toast.success("Login successfully.")
      setToken(json.token)
      navigate("/dashboard")
    } else {
      toast.error("Something worng. Try again")
    }

    // reset();
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <div>
              <Input
                {...register("email", {
                  required: true,
                  maxLength: 30,
                  minLength: 8,
                })}
                size="lg"
                placeholder="name@mail.com"
                className={`${
                  errors.email
                    ? "!border-red-300"
                    : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                }`}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Email is required.
                </p>
              )}
              {errors.email?.type === "maxLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Email must not exceed 30 characters.
                </p>
              )}
              {errors.email?.type === "minLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Email must be at least 8 characters.
                </p>
              )}
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <div>
              <Input
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                size="lg"
                placeholder="********"
                className={`${
                  errors.password
                    ? "!border-red-300 "
                    : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                }`}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Password is required.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Password must not exceed 20 characters.
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters.
                </p>
              )}
            </div>
          </div>

          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/register" className="font-medium underline text-gray-900">
              Register
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
