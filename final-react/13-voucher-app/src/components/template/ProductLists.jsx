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
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const ProductLists = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useSWR(
    search
      ? import.meta.env.VITE_API_URL + "/products?name_like=" + search
      : import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const { mutate } = useSWRConfig();

  const deleteProduct = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/products/` + id, {
      method: "DELETE",
    });

    mutate(import.meta.env.VITE_API_URL + "/products");
  };

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

  console.log(search);

  const handleSearchInput = debounce((e) => {
    setSearch(e.target.value);
  },1000);

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
          to={"/productCreate"}
          className="flex h-[36px] rounded-md px-2 dark:bg-orange-600 items-center gap-2 bg-orange-500 text-white text-[14px] text-nowrap"
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
          ) : data.length === 0 ? (
            <TableEmpty />
          ) : (
            data.map((el) => (
              <Table_Row
                deleteProduct={deleteProduct}
                unDeleteProduct={unDeleteProduct}
                product={el}
                key={el.id}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductLists;
