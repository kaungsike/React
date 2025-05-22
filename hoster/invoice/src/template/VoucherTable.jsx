import React, { useState } from "react";
import { Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import VoucherTableRow from "./VoucherTableRow";
import { Link } from "react-router-dom";
import TableRowSklenton from "../animation/TableRowSklenton";
import Pagination from "../animation/Pagination";
import { debounce } from "lodash";

const VoucherTable = () => {
  const [token] = useCookie("my_token");

  const [showId, setShowId] = useState(true);
  const [showCreatedAt, setShowCreatedAt] = useState(true);
  const [showUpdatedAt, setShowUpdatedAt] = useState(true);

  const [url, setUrl] = useState(import.meta.env.VITE_API_URL + "/vouchers");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const { data, isLoading, error } = useSWR(url, fetcher);

  const handleSearch = debounce((e) => {
    setUrl(import.meta.env.VITE_API_URL + "/vouchers?q=" + e.target.value);
  }, 1000);

  !isLoading && console.log(data);

  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row items-center gap-3 justify-between mt-5">
        <div className="w-full md:w-72">
          <Input onChange={handleSearch} type="search" label="Search" />
        </div>
        <div className="flex w-full md:w-auto flex-col md:flex-row gap-3 items-center">
          <div className="w-full justify-between flex ">
            <Checkbox
              checked={showId}
              onChange={() => setShowId(!showId)}
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  Id
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  ></Typography>
                </Typography>
              }
            />
            <Checkbox
              checked={showCreatedAt}
              onChange={() => setShowCreatedAt(!showCreatedAt)}
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  Created At
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  ></Typography>
                </Typography>
              }
            />
            <Checkbox
              checked={showUpdatedAt}
              onChange={() => setShowUpdatedAt(!showUpdatedAt)}
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  Updated At
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  ></Typography>
                </Typography>
              }
            />
          </div>{" "}
          <Link
            to={"/dashboard/sales"}
            className="w-full border border-black flex items-center justify-center h-[40px] rounded-md text-white bg-black md:w-[115px]"
          >
            Add New
          </Link>
        </div>
      </div>
      <Card className="h-full w-full overflow-scroll mt-5">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {showId && (
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Voucher ID
                  </Typography>
                </th>
              )}
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Email
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Total
                </Typography>
              </th>
              {showCreatedAt && (
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Created At
                  </Typography>
                </th>
              )}
              {showUpdatedAt && (
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Update At
                  </Typography>
                </th>
              )}
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-end pr-10"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableRowSklenton />
            ) : (
              data.data.map((item) => (
                <VoucherTableRow
                  showId={showId}
                  showCreatedAt={showCreatedAt}
                  showUpdatedAt={showUpdatedAt}
                  key={item.id}
                  product={item}
                />
              ))
            )}
          </tbody>
        </table>
      </Card>
      <div className="w-full mt-5 flex items-center justify-center">
        {!isLoading && (
          <Pagination setUrl={setUrl} links={data?.links} meta={data?.meta} />
        )}
      </div>
    </>
  );
};

export default VoucherTable;
