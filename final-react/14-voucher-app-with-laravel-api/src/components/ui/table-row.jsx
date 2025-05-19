import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiDotsHorizontal } from "react-icons/hi";
import { LiaEditSolid, LiaTrashAltSolid } from "react-icons/lia";
import { DotPulse } from "ldrs/react";
import "ldrs/react/DotPulse.css";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import { useSWRConfig } from "swr";

const Table_Row = ({ product: { id, product_name, price, created_at,updated_at } }) => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [undoLoading, setUndoLoading] = useState(false);

  const product = { id, product_name, price, created_at };

  const [token] = useCookie("my_token");

  const {mutate} = useSWRConfig();

  const handleDeleteBtn = async () => {
    setLoading(true);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/products/` + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // 🔐 Include this
        Accept: "application/json",
      },
    });

    console.log(`${import.meta.env.VITE_API_URL}/products/` + id);

    const json = await res.json();

    if (res.status === 200) {
      setTimeout(() => {
        toast.success(json.message, {
          description: new Date().toLocaleString(),
        });
      }, 1000);
      mutate(import.meta.env.VITE_API_URL + `/products`);
    } else {
      setTimeout(() => {
        toast.error(json.message, {
          description: new Date().toLocaleString(),
        });
      }, 1000);
    }
    setLoading(false);
  };

const dateFormat = (item) => {
  const date = new Date(item);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const d = `${formattedDate} ${formattedTime}`;

  return d;

}


  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{product_name}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>{dateFormat(created_at)}</TableCell>
      <TableCell>{dateFormat(updated_at)}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link
              to={`/dashboard/product/edit/${id}`}
              className="w-full font-[14px] text-white bg-orange-500 dark:bg-orange-600 rounded-md flex items-center justify-center gap-2 h-[36px] mb-1"
              id={id}
            >
              <LiaEditSolid /> Edit
            </Link>
            <Button
              type="button"
              onClick={handleDeleteBtn}
              className="w-full flex items-center justify-center gap-2"
              id={id}
              disabled={loading}
            >
              {loading ? (
                <DotPulse size={24} speed={1.3} color="white" />
              ) : (
                <>
                  <LiaTrashAltSolid />
                  Delete
                </>
              )}
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default Table_Row;
