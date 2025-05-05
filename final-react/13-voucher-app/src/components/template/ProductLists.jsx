import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LiaEditSolid ,LiaTrashAltSolid} from "react-icons/lia";

const ProductLists = () => {
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
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>OnePlus 10 Pro</TableCell>
                <TableCell>$ 599</TableCell>
                <TableCell>5 May 2025</TableCell>
                <TableCell className="text-right">
                <Button type="button" className="mr-1.5"><LiaEditSolid /></Button>
                <Button type="button"><LiaTrashAltSolid /></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
    </div>
  );
};

export default ProductLists;
