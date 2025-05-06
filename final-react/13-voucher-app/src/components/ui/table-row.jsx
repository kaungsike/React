import React from "react";
import { Button } from "@/components/ui/button"
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { HiDotsHorizontal } from "react-icons/hi";
  import { LiaEditSolid, LiaTrashAltSolid } from "react-icons/lia";

const Table_Row = ({product : {id, name, price,createdAt},deleteProduct}) => {

  const date = new Date(createdAt);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const d = `${formattedDate} ${formattedTime}`;

  const handleDeleteBtn = (e) => {
    e.preventDefault();
    deleteProduct(id);
  }

  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>{d}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <button type="button" className="w-full mb-1" id={id}>
              <LiaEditSolid  /> Edit
            </button>
            <button type="button" onClick={handleDeleteBtn} className="w-full"  id={id}>
              <LiaTrashAltSolid /> Delete
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default Table_Row;
