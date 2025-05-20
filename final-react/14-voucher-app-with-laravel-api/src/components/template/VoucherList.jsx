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
import useCookie from "react-use-cookie";
import { Link } from "react-router-dom";
import ProductPagination from "./ProductPagination";

const VoucherLists = () => {

  const [url, setUrl] = useState(import.meta.env.VITE_API_URL + "/vouchers");

  const [token] = useCookie("my_token");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const handleSearch = debounce((e) => {
    setUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`)
  }, 1000);

  const { data, isLoading, error } = useSWR(url, fetcher);


  !isLoading && console.log(data);

  dotWave.register();

  return (
    <>
      <div className="flex w-full gap-2 items-center justify-between mt-7">
        <div className="flex w-full max-w-[340px] gap-2 items-center">
          <Input
            onChange={handleSearch}
            type="search"
            placeholder="Search with name"
          />
        </div>
        <Link className="w-full max-w-[130px] font-[12px] text-white bg-zinc-900 dark:bg-zinc-100 dark:text-black rounded-md flex items-center justify-center gap-2 h-[36px] mb-1" to={"/dashboard/sale"} type="button">
          <LuPlus /> Add New
        </Link>
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
            ) : data.data?.length > 0 ? (
              data.data?.map((item) => (
                <Voucher_List_Row setUrl={setUrl} key={item.voucher_id} voucher={item} />
              ))
            ) : (
              <tr>
                <th colSpan={6} className="h-[47px]">
                  There is no voucher
                </th>
              </tr>
            )}
          </TableBody>
        </Table>

        {!isLoading && <ProductPagination setUrl={setUrl} meta={data?.meta} links={data?.links}/>}
      </div>
    </>
  );
};

export default VoucherLists;
