import React from "react";
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


const ProductLists = () => {

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const { mutate } = useSWRConfig();

  const deleteProduct = async (id) => {
    console.log("u delete product", id);
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
      })
    mutate(import.meta.env.VITE_API_URL + "/products");
  }

  return (
    <div className="mt-5">
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
          ) : data.length == 0 ? (
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
