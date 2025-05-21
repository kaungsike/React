import { Card, Typography } from "@material-tailwind/react";
import SaleTableRow from "./SaleTableRow";
import useRecordsStore from "../store/useRecordsStore";

export function SaleTable() {

  const { records } = useRecordsStore();



  return (
    <Card className=" w-full overflow-scroll md:overflow-auto rounded-md mt-5">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Id
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
                Price
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70 text-center"
              >
                Quantity
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Cost
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70 text-end "
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {records.length>0 ? (
            records.map((item,index) => <SaleTableRow index={index} item={item} key={item.id} />)
          ) : (
            <tr>
              <td colSpan={6} className="text-center h-[50px]">There is no items</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
