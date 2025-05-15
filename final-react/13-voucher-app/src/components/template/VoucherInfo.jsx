import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../../store/useRecordStore";
const VoucherInfo = () => {
  const { records,clearRecords } = useRecordStore();
  const [isSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function generateVoucherID(prefix = "VOUCH") {
    const timestamp = Date.now().toString(36); 
    const randomStr = Math.random().toString(36).slice(2, 7).toUpperCase(); 
    return `${prefix}-${timestamp}-${randomStr}`;
  }

  const voucherID = generateVoucherID();


  const total = records.reduce((a, b) => a + b.cost, 0).toFixed(2);
  const tax = (total * 0.05).toFixed(2);
  const grandTotal = (Number(total) + Number(tax)).toFixed(2);

  const handleSubmitVoucher = async (data) => {
    const currentVoucher = { ...data, records, total, tax, grandTotal };
    
    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    clearRecords();
    
    const newVoucherID = generateVoucherID();
  const newSaleDate = new Date().toLocaleDateString("sv-SE", {
    timeZone: "Asia/Yangon",
  });
  reset({
    voucherId: newVoucherID,
    saleDate: newSaleDate,
    customerName: "",
    customerEmail: "",
  });

  };



  return (
    <>
      <form
        id="infoForm"
        onSubmit={handleSubmit(handleSubmitVoucher)}
        className="mt-5"
      >
        <div className="grid grid-cols-4  w-full items-start gap-3 mb-5">
          <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="voucherId">Voucher ID</Label>
            <Input
              {...register("voucherId", {
                required: true,
                minLength: 1,
                maxLength: 20,
              })}
              defaultValue={voucherID}
              type="text"
              id="voucherId"
              placeholder="Eg - 213"
              className={`${
                errors.voucherId
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
            />
            {errors.voucherId?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Product name is required
              </p>
            )}
            {errors.voucherId?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Product name must be at least 3 characters
              </p>
            )}
            {errors.voucherId?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Product name must be less than 20 characters
              </p>
            )}
          </div>
          <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              {...register("customerName", {
                required: true,
                minLength: 2,
                maxLength: 20,
              })}
              type="mail"
              id="customerName"
              placeholder="Eg - John Doe"
              className={`${
                errors.customerName
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
            />
            {errors.customerName?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer name is required
              </p>
            )}
            {errors.customerName?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer name must be at least 2 characters
              </p>
            )}
            {errors.customerName?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer name must be less than 20 characters
              </p>
            )}
          </div>
          <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="customerEmail">Customer Email</Label>
            <Input
              {...register("customerEmail", {
                required: true,
                minLength: 10,
                maxLength: 40,
              })}
              type="text"
              id="customerEmail"
              placeholder="Eg - testing39!@gmail.com"
              className={`${
                errors.customerEmail
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
            />
            {errors.customerEmail?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer email is required
              </p>
            )}
            {errors.customerEmail?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer email must be at least 10 characters
              </p>
            )}
            {errors.customerEmail?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Customer email must be less than 40 characters
              </p>
            )}
          </div>
          <div className="grid col-span-4 sm:col-span-2 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="saleDate">Sale Date</Label>
            <Input
              {...register("saleDate", {
                required: true,
                minLength: 2,
                maxLength: 20,
              })}
              type="date"
              id="saleDate"
              defaultValue={new Date().toLocaleDateString("sv-SE", {
                timeZone: "Asia/Yangon",
              })}
              placeholder="Eg - 1/2/2023"
              className={`${
                errors.saleDate
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
            />
            {errors.saleDate?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Product price is required
              </p>
            )}
            {errors.saleDate?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Product price must be at least 2 characters
              </p>
            )}
            {errors.saleDate?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Product price must be less than 20 characters
              </p>
            )}
          </div>
        </div>
      </form>

      <SaleForm />
      <hr />
      <VoucherTable />
      <hr />
      <div className="flex items-center justify-end space-x-2 mt-5">
        <Link
          to={"/product"}
          variant="scondary"
          className="bg-slate-200 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-md px-2 h-[36px] flex items-center justify-center"
        >
          Cancle
        </Link>
        <Button type="submit" form="infoForm">
          {isSending ? (
            <l-dot-pulse size="30" speed="1.3" color="white"></l-dot-pulse>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </>
  );
};

export default VoucherInfo;
