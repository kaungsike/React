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
import Voucher_List_Row from "../ui/voucher_list_row";
import useSWR from "swr";

const VoucherLists = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers",
    fetcher
  );


  return (
    <div className="mt-5">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Voucher ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Grand Total</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data.map((item) => <Voucher_List_Row key={item.voucherId} voucher={item} />)}
        </TableBody>
      </Table>
    </div>
  );
};

export default VoucherLists;
