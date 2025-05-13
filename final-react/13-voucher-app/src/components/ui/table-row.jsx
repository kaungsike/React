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

const Table_Row = ({
  product: { id, name, price, createdAt },
  deleteProduct,unDeleteProduct
}) => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [undoLoading, setUndoLoading] = useState(false);

  const product = { id, name, price, createdAt };
  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await deleteProduct(id);
      setLoading(false);
      setMenuOpen(false);
      setTimeout(() => {
        toast("Product deleted Successfully", {
          description: new Date().toLocaleString(),
          action: {
            label: "Undo",
            onClick: handleUndoBtn,
          },
        });
      }, 1000);
    } catch (err) {
      console.error("Delete failed", err);
      setLoading(false);
    }
  };

  const handleUndoBtn = async () => {
    unDeleteProduct(product);
    setUndoLoading(true);
    try {
      await unDeleteProduct(product);
      toast.success("Undo successful");
    } catch (err) {
      toast.error("Undo failed");
    } finally {
      setUndoLoading(false);
      toast.dismiss(t.id);
    }
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
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>{d}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="p-2">
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to={`/productEdit/${id}`} className="w-full font-[14px] text-white bg-orange-500 dark:bg-orange-600 rounded-md flex items-center justify-center gap-2 h-[36px] mb-1" id={id}>
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
