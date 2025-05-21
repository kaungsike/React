import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const [token] = useCookie("my_token");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers",
    fetcher
  );

  !isLoading && console.log(data);

  return (
    <Card className="h-full w-full overflow-scroll mt-5">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Voucher ID
              </Typography>
            </th>
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
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Created At
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Update At
              </Typography>
            </th>
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
            <tr>
              <p>Is Loading</p>
            </tr>
          ) : (
            data.data.map((item) => (
              <VoucherTableRow key={item.id} product={item} />
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default VoucherTable;
