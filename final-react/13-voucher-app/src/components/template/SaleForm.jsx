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
import useRecordStore from "../../store/useRecordStore";
const SaleForm = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { records, addRecord, updateQuantity } = useRecordStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const handleFormSubmit = (data) => {
    const product = JSON.parse(data.product);
    const cost = product.price * Number(data.quantity);

    console.log(data);
    console.log(product);

    const finalData = {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: Number(data.quantity),
        cost,
      };

    records.forEach((el) => console.log(el))

    const isExited = records.find((el) => el.productId == product.id)

    console.log(isExited);

    if (isExited) {
      updateQuantity(isExited.id, Number(data.quantity));
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
                        data.map((item) => (
                          <SelectItem
                            key={item.id}
                            id={item.id}
                            value={JSON.stringify(item)}
                          >
                            {item.name}
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
