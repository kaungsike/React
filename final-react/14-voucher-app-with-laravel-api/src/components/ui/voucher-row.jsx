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

const Voucher_Row = ({
  product: { id, product_name, price, createdAt },
  deleteProduct,
  unDeleteProduct,
  cost,
  quantity,

  index,
}) => {


  

  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { deleteRecord, updateQuantity } = useRecordStore();

  const product = { id, product_name, price, createdAt };
  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setLoading(true);

    deleteRecord(id);

    setLoading(false);
    setMenuOpen(false);
    setTimeout(() => {
      toast("Product deleted Successfully", {
        description: new Date().toLocaleString(),
      });
    }, 1000);
  };


  const handleAddQuantity = () => {
    updateQuantity(id, 1);
  };
  const handleSubQuantity = () => {
    updateQuantity(id, -1);
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
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell>{product_name}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>
        {" "}
        <Button onClick={handleSubQuantity} variant="outline" size="icon">
        <FiMinus />
        </Button>{" "}
        {quantity}{" "}
        <Button onClick={handleAddQuantity} variant="outline" size="icon">
        <FiPlus />
        </Button>
      </TableCell>
      <TableCell>{cost}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link
              to={`/productEdit/${id}`}
              className="w-full font-[14px] text-white bg-zinc-900 dark:bg-zinc-100 dark:text-black rounded-md flex items-center justify-center gap-2 h-[36px] mb-1"
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

export default Voucher_Row;
