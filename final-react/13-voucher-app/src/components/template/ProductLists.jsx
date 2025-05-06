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
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ProductLists = () => {
  const navigate = useNavigate();

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

    toast("Event has been created.");
    mutate(import.meta.env.VITE_API_URL + "/products");
    navigate("/product");
  };

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
