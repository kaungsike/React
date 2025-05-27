import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../../store/useRecordStore";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import useCookie from "react-use-cookie";

const VoucherInfo = () => {

  const [token] = useCookie("my_token")

  const { records, clearRecords } = useRecordStore();
  const [isSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function generateVoucherID(prefix = "INVT") {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `${prefix}-${timestamp}-${randomStr}`;
  }

  const voucher_id = generateVoucherID();

  const total = records.reduce((a, b) => a + b.cost, 0).toFixed(2);
  const tax = (total * 0.05).toFixed(2);
  const net_total = (Number(total) + Number(tax)).toFixed(2);

  const created_at = new Date().toISOString();
  const updated_at = created_at;

  const handleSubmitVoucher = async (data) => {
    const currentVoucher = {
      ...data,
      records,
      total,
      tax,
      net_total,
      created_at,
      updated_at,
    };


    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(currentVoucher),
    });
    clearRecords();

    const json = await res.json();

    console.log(json.message);

    if (res.status == 200) {
      toast.success(json.message);
    }else{
      toast.error(json.message)
    }

    console.log(currentVoucher);

    const newVoucherID = generateVoucherID();
    const newSaleDate = new Date().toLocaleDateString("sv-SE", {
      timeZone: "Asia/Yangon",
    });
    reset({
      voucher_id: newVoucherID,
      sale_date: newSaleDate,
      customer_name: "",
      customer_email: "",
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:justify-between">
        <div className="w-full">
          <SaleForm />
          <hr />
          <VoucherTable />
        </div>
        <Card className="w-[398px]">
          <CardHeader>
            <CardTitle>Create Voucher</CardTitle>
            <CardDescription>
              Generate a new sales voucher with customer and transaction
              details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="infoForm"
              onSubmit={handleSubmit(handleSubmitVoucher)}
              className="mt-5"
            >
              <div className="grid w-full items-center gap-4">
                <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
                  <Label htmlFor="voucher_id">Voucher ID</Label>
                  <Input
                    {...register("voucher_id", {
                      required: true,
                      minLength: 1,
                      maxLength: 20,
                    })}
                    defaultValue={voucher_id}
                    type="text"
                    id="voucher_id"
                    placeholder="Eg - 213"
                    className={`${
                      errors.voucher_id
                        ? "border-red-500 ring-red-500 focus:ring-red-600"
                        : ""
                    }`}
                  />
                  {errors.voucher_id?.type === "required" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product name is required
                    </p>
                  )}
                  {errors.voucher_id?.type === "minLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product name must be at least 3 characters
                    </p>
                  )}
                  {errors.voucher_id?.type === "maxLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product name must be less than 20 characters
                    </p>
                  )}
                </div>
                <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
                  <Label htmlFor="customer_name">Customer Name</Label>
                  <Input
                    {...register("customer_name", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    type="text"
                    id="customer_name"
                    placeholder="Eg - John Doe"
                    className={`${
                      errors.customer_name
                        ? "border-red-500 ring-red-500 focus:ring-red-600"
                        : ""
                    }`}
                  />
                  {errors.customer_name?.type === "required" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer name is required
                    </p>
                  )}
                  {errors.customer_name?.type === "minLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer name must be at least 2 characters
                    </p>
                  )}
                  {errors.customer_name?.type === "maxLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer name must be less than 20 characters
                    </p>
                  )}
                </div>
                <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
                  <Label htmlFor="customer_email">Customer Email</Label>
                  <Input
                    {...register("customer_email", {
                      required: true,
                      minLength: 10,
                      maxLength: 40,
                    })}
                    type="text"
                    id="customer_email"
                    placeholder="Eg - testing39!@gmail.com"
                    className={`${
                      errors.customer_email
                        ? "border-red-500 ring-red-500 focus:ring-red-600"
                        : ""
                    }`}
                  />
                  {errors.customer_email?.type === "required" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer email is required
                    </p>
                  )}
                  {errors.customer_email?.type === "minLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer email must be at least 10 characters
                    </p>
                  )}
                  {errors.customer_email?.type === "maxLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Customer email must be less than 40 characters
                    </p>
                  )}
                </div>
                <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
                  <Label htmlFor="sale_date">Sale Date</Label>
                  <Input
                    {...register("sale_date", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    type="date"
                    id="sale_date"
                    defaultValue={new Date().toLocaleDateString("sv-SE", {
                      timeZone: "Asia/Yangon",
                    })}
                    placeholder="Eg - 1/2/2023"
                    className={`${
                      errors.sale_date
                        ? "border-red-500 ring-red-500 focus:ring-red-600"
                        : ""
                    }`}
                  />
                  {errors.sale_date?.type === "required" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product price is required
                    </p>
                  )}
                  {errors.sale_date?.type === "minLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product price must be at least 2 characters
                    </p>
                  )}
                  {errors.sale_date?.type === "maxLength" && (
                    <p role="alert" className="text-red-500 text-sm">
                      Product price must be less than 20 characters
                    </p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link
              to={"/dashboard/"}
              variant="scondary"
              className="bg-slate-200 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-md px-2 h-[36px] flex items-center justify-center"
            >
              Cancle
            </Link>
            <Button form="infoForm">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default VoucherInfo;
