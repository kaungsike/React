import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuPlus } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Voucher_List_Row from "../ui/voucher_list_row";
import useSWR from "swr";
import { dotWave } from "ldrs";
import { debounce, throttle } from "lodash";

const VoucherLists = () => {
  const [search, setSearch] = useState("");

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
  }, 1000);

  const { data, isLoading, error } = useSWR(
    search
      ? import.meta.env.VITE_API_URL + "/vouchers?voucherId_like=" + search
      : import.meta.env.VITE_API_URL + "/vouchers",
    fetcher
  );

  search &&
    console.log(
      import.meta.env.VITE_API_URL + "/vouchers?voucherId_like=" + search
    );

  dotWave.register();

  return (
    <>
      <div className="flex w-full gap-2 items-center justify-between mt-7">
        <div className="flex w-full max-w-[340px] gap-2 items-center">
          <Input onChange={handleSearch} type="search" placeholder="Search with id" />
        </div>
        <Button type="button">
          <LuPlus /> Add New
        </Button>
      </div>{" "}
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
            {isLoading ? (
              <tr>
                <th colSpan={6} className="h-[47px]">
                  <l-dot-wave
                    size="47"
                    speed="1"
                    color="black"
                    className="dark:text-white"
                  ></l-dot-wave>
                </th>
              </tr>
            ) : data.length>0 ?                 data.map((item) => (
              <Voucher_List_Row key={item.voucherId} voucher={item} /> 
            )) : <tr>
            <th colSpan={6} className="h-[47px]">There is no voucher</th>
          </tr>
            }
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default VoucherLists;
