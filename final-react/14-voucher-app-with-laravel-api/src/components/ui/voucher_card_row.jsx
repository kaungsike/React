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

const Voucher_Card_Row = ({
  voucher: {
    id,name,price,quantity,cost
  },
  deleteProduct,
  unDeleteProduct,
  index,
}) => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mutate } = useSWRConfig();

  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(id);

    await fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
      method: "DELETE",
    });

    console.log(import.meta.env.VITE_API_URL + "/vouchers/" + id);
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    setLoading(false);
    setMenuOpen(false);
    setTimeout(() => {
      toast("Voucher deleted Successfully", {
        description: new Date().toLocaleString(),
      });
    }, 1000);
  };


  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>$ {cost}</TableCell>
    </TableRow>
  );
};

export default Voucher_Card_Row;
