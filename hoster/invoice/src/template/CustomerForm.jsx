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
import useRecordsStore from "../store/useRecordsStore";

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const { records,resetRecotds } = useRecordsStore();

  const navigate = useNavigate();

  const generateVoucherId = () => {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 10000);
    return `INV-${timestamp}-${randomPart}`;
  };

  const generateDate = () => {
    const date = new Date().toLocaleDateString("sv-SE", {
      timeZone: "Asia/Yangon",
    });
    return date;
  };

  const handlePlaceOrderForm = async (data) => {
    const total = records.reduce((a, b) => a + Number(b.cost), 0);
    const tax = total * 0.02;
    const net_total = total + tax;

    const finalData = {
      voucher_id: data.voucher_id,
      customer_name: data.customer_name,
      customer_email: data.email,
      records: records,
      sale_date: data.sale_date,
      total,
      tax,
      net_total
    };

    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(finalData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    if (res.status == 200) {
        toast(json.message,{ icon: '',});
      setToken(json.token);
    //   navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
    reset({
        voucher_id : generateVoucherId(),
        sale_date : generateDate(),
        customer_name : "",
        email : ""
    });
    resetRecotds();
  };


  return (
    <div>
      {" "}
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Customer Info
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to get a voucher.
        </Typography>
        <form
          onSubmit={handleSubmit(handlePlaceOrderForm)}
          className="mt-8 mb-2 w-full md:w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Voucher ID
            </Typography>
            <div>
              <Input
                {...register("voucher_id", {
                  required: true,
                  maxLength: 30,
                  minLength: 8,
                })}
                size="md"
                defaultValue={generateVoucherId()}
                placeholder="VOUCH-SEOFW2P242WDPOSD"
                className={`${
                  errors.voucher_id
                    ? "!border-red-300"
                    : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                }`}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.voucher_id?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Voucher id is required.
                </p>
              )}
              {errors.voucher_id?.type === "maxLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Voucher id must not exceed 30 characters.
                </p>
              )}
              {errors.voucher_id?.type === "minLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Voucher id must be at least 8 characters.
                </p>
              )}
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <div>
              <Input
                {...register("customer_name", {
                  required: true,
                  maxLength: 30,
                  minLength: 2,
                })}
                size="md"
                placeholder="Su Su"
                className={`${
                  errors.customer_name
                    ? "!border-red-300"
                    : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                }`}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.customer_name?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Name is required.
                </p>
              )}
              {errors.customer_name?.type === "maxLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Name must not exceed 30 characters.
                </p>
              )}
              {errors.customer_name?.type === "minLength" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Name must be at least 2 characters.
                </p>
              )}
            </div>
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
                size="md"
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
              Date
            </Typography>
            <div>
              <Input
                {...register("sale_date", {
                  required: true,
                })}
                aria-invalid={errors.date ? "true" : "false"}
                type="date"
                size="md"
                defaultValue={generateDate()}
                className={`${
                  errors.password
                    ? "!border-red-300 "
                    : "!border-t-blue-gray-200 focus:!border-t-gray-900"
                }`}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.date?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-1">
                  Date is required.
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
            Place Order
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CustomerForm;
