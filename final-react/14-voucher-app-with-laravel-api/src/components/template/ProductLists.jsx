import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "../ui/table-skeleton";
import { TableEmpty } from "../ui/table-empty-state";
import Table_Row from "../ui/table-row";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuPlus } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { debounce, set } from "lodash";
import useCookie from "react-use-cookie";
import ProductPagination from "./ProductPagination";

const ProductLists = () => {
  const [token] = useCookie("my_token");

  const [parms, setParms] = useSearchParams();

  const location = useLocation();

  const [url, setUrl] = useState(
    import.meta.env.VITE_API_URL + "/products" + location.search
  );
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useSWR(url, fetcher);

  const { mutate } = useSWRConfig();

  const unDeleteProduct = async (product) => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    mutate(import.meta.env.VITE_API_URL + "/products");
  };

  const updateUrl = (newUrl) => {
    const currenUrl = new URL(newUrl);

    const newSearchParms = new URLSearchParams(currenUrl.search);

    const parmsObj = Object.fromEntries(newSearchParms);

    setParms(parmsObj);

    setUrl(newUrl)

  };

  const handleSearchInput = debounce((e) => {
    if(e.target.value){
      setParms({q : e.target.value})
      setUrl(`${import.meta.env.VITE_API_URL}/products`+location.search);
    }else{
      setParms({});
      setUrl(`${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`);
    }
  }, 1000);

  return (
    <div className="mt-5">
      <div className="flex w-full gap-2 items-center justify-between mt-7">
        <div className="flex w-full max-w-[340px] gap-2 items-center">
          <Input
            onChange={handleSearchInput}
            type="search"
            placeholder="Search by name"
          />
        </div>
        <Link
          to={"/dashboard/productCreate"}
          className="flex h-[36px] rounded-md px-2 dark:bg-zinc-100 dark:text-black items-center gap-2 bg-zinc-900 text-white text-[14px] text-nowrap"
        >
          <LuPlus /> Add New
        </Link>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Update At</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableSkeleton />
          ) : error ? (
            <tr>
              <td colSpan={5} className="text-center text-red-500 py-5">
                Failed to load products.
              </td>
            </tr>
          ) : data.data.length === 0 ? (
            <TableEmpty />
          ) : (
            data.data.map((el) => (
              <Table_Row
                unDeleteProduct={unDeleteProduct}
                product={el}
                key={el.id}
              />
            ))
          )}
        </TableBody>
      </Table>
      {!isLoading && (
        <ProductPagination
          updateUrl={updateUrl}
          meta={data?.meta}
          links={data?.links}
        />
      )}
    </div>
  );
};

export default ProductLists;
