import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import useSWR from "swr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import useCookie from "react-use-cookie";
import useRecordStore from "../../store/useRecordStore";
const SaleForm = () => {

  const [token] = useCookie("my_token")
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

    const {records,addRecord,updateQuantity} = useRecordStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=100",
    fetcher
  );

  const handleFormSubmit = (data) => {
    const product = JSON.parse(data.product);
    const cost = product.price * Number(data.quantity);

    const finalData = {
        product : product,
        product_id: product.id,
        quantity: Number(data.quantity),
        cost,
        created_at : new Date().toISOString()
      };



    console.log(product.id);

    const isExited = records.find((el) => el.product_id == product.id)

    console.log(isExited);

    if (isExited) {
      updateQuantity(product.id, Number(data.quantity));
    } else {
      addRecord(finalData);
    }

    reset();
  };


  return (
    <div className="mt-5">
      <form
        id="productInfoForm"
        onSubmit={handleSubmit(handleFormSubmit)}
        action=""
      >
        <div className="grid lg:h-[102px] grid-cols-3  w-full items-start gap-3 mb-5">
          <div className="grid col-span-3 sm:col-span-1 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="product">Product</Label>
            <Controller
              control={control}
              name="product"
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full" id="product">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Items</SelectLabel>
                      {!isLoading &&
                        data.data.map((item) => (
                          <SelectItem
                            key={item.id}
                            id={item.id}
                            value={JSON.stringify(item)}
                          >
                            {item.product_name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid col-span-3 sm:col-span-1 lg:col-span-1 w-full items-center gap-1.5 mb-5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              {...register("quantity", {
                required: true,
                minLength: 1,
                maxLength: 20,
              })}
              type="number"
              id="quantity"
              placeholder="Eg - 3"
            />
            {errors.quantity?.type === "required" && (
              <p role="alert" className="text-sm text-red-500">
                Quantity is required
              </p>
            )}
          </div>
          <div className="w-full col-span-3 sm:col-span-1 lg:col-span-1 h-full flex items-center justify-end">
            <Button
              type="submit"
              className="col-span-3 w-full mb-6 sm:col-span-1"
              form="productInfoForm"
            >
              Add Product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
