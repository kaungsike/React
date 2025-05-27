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
import { debounce, set, throttle } from "lodash";
import useCookie from "react-use-cookie";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductPagination from "./ProductPagination";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

const VoucherLists = () => {
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());
  const location = useLocation();

  const [parms, setParms] = useSearchParams();

  const [url, setUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers" + location.search
  );

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setParms({ q: e.target.value });
      setUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
    } else {
      setParms({});
      setUrl(import.meta.env.VITE_API_URL + "/vouchers" + location.search);
    }
  }, 1000);

  const { data, isLoading, error } = useSWR(url, fetcher);

  dotWave.register();

  const updateUrl = (newUrl) => {
    const currentUrl = new URL(newUrl);

    const newSearchParams = new URLSearchParams(currentUrl.search);
    console.log(newSearchParams);

    const parmsObj = Object.fromEntries(newSearchParams);
    console.log(parmsObj);

    setParms(parmsObj);

    setUrl(newUrl);
  };

  console.log(data);

  const handleSortId = () => {
    const newSearchParams = new URLSearchParams(location.search);

    const parmsObj = Object.fromEntries(newSearchParams);

    console.log(parmsObj.sort_direction);

    if (parmsObj.sort_direction) {
      if (parmsObj.sort_direction === "asc") {
        parmsObj.sort_direction = "desc";
      } else {
        parmsObj.sort_direction = "asc";
      }

      console.log(parmsObj.sort_direction);

      setParms(parmsObj);
      setUrl(
        `${
          import.meta.env.VITE_API_URL
        }/vouchers?sort_by=voucher_id&sort_direction=${parmsObj.sort_direction}`
      );
    } else {
      setParms({ sort_by: "id", sort_direction: "asc" });
      setUrl(
        `${
          import.meta.env.VITE_API_URL
        }/vouchers?sort_by=voucher_id&sort_direction=$?sort_by=id&sort_direction=asc`
      );
    }
  };

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
        <Link
          className="w-full max-w-[130px] font-[12px] text-white bg-zinc-900 dark:bg-zinc-100 dark:text-black rounded-md flex items-center justify-center gap-2 h-[36px] mb-1"
          to={"/dashboard/sale"}
          type="button"
        >
          <LuPlus /> Add New
        </Link>
      </div>{" "}
      <div className="mt-5">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button onClick={handleSortId} className="px-0" variant="ghost">
                  # <ArrowUpDown />
                </Button>
              </TableHead>
              <TableHead>Voucher ID</TableHead>

              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Net Total</TableHead>

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
            ) : data?.data?.length > 0 ? (
              data?.data?.map((item) => (
                <Voucher_List_Row
                  updateUrl={updateUrl}
                  key={item.voucher_id}
                  voucher={item}
                />
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

        {!isLoading && (
          <ProductPagination
            updateUrl={updateUrl}
            meta={data?.meta}
            links={data?.links}
          />
        )}
      </div>
    </>
  );
};

export default VoucherLists;
