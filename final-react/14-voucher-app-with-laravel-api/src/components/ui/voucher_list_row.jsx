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
import useRecordStore from "../../store/useRecordStore";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useSWRConfig } from "swr";
import useCookie from "react-use-cookie";

const Voucher_List_Row = ({
  voucher: {
    voucher_id,
    customer_name,
    customer_email,
    net_total,
    saleDate,
    created_at,
    updated_at,
    id,
  },
  deleteProduct,
  unDeleteProduct,
  updateUrl,
  index,
}) => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mutate } = useSWRConfig();
  const [token] = useCookie("my_token");

  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(id);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    if (res.status == 200) {
      setTimeout(() => {
        toast(json.message, {
          description: new Date().toLocaleString(),
        });
      }, 1000);
    } else {
      setTimeout(() => {
        toast(json.message, {
          description: new Date().toLocaleString(),
        });
      }, 1000);
    }

    mutate(import.meta.env.VITE_API_URL + "/vouchers?linit=100");
    setLoading(false);
    setMenuOpen(false);
  };

  const dateForm = (item) => {
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
  };

  return (
    <TableRow>
      <TableCell className="font-medium pl-4">{id}</TableCell>
      <TableCell className="font-medium">{voucher_id}</TableCell>
      <TableCell>{customer_name}</TableCell>
      <TableCell>$ {customer_email}</TableCell>
      <TableCell>$ {net_total}</TableCell>
      <TableCell>{dateForm(created_at)}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link
              to={`/dashboard/voucher/voucherDetail/${id}`}
              className="w-full font-[14px] text-white bg-zinc-900 dark:bg-zinc-100 dark:text-black rounded-md flex items-center justify-center gap-2 h-[36px] mb-1"
              id={id}
            >
              <LiaEditSolid /> Detail
            </Link>
            <Button
              type="button"
              onClick={handleDeleteBtn}
              className="w-full flex items-center justify-center gap-2"
              // id={id}
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

export default Voucher_List_Row;
