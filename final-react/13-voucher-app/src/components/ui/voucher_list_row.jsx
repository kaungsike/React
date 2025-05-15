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

const Voucher_List_Row = ({
  voucher: {
    voucherId,
    customerName,
    customerEmail,
    grandTotal,
    saleDate,
    createdAt,
    id
  },
  deleteProduct,
  unDeleteProduct,
  index,
}) => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const {mutate} = useSWRConfig();

  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(id);

    await fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
        method: "DELETE",
      });
      
    console.log(import.meta.env.VITE_API_URL + "/vouchers/" +id);
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    setLoading(false);
    setMenuOpen(false);
    setTimeout(() => {
      toast("Voucher deleted Successfully", {
        description: new Date().toLocaleString(),
      });
    }, 1000);
  };

  const date = new Date(createdAt);
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

  return (
    <TableRow>
      <TableCell className="font-medium">{voucherId}</TableCell>
      <TableCell>{customerName}</TableCell>
      <TableCell>$ {customerEmail}</TableCell>
      <TableCell>$ {grandTotal}</TableCell>
      <TableCell>{saleDate}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
