import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiDotsHorizontal } from "react-icons/hi";

import { LiaEditSolid, LiaTrashAltSolid } from "react-icons/lia";

const VoucherLists = () => {
  return (
    <div className="mt-5">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Voucher ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>OnePlus 10 Pro</TableCell>
            <TableCell>$ 599</TableCell>
            <TableCell>5 May 2025</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2"><HiDotsHorizontal /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><LiaEditSolid /> Edit</DropdownMenuItem>
                  <DropdownMenuItem><LiaTrashAltSolid /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* <Button type="button" className="mr-1.5"><LiaEditSolid /></Button>
                <Button type="button"><LiaTrashAltSolid /></Button> */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default VoucherLists;
