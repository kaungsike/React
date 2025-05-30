import {
  ListItemPrefix,
  ListItem,
  List,
  Checkbox,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import ProductTableRow from "./ProductTableRow";
import { Link } from "react-router-dom";
import { useState } from "react";
import { debounce } from "lodash";
import TableRowSklenton from "../animation/TableRowSklenton";
import Pagination from "../animation/Pagination";

export function ProductTable() {
  const [token] = useCookie("my_token");

  const [showId, setShowId] = useState(true);
  const [showCreatedAt, setShowCreatedAt] = useState(true);
  const [showUpdatedAt, setShowUpdatedAt] = useState(true);

  const [url, setUrl] = useState(import.meta.env.VITE_API_URL + "/products");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const { data, isLoading, error } = useSWR(url, fetcher);

  !isLoading && console.log(data);

  const handleSearch = debounce((e) => {
    setUrl(import.meta.env.VITE_API_URL + "/products?q=" + e.target.value);
  }, 1000);

  return (
    <>
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
            to={"/dashboard/products/addNew"}
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
                    Id
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
                  Price
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
            ) : data?.data.length > 0 ? (
              data?.data.map((item) => (
                <ProductTableRow
                  showId={showId}
                  showCreatedAt={showCreatedAt}
                  showUpdatedAt={showUpdatedAt}
                  key={item.id}
                  product={item}
                />
              ))
            ) : (
              <tr className="h-[70px]">
                <td className="h-full text-center" colSpan={6}>
                  There is no products
                </td>
              </tr>
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
}
