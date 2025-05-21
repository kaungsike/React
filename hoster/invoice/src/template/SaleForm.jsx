import React from "react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useSWR from "swr";

const SaleForm = () => {
  const [token] = useCookie("my_token");

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

  !isLoading && console.log(data);

  return (
    <div className="mt-5">
      <form action="">
        <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 place-content-between">
          <div className="w-72">
            <Select label="Select Version">
              {isLoading ? (
                <Option>Loading...</Option>
              ) : (
                data.data.map((item) => (
                  <Option value={item} key={item.id}>
                    {item.product_name}
                  </Option>
                ))
              )}
            </Select>
          </div>
          <div className="w-72">
            <Input label="Name" />
          </div>
          <div className="w-72">
            <Input label="Email" />
          </div>
          <div className="w-72">
            <Input type="date" label="Date" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
