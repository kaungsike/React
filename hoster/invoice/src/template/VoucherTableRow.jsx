import React from "react";
import { Typography } from "@material-tailwind/react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { IoTrashOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";

const VoucherTableRow = ({
  product: { voucher_id, customer_name, customer_email,net_total, created_at, updated_at },
}) => {
  const classes = "p-4 border-b border-blue-gray-50";

  const isoToLocal = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  return (
    <>
      <tr>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {voucher_id}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {customer_name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {customer_email}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            $ {net_total}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {isoToLocal(created_at)}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {isoToLocal(updated_at)}
          </Typography>
        </td>
        <td className='p-4 border-b border-blue-gray-50 text-end'>
          <Typography variant="small" color="blue-gray" className="font-normal">
            <ButtonGroup size="sm" variant="text" className="justify-end">
              <Button><AiTwotoneEdit  size={18} /></Button>
              <Button><IoTrashOutline  size={18} className="text-red-500"/></Button>
            </ButtonGroup>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default VoucherTableRow;
