import React from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useRecordStore from "../../store/useRecordStore";
import Voucher_Row from "../ui/voucher-row";

const VoucherTable = () => {


    const {records} = useRecordStore();




  return (
    <div className="mt-5">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records && records.map((item,index) => <Voucher_Row product={item} index={index} key={index}/>)}
          <tr className="h-[47px]">
            <td className="text-center font-bold h-full" colSpan={5}>
                Total
            </td>{}
            <td className="text-end px-1.5 h-full font-bold" colSpan={1} > $ {records.reduce((a,b) => a + b.cost,0)} </td>
          </tr>
        </TableBody>
      </Table>
    </div>
  );
};

export default VoucherTable;
