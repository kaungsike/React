import React from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import { Input, IconButton, Typography } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import useRecordsStore from "../store/useRecordsStore";

const SaleForm = () => {
  const [token] = useCookie("my_token");

  const {addRecord,records} = useRecordsStore();

  records && records.map((el) => console.log(el))

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues : {
      product : ""
    }
  });

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=100",
    fetcher
  );

  const handleSaleForm = (data) => {
    console.log(data);
    const product = JSON.parse(data.product)

    const quantity = parseInt(data.quantity)
    const price = parseFloat(product.price)

    const finalData = {
      quantity : quantity,
      cost : (quantity * price).toFixed(2),
      product_id : product.id,
      product : product,
      created_at : new Date().toISOString()
    }

    addRecord(finalData)
    

    console.log(finalData);

    reset()
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleSaleForm)}>
        <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 place-content-between">
          <div className="w-full">
            <Controller
              name="product"
              control={control}
              defaultValue=""
              rules={{ required: "Please select a product" }}
              render={({ field }) => (
                <Select label="Select Product" {...field.product_name} onChange={(value) => field.onChange(value)}>
                  {isLoading ? (
                    <Option>Loading...</Option>
                  ) : (
                    data.data.map((item) => (
                      <Option value={JSON.stringify(item)} key={item.id}>
                        {item.product_name}
                      </Option>
                    ))
                  )}
                </Select>
              )}
            />
          </div>
          <div className="w-full">
            <Input
              {...register("quantity", {
                required: true,
              })}
              label="Quantity"
              type="number"
            />
          </div>
          <div className="w-full">
            <Button type="submit" className="w-full">
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
